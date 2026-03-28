"use client";
import { useState } from "react";
import { 
  UserPlus, 
  Shield, 
  ClipboardCheck, 
  CheckCircle2,
  Database
} from "lucide-react";
import Breadcrumb from "../../../components/Breadcrumb";
import ActionButton from "../../../components/ActionButton";

export default function CadastrarPage() {
  const [abaAtiva, setAbaAtiva] = useState("militar");
  const [formEnviado, setFormEnviado] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulação de salvamento
    setTimeout(() => {
      setIsSaving(false);
      setFormEnviado(true);
      setTimeout(() => setFormEnviado(false), 3000);
    }, 1500);
  };

  return (
    <div className="animate-in fade-in duration-700 space-y-8 text-left">
      
      {/* Notificação de Sucesso */}
      {formEnviado && (
        <div className="fixed top-24 right-8 z-50 animate-in slide-in-from-right-10 flex items-center gap-3 bg-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-emerald-500/30 font-bold text-sm border border-white/20">
          <CheckCircle2 size={20} strokeWidth={3} /> Cadastro realizado com sucesso!
        </div>
      )}

      {/* --- CABEÇALHO --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <Breadcrumb itemAtual="Cadastrar Novo Registro" />
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            Gestão de Entradas
          </h1>
          <p className="text-xs text-slate-400 mt-1 font-medium">Inclusão de novos dados no banco de dados do 17º BPM.</p>
        </div>

        {/* SELETOR DE CATEGORIA (ABAS) */}
        <div className="flex gap-2 p-1.5 bg-slate-100/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-inner">
          <button 
            type="button"
            onClick={() => setAbaAtiva("militar")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
              abaAtiva === "militar" 
              ? "bg-white text-blue-600 shadow-md scale-100" 
              : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
            }`}
          >
            <UserPlus size={14} strokeWidth={3} /> Militar
          </button>
          <button 
            type="button"
            onClick={() => setAbaAtiva("servico")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
              abaAtiva === "servico" 
              ? "bg-white text-blue-600 shadow-md scale-100" 
              : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Database size={14} strokeWidth={3} /> Serviço
          </button>
        </div>
      </div>

      {/* --- FORMULÁRIO --- */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-blue-500 to-cyan-400 opacity-20"></div>
        
        <form onSubmit={handleSubmit} className="p-10">
          
          {abaAtiva === "militar" ? (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100"><Shield size={20} strokeWidth={2.5} /></div>
                <div>
                  <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest leading-none">Dados do Efetivo</h2>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight mt-1 italic">Vínculo Direto com a SJD</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 block">Nome Completo</label>
                  <input required type="text" placeholder="Ex: Anderson Silva" className="w-full h-13.5 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-300 outline-none transition-all font-medium text-slate-700 shadow-xs"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 block">RE (Registro Estadual)</label>
                  <input required type="text" placeholder="000.000-0" className="w-full h-13.5 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-300 outline-none transition-all font-mono font-bold text-slate-600 shadow-xs"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 block">Posto/Graduação</label>
                  <select className="w-full h-13.5 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-300 outline-none transition-all font-bold text-slate-600 cursor-pointer shadow-xs">
                    <option>Soldado</option>
                    <option>Cabo</option>
                    <option>3º Sargento</option>
                    <option>2º Sargento</option>
                    <option>1º Sargento</option>
                    <option>Subtenente</option>
                    <option>Oficial</option>
                  </select>
                </div>
                <div className="space-y-2 lg:col-span-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 block">E-mail Institucional (@pm.pr.gov.br)</label>
                  <input required type="email" placeholder="militar@pm.pr.gov.br" className="w-full h-13.5 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-300 outline-none transition-all font-medium text-slate-700 shadow-xs"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 block">Nível de Acesso</label>
                  <select className="w-full h-13.5 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-300 outline-none transition-all font-black text-blue-600 cursor-pointer shadow-xs">
                    <option>Operador (Padrão)</option>
                    <option>Gestor de Logística</option>
                    <option>Administrador</option>
                  </select>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl border border-amber-100"><ClipboardCheck size={20} strokeWidth={2.5} /></div>
                <div>
                  <h2 className="text-sm font-black text-slate-800 uppercase tracking-widest leading-none">Novo Item de Manutenção</h2>
                  <p className="text-[10px] text-amber-600 uppercase font-bold tracking-tight mt-1 italic">Sincronização Automática com Planilha Master</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 block">Descrição do Serviço</label>
                  <input required type="text" placeholder="Ex: Manutenção Preventiva Freezer" className="w-full h-13.5 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-300 outline-none transition-all font-bold text-slate-700 shadow-xs"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 block">Periodicidade</label>
                  <select className="w-full h-13.5 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-300 outline-none transition-all font-black text-slate-600 cursor-pointer shadow-xs">
                    <option>Mensal</option>
                    <option>Trimestral</option>
                    <option>Semestral</option>
                    <option>Anual</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 block">Data da Última Execução</label>
                  <input type="date" className="w-full h-13.5 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-300 outline-none transition-all text-slate-500 font-bold shadow-xs cursor-pointer"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 block">Vínculo OPM / Setor</label>
                  <input type="text" placeholder="Ex: Rancho / Estante de Tiro" className="w-full h-13.5 px-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-300 outline-none transition-all font-medium text-slate-600 shadow-xs"/>
                </div>
              </div>
            </div>
          )}

          {/* RODAPÉ COM ACTIONBUTTON */}
          <div className="mt-16 pt-8 border-t border-slate-50 flex justify-end">
            <ActionButton 
              type="submit"
              disabled={isSaving}
              label={isSaving ? "Processando..." : `Concluir Registro de ${abaAtiva === "militar" ? "Militar" : "Serviço"}`}
            />
          </div>
        </form>
      </div>
    </div>
  );
}