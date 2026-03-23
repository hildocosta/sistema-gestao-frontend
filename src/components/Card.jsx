export default function Card({ children }) {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 w-full max-w-md">
      {children}
    </div>
  );
}