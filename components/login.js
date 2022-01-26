import { useState } from "react";

function Login({ handleInputChange }) {
  const [inputUser, setInputUser] = useState("");

  const handleSetUser = (event) => {
    //setInputUser(event.target.value);
    handleInputChange(event.target.value);
  };

  /*const handleInputChange = (event) => {
    setInputUser(event.target.value);
    
  };*/

  return (
    <div className="flex text-center w-76 mx-6">
      <form className="flex flex-col justify-between" autoComplete="off">
        <div>
          <p className="text-neu-100 text-2xl font-bold my-3 mx-4">
            Boas vindas de volta!
          </p>
          <p className="text-neu-400/90 text-sm">Aluracord - Matrix</p>
        </div>
        <div className="w-auto">
          <input
            name="txtUsername"
            className="bg-neu-400/60 rounded-md ring-1 ring-neu-400/80 w-full mb-3 text-center
            hover:bg-neu-400/80 hover:ring-neu-300 text-neu-100 pl-2 placeholder:text-center"
            type="text"
            placeholder="Entre com seu usuário GitHub"
            onChange={handleSetUser}
            autoFocus
          />
          <div>
            <input
              name="btnEntrar"
              className="w-full bg-matrix-800 text-neu-200 font-bold rounded-md h-7
            hover:bg-matrix-500 hover:shadow-matrix-400/60 hover:shadow-lg
            hover:text-white brightness-110"
              type="submit"
              value="Entrar"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
