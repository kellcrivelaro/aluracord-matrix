function Login(props) {
  return (
    <div className="flex text-center w-76 mx-6">
      <form className="flex flex-col justify-between">
        <div>
          <p className="text-neu-100 text-3xl font-bold my-2">
            Boas vindas de volta!
          </p>
          <p className="text-neu-400/90 text-sm">Aluracord - Matrix</p>
        </div>
        <div className="w-auto mb-5">
          <input
            className="bg-neu-400/60 rounded-md ring-1 ring-neu-400/80 w-full mb-3
            hover:bg-neu-400/80 hover:ring-neu-300 text-neu-100 pl-2 placeholder:text-center"
            type="text"
            placeholder="Entrar com seu usuário GitHub"
            autoFocus
          />
          <div>
            <input
              className="w-full bg-matrix-800 text-neu-200 font-bold rounded-md h-7
            hover:bg-matrix-500 hover:shadow-matrix-400/60 hover:shadow-lg
            hover:text-white brightness-110"
              type="submit"
              value="Entrar"
              onChange={this.teste}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
