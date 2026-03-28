export default function FormSelect({ label, options, value, onChange }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-black text-slate-400 uppercase ml-1 text-left block">
        {label}
      </label>
      <select 
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-blue-500/5 transition outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}