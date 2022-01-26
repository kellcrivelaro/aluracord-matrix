import InputMessage from "./inputmessage";

export default function TextArea({ children }) {
  return (
    <div className="flex items-end bg-neu-500/80 rounded-md h-96 w-[42rem]">
      <InputMessage />
    </div>
  );
}
