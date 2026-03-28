import React from "react";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, title, subtitle, icon: Icon, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop (Fundo escuro) */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      {/* Janela do Modal */}
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
        
        {/* Header Estilizado */}
        <div className="bg-linear-to-tr from-[#1a73e8] to-[#63a4ff] p-8 text-white flex justify-between items-center relative overflow-hidden">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="bg-white/10 p-2 rounded-xl">
                <Icon size={20} />
              </div>
            )}
            <div>
              <h3 className="text-lg font-bold">{title}</h3>
              {subtitle && (
                <p className="text-[10px] opacity-90 uppercase font-black tracking-widest mt-1">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-white/10 rounded-full transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Conteúdo (O formulário entra aqui) */}
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}