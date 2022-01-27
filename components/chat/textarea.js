import InputMessage from "./inputmessage";
import Message from "../chat/message";

const TextArea = ({ handleNewMessage, messageList }) => {
  return (
    <div className="flex flex-col justify-end bg-neu-500/80 rounded-md h-[26rem] w-[42rem]">
      {messageList.map(() => {
        return <Message />;
      })}
      <InputMessage handleNewMessage={handleNewMessage} />
    </div>
  );
};

export default TextArea;
