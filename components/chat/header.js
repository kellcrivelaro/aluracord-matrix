import { useRouter } from "next/router";

export default function Header({ user }) {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between w-full mb-2 items-end">
      <div className="text-neu-000 font-bold ml-6 flex flex-row items-end">
        <p className="text-4xl">Chat - </p>
        <p className="text-3xl ml-3">{user}</p>
      </div>
      <input
        name="btnLogout"
        className="w-[6rem] bg-matrix-800 text-neu-200 font-bold rounded-md h-7 px-3 mb-1
            hover:bg-matrix-500 hover:shadow-matrix-400/60 hover:shadow-lg
            hover:text-white brightness-110
            transition ease-in-out delay-150 duration-150"
        type="submit"
        value="Logout"
        onClick={router.back}
      />
    </div>
  );
}
