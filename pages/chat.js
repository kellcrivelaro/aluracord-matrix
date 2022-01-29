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
  const supaDeleteListener = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const router = useRouter();
  const user = router.query.username;
  const [messageList, setMessageList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  /*a função realTimeMessages retornará uma outra função que retornará a nova mensagem sempre que uma nova mensagem for 
  adicionada na tabela*/
  const realTimeMessages = (addMessage) => {
    return supabaseClient
      .from("messages")
      .on("INSERT", (liveMessage) => {
        addMessage(liveMessage.new);
      })
      .subscribe();
  };

  React.useEffect(() => {
    refreshMessageList();
    //fake loading time -> para testar o spiner
    setInterval(() => setLoading(false), 750);
    /*a função supaSubscribe é do tipo "realTimeMessages" e será executada no useEffect retornando uma função que por sua vez 
    retorna uma nova mensagem que será usada no set da lista de mensagens que por sua vez retorná um array com as mensagens 
    atualizadas*/

    const supaSubscribe = realTimeMessages((newMsg) => {
      setMessageList((valorAtualDaLista) => {
        return [newMsg, ...valorAtualDaLista];
      });
    });

    supaDeleteListener
      .from("messages")
      .on("DELETE", () => {
        refreshMessageList();
      })
      .subscribe();

    //retorna uma função que faz unsubscribe no serviço para evitar vazamento de memória
    return () => {
      supaSubscribe.unsubscribe();
    };
  }, []);

  const refreshMessageList = () => {
    supabaseClient
      .from("messages")
      .select("*")
      .order("id", { ascending: false })
      .then(({ data }) => {
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
        //setMessageList([data[0], ...messageList]);
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
        <Header user={user} />
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
