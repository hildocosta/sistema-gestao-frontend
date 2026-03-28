export default function FormInput({ label, required, ...props }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-black text-slate-400 uppercase ml-1 text-left block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        {...props}
        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-blue-500/5 transition outline-none"
      />
    </div>
  );
}