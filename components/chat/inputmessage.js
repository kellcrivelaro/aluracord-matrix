export default function InputMessage() {
  return (
    <div className=" border-neu-400/40 border-t w-full flex">
      <textarea
        className="border-0 w-full h-[5rem] rounded-md bg-transparent text-neu-000 px-2 pt-1 resize-none"
        type="textarea"
        placeholder="Digite sua mensagem..."
      />
      <button
        className="w-28 rounded-md text-neu-300 font-bold text-md hover:text-neu-000 
      hover:bg-neu-400/20"
      >
        Enviar
      </button>
    </div>
  );
}
