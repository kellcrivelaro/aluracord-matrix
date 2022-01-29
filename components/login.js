import { useRouter } from "next/router";

function Login({ handleInputChange }) {
  const router = useRouter();
  const handleSetUser = (event) => {
    if (event.target.value.length > 2) {
      handleInputChange(event.target.value);
    } else {
      handleInputChange("");
    }
  };

  const formSubmit = (event) => {
    let user = event.target.children[1].children[0].value;
    event.preventDefault();
    fetch(`https://api.github.com/users/${user}`).then((response) =>
      response.json().then((data) => {
        if (user.length < 3) {
          alert("Usuário inválido!");
        } else if (data.message == "Not Found") {
          alert("Usuário inválido");
        } else {
          router.push(`/chat?username=${user}`);
        }
      })
    );
  };
  return (
    <div className="flex text-center w-76 mx-6">
      <form
        className="flex flex-col justify-between"
        autoComplete="off"
        onSubmit={formSubmit}
      >
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
            required
          />
          <div>
            <input
              name="btnEntrar"
              className="w-full bg-matrix-800 text-neu-200 font-bold rounded-md h-7
            hover:bg-matrix-500 hover:shadow-matrix-400/60 hover:shadow-lg
            hover:text-white brightness-110
              transition ease-in-out delay-150 duration-150"
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
