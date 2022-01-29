import Image from "next/image";
import avatar from "../public/matrix.jpg";

function Avatar({ user }) {
  return (
    <>
      <div className="bg-neu-800 rounded-md text-center p-3 mr-6">
        <Image
          src={user ? `https://github.com/${user}.png` : avatar}
          width={140}
          height={140}
          className="rounded-full"
        />
        <div className="bg-neu-500 h-7 rounded-2xl mt-2 font-bold text-lg text-neu-200">
          {user ? user : "-"}
        </div>
      </div>
    </>
  );
}

export default Avatar;
