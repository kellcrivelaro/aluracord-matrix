function Box({ children }) {
  return (
    <div className="flex flex-col rounded-md bg-neu-700 ring-1 ring-neu-000/20 shadow-lg shadow-neu-400/80 w-fit py-4 px-6 mb-16">
      {children}
    </div>
  );
}

export default Box;
