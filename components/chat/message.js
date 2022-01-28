import Image from "next/image";
import { useRef } from "react";

export default function Message({ message }) {
  const img = useRef(null);

  function handleMouseOver(event) {
    //img.current.className = "30px;";
  }

  function deletar() {
    alert("ola");
  }
  return (
    <div
      className="flex w-fit rounded-md ml-2 space-x-2 p-1 px-2 text-neu-200 hover:bg-neu-700/80 hover:text-neu-100 group
    items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300 origin-bottom-left
    "
      onMouseOver={handleMouseOver}
    >
      <div className="pt-1 ">
        <Image
          ref={img}
          src={`https://github.com/${message.from}.png`}
          width={25}
          height={25}
          className="rounded-full"
        />
      </div>
      <strong>{message.from}</strong>: {message.text}
      <div
        className="opacity-0 group-hover:opacity-100 transition-opacity ease-in delay-300 cursor-pointer"
        onClick={deletar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}
