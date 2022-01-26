export default function Header() {
  return (
    <div className="flex flex-row justify-between w-full mb-2 items-end">
      <p className="text-neu-000 text-4xl font-bold ml-6">Chat</p>
      <input
        name="btnLogout"
        className="w-[6rem] bg-matrix-800 text-neu-200 font-bold rounded-md h-7 px-3 mb-1
            hover:bg-matrix-500 hover:shadow-matrix-400/60 hover:shadow-lg
            hover:text-white brightness-110"
        type="submit"
        value="Logout"
      />
    </div>
  );
}
