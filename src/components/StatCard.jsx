import React from "react";

export default function StatCard({ label, value, icon: Icon, color = "blue" }) {
  // Agora usamos essas classes na div principal para a borda
  const borderColors = {
    blue: "border-blue-100",
    emerald: "border-emerald-100",
    red: "border-red-100",
    amber: "border-amber-100",
  };

  const iconColors = {
    blue: "bg-blue-50 text-blue-600",
    emerald: "bg-emerald-50 text-emerald-600",
    red: "bg-red-50 text-red-600",
    amber: "bg-amber-50 text-amber-600",
  };

  return (
    <div className={`bg-white p-4 rounded-2xl border ${borderColors[color]} shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconColors[color]}`}>
        {Icon && <Icon size={20} />}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
        <p className="text-lg font-bold text-slate-700">{value}</p>
      </div>
    </div>
  );
}