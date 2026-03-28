import React from "react";
import {Filter } from "lucide-react";
import SearchInput from "./SearchInput";

export default function DataTable({ 
  columns, 
  data, 
  searchPlaceholder = "Buscar...", 
  searchValue, 
  onSearchChange,
  renderRow // Função que define como cada linha será desenhada
}) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      {/* --- BARRA DE TOPO (Busca e Filtro) --- */}
      <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
        <SearchInput 
          placeholder={searchPlaceholder} 
          value={searchValue} 
          onChange={onSearchChange} 
        />
        <button className="p-2.5 text-slate-400 hover:bg-white hover:text-blue-600 rounded-xl transition border border-transparent hover:border-slate-100 cursor-pointer">
          <Filter size={20} />
        </button>
      </div>

      {/* --- TABELA --- */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-50">
              {columns.map((col, index) => (
                <th 
                  key={index} 
                  className={`px-8 py-4 ${col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : ''}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.length > 0 ? (
              data.map((item, index) => renderRow(item, index))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-8 py-12 text-center text-slate-400 text-sm">
                  Nenhum registro encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}