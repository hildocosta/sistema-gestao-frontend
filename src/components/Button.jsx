export default function Button({ text, type = "button" }) {
  return (
    <button
      type={type}
      className="w-full bg-linear-to-tl from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] uppercase text-xs tracking-wider cursor-pointer"
    >
      {text}
    </button>
  );
}