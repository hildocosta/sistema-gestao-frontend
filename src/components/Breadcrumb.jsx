"use client";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ itemPai = "Dashboard", itemAtual }) {
  return (
    <nav className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 backdrop-blur-md border border-slate-200/60 rounded-full mb-3 shadow-sm shadow-slate-200/10">
      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
      <span className="text-[9px] text-slate-400 font-black uppercase tracking-[0.15em]">
        {itemPai}
      </span>
      <ChevronRight size={10} className="text-slate-300 mx-0.5" />
      <span className="text-[9px] text-blue-600 font-black uppercase tracking-[0.15em]">
        {itemAtual}
      </span>
    </nav>
  );
}