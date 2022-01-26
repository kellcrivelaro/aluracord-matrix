import React from "react";
import Avatar from "../components/avatar.js";
import Login from "../components/login.js";

export default function Home() {
  const [username, setUsername] = React.useState("");

  const handleInputChange = (user) => {
    //const newUsername = user;
    setUsername(user);
  };

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
      <div className="flex rounded-md bg-neu-700 ring-1 ring-neu-000/20 shadow-lg shadow-neu-400/80 w-fit py-8 px-2 mb-20">
        <Login handleInputChange={handleInputChange} />
        <div className="w-4"></div>
        <Avatar user={username} />
      </div>
    </div>
  );
}
