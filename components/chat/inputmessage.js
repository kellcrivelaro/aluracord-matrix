import React, { useRef } from "react";

export default function InputMessage({ handleNewMessage }) {
  const [message, setMessage] = React.useState("");
  const textarea = useRef(null);
  const handleSubmit = () => {
    if (message !== "") {
      handleNewMessage(message);
      setMessage("");
    }
    textarea.current.focus();
  };

  return (
    <div className=" border-neu-400/40 border-t w-full flex">
      <textarea
        ref={textarea}
        className="border-0 w-full h-[5rem] rounded-md bg-transparent text-neu-000 px-2 pt-1 resize-none"
        type="textarea"
        placeholder="Digite sua mensagem..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit();
          }
        }}
        value={message}
      />
      <button
        className="w-28 rounded-md text-neu-300 font-bold text-md hover:text-neu-000 
      hover:bg-neu-400/20"
        onClick={handleSubmit}
      >
        Enviar
      </button>
    </div>
  );
}
