function Box({ children }) {
  return (
    <div className="flex rounded-md bg-neu-700 ring-1 ring-neu-000/20 shadow-lg shadow-neu-400/80 w-fit py-8 px-2 mb-32">
      {children}
    </div>
  );
}

export default Box;
