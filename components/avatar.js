import Image from "next/image";

function Avatar(props) {
  return (
    <>
      <div className="bg-neu-800 rounded-md text-center p-3 mr-6">
        <Image
          src={`https://github.com/kellcrivelaro.png`}
          width={150}
          height={150}
          className="rounded-full"
        />
        <p className="font-bold text-lg text-neu-200">Kellcrivelaro</p>
      </div>
    </>
  );
}

export default Avatar;
