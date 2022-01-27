export default function Message({ message }) {
  console.log(message);
  return (
    <div
      className="flex w-fit rounded-md m-0.5 ml-3 px-2 text-neu-200  hover:bg-neu-700/80 
    divide-neu-900 hover:text-neu-100 h-20"
    >
      {message.text}
    </div>
  );
}
