import React from "react";

export default function StatusBadge({ status }) {
  // Normaliza o texto: remove acentos e deixa em minúsculo
  const s = status?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const styles = {

    // Status de Usuários
    ativo: "bg-emerald-50 text-emerald-600 border-emerald-100",
    inativo: "bg-red-50 text-red-600 border-red-100",
    bloqueado: "bg-slate-100 text-slate-600 border-slate-200",

    // Casos para ATRAZADA / ATRASADO
    atrasada: "bg-red-50 text-red-600 border-red-100",
    atrasado: "bg-red-50 text-red-600 border-red-100",
    
    // Casos para EM DIA
    "em dia": "bg-emerald-50 text-emerald-600 border-emerald-100",
    
    // Casos para ALERTA / PENDENTE
    alerta: "bg-amber-50 text-amber-600 border-amber-100",
    pendente: "bg-amber-50 text-amber-600 border-amber-100",
    
    // Casos para CONCLUIDO
    concluido: "bg-blue-50 text-blue-600 border-blue-100",
  };

  const dots = {
    ativo: "bg-emerald-500 shadow-emerald-500/50",
    inativo: "bg-red-500 shadow-red-500/50",
    bloqueado: "bg-slate-400",
    atrasada: "bg-red-500 shadow-red-500/50",
    atrasado: "bg-red-500 shadow-red-500/50",
    "em dia": "bg-emerald-500 shadow-emerald-500/50",
    alerta: "bg-amber-500 shadow-amber-500/50",
    pendente: "bg-amber-500 shadow-amber-500/50",
    concluido: "bg-blue-500 shadow-blue-500/50",
  };

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${styles[s] || "bg-slate-50 text-slate-500 border-slate-100"}`}>
      <div className={`w-1.5 h-1.5 rounded-full ${dots[s] || "bg-slate-300"}`} />
      <span className="text-[9px] font-black uppercase tracking-widest leading-none">
        {status}
      </span>
    </div>
  );
}