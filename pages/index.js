import React from "react";
import Avatar from "../components/avatar.js";
import Login from "../components/register.js";

export default function Home() {
  const [username, setUsername] = React.useState("");

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="flex rounded-md bg-neu-700 ring-1 ring-white/10  shadow-md shadow-neu-500 w-fit py-6 mb-20">
        <Login teste={setUsername}/>
        <Avatar />
      </div>
    </div>
  );
}
