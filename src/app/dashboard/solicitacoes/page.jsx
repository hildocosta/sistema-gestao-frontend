"use client";
import { useState } from "react";
import { Plus, AlertCircle, Save } from "lucide-react"; 

// Importação dos Componentes Reutilizáveis
import Breadcrumb from "../../../components/Breadcrumb";
import ActionButton from "../../../components/ActionButton";
import DataTable from "../../../components/DataTable";
import Modal from "../../../components/Modal";
import StatusBadge from "../../../components/StatusBadge";
import FormInput from "../../../components/FormInput";
import FormSelect from "../../../components/FormSelect";
import TableActions from "../../../components/TableActions"; 

const solicitacoesBaseadasNaPlanilha = [
  { id: "001", titulo: "Limpeza de Caixa D'Água (Urgente)", solicitante: "Sgt. Responsável - Logística", status: "Pendente", data: "22/03/2026", vinculo: "Serviço ID #01" },
  { id: "002", titulo: "Manutenção Ar Condicionado - Bloco A", solicitante: "Cap. Administrativo", status: "Em Andamento", data: "22/03/2026", vinculo: "Serviço ID #02" },
  { id: "003", titulo: "Troca de Filtros de Água - Refeitório", solicitante: "Nutrição", status: "Concluído", data: "21/03/2026", vinculo: "Serviço ID #03" },
  { id: "004", titulo: "Dedetização Geral Trimestral", solicitante: "Sgt. Auxiliar", status: "Pendente", data: "20/03/2026", vinculo: "Serviço ID #04" },
];

export default function SolicitacoesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [busca, setBusca] = useState("");
  const [formData, setFormData] = useState({ 
    titulo: "", 
    solicitante: "", 
    servicoVinculado: "Limpeza de Caixa D'Água (ID #01)" 
  });

  const colunas = [
    { label: "ID", align: "left" },
    { label: "Chamado / Vínculo Operacional", align: "left" },
    { label: "Status", align: "center" },
    { label: "Ações", align: "center" },
  ];

  const handleSave = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setFormData({ titulo: "", solicitante: "", servicoVinculado: "Limpeza de Caixa D'Água (ID #01)" });
  };

  return (
    <div className="animate-in fade-in duration-700 space-y-6">
      
      {/* --- CABEÇALHO --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <Breadcrumb itemAtual="Solicitações" />
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            Chamados e Ordens de Serviço
          </h1>
        </div>

        <ActionButton 
          onClick={() => setIsModalOpen(true)}
          icon={Plus} 
          label="Abrir Chamado"
        />
      </div>

      {/* --- TABELA DE SOLICITAÇÕES --- */}
      <div className="relative">
        <div className="absolute right-20 top-7 z-10 hidden md:flex items-center gap-3 px-4 py-2 bg-blue-50/50 rounded-lg border border-blue-100/50 text-[10px] font-black text-blue-600 uppercase tracking-widest">
          <AlertCircle size={14} className="animate-pulse" />
          Sincronizado com Planilha Master
        </div>

        <DataTable 
          columns={colunas}
          data={solicitacoesBaseadasNaPlanilha}
          searchPlaceholder="Buscar chamado por ID ou título..."
          searchValue={busca}
          onSearchChange={(e) => setBusca(e.target.value)}
          renderRow={(item) => (
            <tr key={item.id} className="hover:bg-slate-50/50 transition-all group">
              <td className="px-8 py-6 text-xs font-black text-slate-300">#{item.id}</td>
              <td className="px-8 py-6">
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-sm font-bold text-slate-700 leading-none">{item.titulo}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-blue-500 font-black uppercase tracking-tighter">{item.vinculo}</span>
                    <span className="text-slate-200 text-[10px]">|</span>
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">{item.solicitante}</span>
                  </div>
                </div>
              </td>
              <td className="px-8 py-6 text-center">
                <StatusBadge status={item.status} />
              </td>
              <td className="px-8 py-6 text-center">
                {/* --- COMPONENTE DE AÇÕES APLICADO --- */}
                <TableActions 
                  onEdit={() => console.log("Editar", item.id)}
                  onDelete={() => console.log("Excluir", item.id)}
                  onView={() => console.log("Ver", item.id)}
                />
              </td>
            </tr>
          )}
        />
      </div>

      {/* --- MODAL (Mantido igual) --- */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Novo Chamado"
        subtitle="Integração Digital de Manutenção"
        icon={Plus}
      >
        <form onSubmit={handleSave} className="space-y-6 text-left">
          <FormSelect 
            label="Vínculo com Serviço da Planilha"
            value={formData.servicoVinculado}
            onChange={(e) => setFormData({...formData, servicoVinculado: e.target.value})}
            options={["Limpeza de Caixa D'Água (ID #01)", "Ar Condicionado (ID #02)"]}
          />

          <FormInput 
            label="Descrição da Ocorrência"
            placeholder="Ex: Vazamento identificado na boia lateral"
            required
            value={formData.titulo}
            onChange={(e) => setFormData({...formData, titulo: e.target.value})}
          />

          <FormInput 
            label="Responsável pela Abertura"
            placeholder="Seu nome ou graduação"
            required
            value={formData.solicitante}
            onChange={(e) => setFormData({...formData, solicitante: e.target.value})}
          />

          <div className="pt-6 flex gap-4">
            <button 
              type="button" 
              onClick={() => setIsModalOpen(false)} 
              className="flex-1 py-4 border border-slate-100 text-slate-400 rounded-2xl text-[11px] font-black uppercase tracking-widest cursor-pointer hover:bg-slate-50 transition"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="flex-[1.5] py-4 bg-linear-to-tr from-[#1a73e8] to-[#63a4ff] text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-blue-500/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Save size={16} strokeWidth={3} /> Abrir Ordem de Serviço
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}