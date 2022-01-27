import InputMessage from "./inputmessage";
import Message from "../chat/message";

const TextArea = ({ handleNewMessage, messageList }) => {
  return (
    <div className="flex flex-col justify-end bg-neu-500/80 rounded-md h-[26rem] w-[42rem]">
      <div className="overscroll-y-auto  overflow-y-auto overflow-x-clip">
        {messageList.map((mensagem) => {
          return <Message message={mensagem} key={mensagem.key} />;
        })}
      </div>
      <hr className="mx-4 mt-2" style={{ border: "0.5px solid #9AA5B1" }}></hr>
      <InputMessage handleNewMessage={handleNewMessage} />
    </div>
  );
};

export default TextArea;
