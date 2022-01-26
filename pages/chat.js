import Background from "../components/background";
import Box from "../components/chat/box";
import Header from "../components/chat/header";
import Message from "../components/chat/message";
import TextArea from "../components/chat/textarea";

export default function Chat() {
  return (
    <Background>
      <Box>
        <Header />
        <TextArea>
          <Message />
        </TextArea>
      </Box>
    </Background>
  );
}
