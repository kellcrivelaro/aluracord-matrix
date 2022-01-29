import Image from "next/image";

export default function Message({ message, deleteMessage }) {
  return (
    <div
      className="flex w-fit rounded-md ml-2 space-x-2 p-1 px-2 text-neu-200 hover:bg-neu-700/80 hover:text-neu-100 group
    items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300 origin-bottom-left
    "
    >
      <div className="pt-1 ">
        <Image
          src={`https://github.com/${message.from}.png`}
          width={25}
          height={25}
          className="rounded-full"
        />
      </div>
      <strong>{message.from}</strong>: {message.text}
      <div
        className="opacity-0 group-hover:opacity-100 transition-opacity ease-in delay-300 cursor-pointer"
        onClick={() => {
          deleteMessage(message);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}
