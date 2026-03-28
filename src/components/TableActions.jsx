import React from "react";
import { Edit2, Trash2, ChevronRight } from "lucide-react";

export default function TableActions({ onEdit, onDelete, onView, showView = true }) {
  return (
    <div className="flex justify-center gap-2">
      {/* Botão Editar */}
      <button 
        onClick={onEdit}
        className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 cursor-pointer shadow-xs active:scale-90 transition-transform hover:bg-blue-100"
        title="Editar"
      >
        <Edit2 size={14} />
      </button>

      {/* Botão Excluir */}
      <button 
        onClick={onDelete}
        className="p-2.5 bg-red-50 text-red-600 rounded-xl border border-red-100 cursor-pointer shadow-xs active:scale-90 transition-transform hover:bg-red-100"
        title="Excluir"
      >
        <Trash2 size={14} />
      </button>

      {/* Botão Ver Detalhes (Opcional) */}
      {showView && (
        <button 
          onClick={onView}
          className="p-2.5 bg-slate-100 text-slate-600 rounded-xl border border-slate-200 cursor-pointer shadow-xs active:scale-90 transition-transform hover:bg-slate-200"
          title="Ver detalhes"
        >
          <ChevronRight size={14} />
        </button>
      )}
    </div>
  );
}