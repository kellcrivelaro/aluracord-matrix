import React from "react";
import Background from "../components/background";
import Box from "../components/chat/box";
import Header from "../components/chat/header";
import TextArea from "../components/chat/textarea";

import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";

export default function Chat() {
  const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI5Mjc2NywiZXhwIjoxOTU4ODY4NzY3fQ.1Q6eJFATKbw4WREXYzYMgYRbmcIs9C4SS-M_G5lGMWc";
  const SUPABASE_URL = "https://xkovshxegvmomqquwnbq.supabase.co";
  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const router = useRouter();
  const user = router.query.username;
  const [messageList, setMessageList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    refreshMessageList();
    setInterval(() => setLoading(false), 750);
  }, []);

  const refreshMessageList = () => {
    supabaseClient
      .from("messages")
      .select("*")
      .order("id", { ascending: false })
      .then(({ data }) => {
        console.log(data);
        setMessageList(() => {
          return data;
        });
      });
  };

  const handleNewMessage = (newMessage) => {
    const message = {
      from: user,
      text: newMessage,
    };

    supabaseClient
      .from("messages")
      .insert([message])
      .then(({ data }) => {
        setMessageList([data[0], ...messageList]);
      });
  };

  const deleteMessage = (msg) => {
    supabaseClient
      .from("messages")
      .delete(msg)
      .match({ id: msg.id })
      .then((data) => {
        refreshMessageList();
      });
  };

  return (
    <Background>
      <Box>
        <Header user={user}/>
        <TextArea
          handleNewMessage={handleNewMessage}
          messageList={messageList}
          deleteMessage={deleteMessage}
          loading={loading}
        />
      </Box>
    </Background>
  );
}
