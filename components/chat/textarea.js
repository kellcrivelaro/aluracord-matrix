import InputMessage from "./inputmessage";
import Message from "../chat/message";

const TextArea = ({
  handleNewMessage,
  messageList,
  loading,
  deleteMessage,
}) => {
  return (
    <div className="flex flex-col justify-end bg-neu-500/80 rounded-md w-[48rem] h-[32rem]">
      {loading ? (
        <div className="flex flex-1 place-items-center justify-center">
          <div
            className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-matrix-700"
            role="status"
          ></div>
        </div>
      ) : (
        <div className="overflow-y-auto flex flex-col-reverse">
          {messageList.map((message) => {
            return (
              <Message
                message={message}
                key={message.id}
                deleteMessage={deleteMessage}
              />
            );
          })}
        </div>
      )}

      <div className="p-1"></div>
      <InputMessage handleNewMessage={handleNewMessage} />
    </div>
  );
};

export default TextArea;
