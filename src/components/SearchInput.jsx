import { Search } from "lucide-react";

export default function SearchInput({ placeholder, value, onChange }) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
      <input 
        type="text" 
        value={value}
        onChange={onChange}
        placeholder={placeholder} 
        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition"
      />
    </div>
  );
}