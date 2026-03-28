"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FileText, Download, Printer, Loader2 } from "lucide-react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

// Seus Componentes Reutilizáveis
import Breadcrumb from "../../../components/Breadcrumb";
import ActionButton from "../../../components/ActionButton";
import DataTable from "../../../components/DataTable";
import StatusBadge from "../../../components/StatusBadge";
import Skeleton from "../../../components/Skeleton";

export default function RelatoriosPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);

  // Simulação de carregamento de dados pesados de relatório
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const dadosManutencao = [
    { servico: "Limpeza de Caixa D'Água", ultimaExec: "07/11/2024", vencimento: "07/11/2025", situacao: "Atrasado" },
    { servico: "Manutenção Ar Condicionado", ultimaExec: "18/12/2023", vencimento: "18/12/2024", situacao: "Atrasado" },
    { servico: "Dedetização / Desratização", ultimaExec: "12/09/2025", vencimento: "12/03/2026", situacao: "Em Dia" },
    { servico: "Revisão Elétrica Setor A", ultimaExec: "10/01/2026", vencimento: "10/07/2026", situacao: "Em Dia" },
  ];

  const colunas = [
    { label: "Serviço / Local", align: "left" },
    { label: "Última Exec.", align: "center" },
    { label: "Vencimento", align: "center" },
    { label: "Situação", align: "right" },
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleExportExcel = async () => {
    setIsExporting(true);
    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Relatório de Manutenção");

      worksheet.columns = [
        { header: "SERVIÇO / MANUTENÇÃO", key: "servico", width: 40 },
        { header: "ÚLTIMA EXECUÇÃO", key: "ultimaExec", width: 20 },
        { header: "VENCIMENTO", key: "vencimento", width: 20 },
        { header: "SITUAÇÃO", key: "situacao", width: 15 },
      ];

      const headerRow = worksheet.getRow(1);
      headerRow.font = { bold: true, color: { argb: "FFFFFF" } };
      headerRow.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1A73E8" } };

      dadosManutencao.forEach((item) => {
        worksheet.addRow(item);
      });

      const buffer = await workbook.xlsx.writeBuffer();
      saveAs(new Blob([buffer]), `Relatorio_17BPM_${new Date().toLocaleDateString()}.xlsx`);
    } catch (error) {
      console.error("Erro ao exportar:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-700 space-y-8 print:space-y-0 print:m-0 print:p-0">
      
      {/* INJEÇÃO DE CSS PARA REMOVER ELEMENTOS NA IMPRESSÃO */}
      <style jsx global>{`
        @media print {
          aside, nav, header, .no-print, [role="navigation"], .breadcrumb-container { 
            display: none !important; 
          }
          main, .main-content { 
            margin: 0 !important; 
            padding: 0 !important; 
            width: 100% !important;
          }
          body { background: white !important; }
          .report-card { 
            box-shadow: none !important; 
            border: none !important; 
            padding: 0 !important;
          }
        }
      `}</style>

      {/* --- HEADER DE AÇÕES --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 print:hidden text-left">
        <div>
          <Breadcrumb itemAtual="Relatórios" />
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            Central de Relatórios
          </h1>
        </div>

        <div className="flex gap-3">
          <button 
            disabled={isLoading}
            onClick={handlePrint}
            className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase shadow-sm hover:bg-slate-50 transition cursor-pointer active:scale-95 disabled:opacity-50"
          >
            <Printer size={16} /> Imprimir PDF
          </button>
          
          <ActionButton 
            onClick={handleExportExcel}
            disabled={isLoading || isExporting}
            icon={isExporting ? Loader2 : Download}
            label={isExporting ? "Gerando..." : "Exportar Excel"}
            className={isExporting ? "animate-pulse" : ""}
          />
        </div>
      </div>

      {/* --- ÁREA DO RELATÓRIO --- */}
      <div className="report-card bg-white rounded-3xl shadow-sm border border-slate-100 p-10 min-h-screen print:min-h-0">
        
        {/* Cabeçalho Institucional */}
        <div className="flex justify-between items-center border-b-2 border-slate-100 pb-8 mb-8">
          <div className="flex items-center gap-4 text-left">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 overflow-hidden relative">
               <Image 
                src="/assets/image/bg-profile.png" 
                alt="Brasão 17º BPM" 
                width={48} 
                height={48} 
                className="object-contain"
                priority
               />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-tighter leading-none">Polícia Militar do Estado do Paraná</h2>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">17º Batalhão de Polícia Militar</p>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">Seção de Logística e Manutenção</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Data do Relatório</p>
            <p className="text-sm font-bold text-slate-700 tracking-tight">28 de Março, 2026</p>
          </div>
        </div>

        {/* Resumo Estatístico */}
        <div className="grid grid-cols-3 gap-6 mb-10 text-left">
          {isLoading ? (
            <>
              <Skeleton className="h-24 rounded-3xl" />
              <Skeleton className="h-24 rounded-3xl" />
              <Skeleton className="h-24 rounded-3xl" />
            </>
          ) : (
            <>
              <div className="bg-slate-50/50 p-5 rounded-3xl border border-slate-100 print:bg-slate-50">
                <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Eficiência Geral</p>
                <p className="text-2xl font-black text-emerald-600">82.5%</p>
              </div>
              <div className="bg-slate-50/50 p-5 rounded-3xl border border-slate-100 print:bg-slate-50">
                <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Serviços Pendentes</p>
                <p className="text-2xl font-black text-amber-500">11 <span className="text-[10px] text-slate-400 font-medium italic">itens</span></p>
              </div>
              <div className="bg-slate-50/50 p-5 rounded-3xl border border-slate-100 print:bg-slate-50">
                <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Urgência Crítica</p>
                <p className="text-2xl font-black text-red-500">02 <span className="text-[10px] text-slate-400 font-medium italic">itens</span></p>
              </div>
            </>
          )}
        </div>

        {/* Tabela de Detalhamento */}
        <div className="space-y-6">
          <h3 className="text-xs font-black text-slate-800 uppercase tracking-[0.15em] flex items-center gap-2 text-left">
            <FileText size={14} className="text-blue-600" /> Detalhamento de Manutenções
          </h3>
          
          {isLoading ? (
            <div className="space-y-3">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          ) : (
            <DataTable 
              columns={colunas}
              data={dadosManutencao}
              showFooter={false}
              renderRow={(item, idx) => (
                <tr key={idx} className="print:break-inside-avoid border-b border-slate-50">
                  <td className="px-8 py-5 text-sm font-bold text-slate-700 text-left">{item.servico}</td>
                  <td className="px-8 py-5 text-xs text-slate-500 text-center font-medium">{item.ultimaExec}</td>
                  <td className={`px-8 py-5 text-xs text-center font-black ${item.situacao === 'Atrasado' ? 'text-red-600' : 'text-emerald-600'}`}>
                    {item.vencimento}
                  </td>
                  <td className="px-8 py-5 text-right">
                    <StatusBadge status={item.situacao} />
                  </td>
                </tr>
              )}
            />
          )}
        </div>

        {/* Rodapé de Validação */}
        <div className="mt-20 pt-10 flex justify-between items-end print:mt-10">
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-64 border-b border-slate-300 mb-2"></div>
              <p className="text-[9px] font-black text-slate-800 uppercase tracking-widest">Encarregado de Manutenção</p>
              <p className="text-[8px] font-bold text-slate-400 uppercase">17º Batalhão de Polícia Militar</p>
            </div>
          </div>
          <div className="text-right text-slate-400">
            <p className="text-[9px] font-medium italic mb-1">GIM - Gestão de Infraestrutura Militar</p>
            <p className="text-[9px] font-black uppercase tracking-tighter text-slate-500">
              Gerado em: {new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}