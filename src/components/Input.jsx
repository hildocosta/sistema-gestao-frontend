export default function Input({ label, type, value, onChange }) {
  return (
    <div className="mb-6 relative">
      <label className="block text-[12px] font-bold text-slate-500 uppercase mb-1 ml-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-material-blue focus:border-transparent outline-none transition-all text-gray-800 bg-transparent placeholder-gray-400"
        placeholder={`Digite seu ${label.toLowerCase()}...`}
        required
      />
    </div>
  );
}