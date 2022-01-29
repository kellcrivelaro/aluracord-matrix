import React from "react";
import Avatar from "../components/avatar.js";
import Background from "../components/background.js";
import Box from "../components/box.js";
import Login from "../components/login.js";

export default function Home() {
  const [username, setUsername] = React.useState("");

  const handleInputChange = (user) => {
    //const newUsername = user;
    setUsername(user);
  };

  return (
    <Background>
      <Box>
        <Login handleInputChange={handleInputChange} />
        <div className="w-4"></div>
        <Avatar user={username} />
      </Box>
    </Background>
  );
}
