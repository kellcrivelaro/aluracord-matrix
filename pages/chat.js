import React from "react";
import Background from "../components/background";
import Box from "../components/chat/box";
import Header from "../components/chat/header";

import TextArea from "../components/chat/textarea";

export default function Chat() {
  const [messageList, setMessageList] = React.useState([]);

  const handleNewMessage = (newMessage) => {
    const message = [
      {
        id: messageList.length + 1,
        from: "kellcrivelaro",
        text: newMessage,
      },
      ...messageList,
    ];

    setMessageList(message);
  };

  return (
    <Background>
      <Box>
        <Header />
        <TextArea
          handleNewMessage={handleNewMessage}
          messageList={messageList}
        />
      </Box>
    </Background>
  );
}
