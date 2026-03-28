"use client";
import { useState, useEffect } from "react";
import { 
  Calendar, AlertTriangle, CheckCircle2, Clock, 
  Plus, ArrowRight, Settings
} from "lucide-react";

// Importação dos Componentes Reutilizáveis
import Breadcrumb from "../../../components/Breadcrumb";
import ActionButton from "../../../components/ActionButton";
import DataTable from "../../../components/DataTable";
import Modal from "../../../components/Modal";
import StatusBadge from "../../../components/StatusBadge";
import FormInput from "../../../components/FormInput";
import FormSelect from "../../../components/FormSelect";
import StatCard from "../../../components/StatCard";
import TableSkeleton from "../../../components/TableSkeleton";
import Skeleton from "../../../components/Skeleton";

const servicosPlanilha = [
  { id: "01", servico: "Limpeza de Caixa D'Água", periodicidade: "12 meses", ultima: "07/11/2024", proxima: "07/11/2025", status: "Atrasada" },
  { id: "02", servico: "Manutenção/Limpeza Ar Condicionado", periodicidade: "12 meses", ultima: "18/12/2023", proxima: "18/12/2024", status: "Atrasada" },
  { id: "03", servico: "Aquisição de Filtros de Água", periodicidade: "6 meses", ultima: "23/09/2025", proxima: "23/03/2026", status: "Em dia" },
  { id: "04", servico: "Dedetização / Desratização", periodicidade: "6 meses", ultima: "12/09/2025", proxima: "12/03/2026", status: "Em dia" },
  { id: "05", servico: "Manutenção e Recarga de Extintores", periodicidade: "12 meses", ultima: "18/09/2025", proxima: "18/09/2026", status: "Em dia" },
  { id: "06", servico: "Limpeza de Coifas e Dutos", periodicidade: "12 meses", ultima: "-", proxima: "-", status: "Alerta" },
  { id: "07", servico: "Manutenção Preventiva Motor Portão", periodicidade: "12 meses", ultima: "-", proxima: "-", status: "Alerta" },
  { id: "08", servico: "Manutenção Compressor Estande", periodicidade: "3 meses", ultima: "-", proxima: "-", status: "Alerta" },
];

export default function ServicosPage() {
  const [busca, setBusca] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulação de carregamento de dados
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 segundos para demonstrar o skeleton
    return () => clearTimeout(timer);
  }, []);

  const colunas = [
    { label: "Serviço / Item", align: "left" },
    { label: "Periodicidade", align: "left" },
    { label: "Última Exec.", align: "center" },
    { label: "Próxima Exec.", align: "center" },
    { label: "Status", align: "center" },
  ];

  return (
    <div className="animate-in fade-in duration-700 space-y-6">
      
      {/* --- CABEÇALHO --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <Breadcrumb itemAtual="Manutenção" />
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">Controle de Serviços - 17º BPM</h1>
        </div>

        <ActionButton 
          onClick={() => setShowModal(true)}
          icon={Plus} 
          label="Adicionar Serviço"
        />
      </div>

      {/* --- CARDS DE INDICADORES --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isLoading ? (
          <>
            <Skeleton className="h-32 w-full rounded-2xl" />
            <Skeleton className="h-32 w-full rounded-2xl" />
            <Skeleton className="h-32 w-full rounded-2xl" />
          </>
        ) : (
          <>
            <StatCard label="Atrasados" value="02" icon={AlertTriangle} color="red" />
            <StatCard label="Em Alerta" value="11" icon={Clock} color="amber" />
            <StatCard label="Em Dia" value="03" icon={CheckCircle2} color="emerald" />
          </>
        )}
      </div>

      {/* --- TABELA DE SERVIÇOS --- */}
      {isLoading ? (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <TableSkeleton rows={8} />
        </div>
      ) : (
        <DataTable 
          columns={colunas}
          data={servicosPlanilha}
          searchValue={busca}
          onSearchChange={(e) => setBusca(e.target.value)}
          searchPlaceholder="Pesquisar serviço..."
          renderRow={(item) => (
            <tr key={item.id} className="hover:bg-slate-50/80 transition-all group cursor-pointer">
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{item.servico}</span>
                  <span className="text-[10px] text-slate-400 uppercase font-medium">Ref: #{item.id}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold border transition-colors ${
                  item.periodicidade.includes("12") 
                    ? "bg-slate-100 text-slate-600 border-slate-200" 
                    : item.periodicidade.includes("6")
                    ? "bg-blue-50 text-blue-600 border-blue-100"    
                    : "bg-purple-50 text-purple-600 border-purple-100" 
                }`}>
                  <Calendar size={12} className="shrink-0 opacity-70" />
                  {item.periodicidade}
                </span>
              </td>
              <td className="px-6 py-4 text-xs text-slate-500 text-center font-medium">{item.ultima}</td>
              <td className="px-6 py-4 text-xs text-slate-600 text-center font-bold">{item.proxima}</td>
              <td className="px-6 py-4 text-center">
                <StatusBadge status={item.status} />
              </td>
            </tr>
          )}
        />
      )}

      {/* --- MODAL DE CADASTRO --- */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Novo Item de Manutenção"
        subtitle="17º Batalhão de Polícia Militar"
        icon={Settings}
      >
        <form onSubmit={(e) => { e.preventDefault(); setShowModal(false); }} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput 
              label="Descrição do Serviço" 
              placeholder="Ex: Manutenção Preventiva Freezer" 
              required 
            />
            <FormSelect 
              label="Periodicidade" 
              options={["Mensal", "Trimestral", "Semestral", "Anual"]} 
            />
            <FormInput 
              label="Data da Última Execução" 
              type="date" 
            />
            <FormInput 
              label="Vínculo OPM / Setor" 
              placeholder="Ex: Rancho / Estande de Tiro" 
            />
          </div>

          <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-100 flex gap-4">
            <div className="bg-white p-1.5 rounded-lg shadow-sm self-start">
              <AlertTriangle className="text-amber-500" size={18} />
            </div>
            <p className="text-[11px] text-amber-900 font-semibold leading-relaxed italic">
              Ao cadastrar um novo serviço, o sistema calculará automaticamente a <span className="text-amber-600 underline decoration-amber-200 underline-offset-2">Previsão da Próxima Execução</span> baseada na periodicidade e na data informada acima.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-50 flex justify-end">
            <button type="submit" className="flex items-center gap-3 bg-linear-to-tr from-[#1a73e8] to-[#63a4ff] text-white px-10 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
              Salvar Novo Serviço <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}