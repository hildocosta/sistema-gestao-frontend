"use client";
import { FileText, AlertTriangle, Clock, TrendingUp } from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell 
} from 'recharts';

// Dados baseados na sua planilha para o gráfico
const dadosGrafico = [
  { name: 'Atrasados', valor: 2, color: '#ef4444' }, 
  { name: 'Em Alerta', valor: 11, color: '#f59e0b' }, 
  { name: 'Em Dia', valor: 3, color: '#10b981' },   
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Título da Seção */}
      <nav className="mb-8">
        <p className="text-xs text-slate-400 font-light uppercase tracking-widest">SISTEMA OPERACIONAL / 17º BPM</p>
        <h1 className="text-slate-800 font-bold text-2xl tracking-tight">Visão Geral</h1>
      </nav>

      {/* Grid de Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card: SERVIÇOS ATRASADOS */}
        <div className="relative bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="absolute -top-4 left-4 w-12 h-12 bg-linear-to-tr from-red-600 to-red-400 rounded-xl shadow-lg shadow-red-500/30 flex items-center justify-center text-white">
            <AlertTriangle size={24} />
          </div>
          <div className="text-right pt-2">
            <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Atrasados</p>
            <h3 className="text-3xl font-bold text-slate-700 font-mono">02</h3>
          </div>
          <div className="border-t border-slate-50 mt-4 pt-2">
            <p className="text-[10px] text-red-500 font-bold uppercase italic">
              Ação imediata necessária
            </p>
          </div>
        </div>

        {/* Card: EM ALERTA */}
        <div className="relative bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="absolute -top-4 left-4 w-12 h-12 bg-linear-to-tr from-amber-500 to-orange-400 rounded-xl shadow-lg shadow-amber-500/30 flex items-center justify-center text-white">
            <Clock size={24} />
          </div>
          <div className="text-right pt-2">
            <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Em Alerta</p>
            <h3 className="text-3xl font-bold text-slate-700 font-mono">11</h3>
          </div>
          <div className="border-t border-slate-50 mt-4 pt-2">
            <p className="text-[10px] text-amber-600 font-bold uppercase">
              Vencendo nos próximos 30 dias
            </p>
          </div>
        </div>

        {/* Card: CHAMADOS ABERTOS */}
        <div className="relative bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <div className="absolute -top-4 left-4 w-12 h-12 bg-linear-to-tr from-blue-600 to-blue-400 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center text-white">
            <FileText size={24} />
          </div>
          <div className="text-right pt-2">
            <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Chamados Ativos</p>
            <h3 className="text-3xl font-bold text-slate-700 font-mono">04</h3>
          </div>
          <div className="border-t border-slate-50 mt-4 pt-2 flex items-center gap-1">
            <TrendingUp size={12} className="text-emerald-500" />
            <p className="text-[10px] text-slate-400 font-medium italic">
              Vínculo com planilha ativo
            </p>
          </div>
        </div>
      </div>

      {/* Seção de Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Gráfico de Barras */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
          <div className="mb-6">
            <h2 className="text-slate-800 font-bold text-sm uppercase tracking-wider">Status das Manutenções</h2>
            <p className="text-xs text-slate-400">Distribuição baseada na periodicidade da planilha</p>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dadosGrafico}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 10, fontWeight: 'bold', fill: '#64748b'}}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="valor" radius={[6, 6, 0, 0]} barSize={40}>
                  {dadosGrafico.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Card Informativo com Linear Gradient */}
        <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between">
           <div className="relative z-10">
              <h2 className="text-xl font-bold mb-2">Resumo Operacional</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Atualmente, <strong>68%</strong> dos serviços do 17º BPM requerem atenção ou atualização de dados no sistema.
              </p>
           </div>
           
           <div className="mt-8 flex gap-4">
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/5">
                <p className="text-[10px] uppercase font-bold text-blue-300 mb-1 tracking-widest">Próximo Vencimento</p>
                <p className="text-xs font-medium">Dedetização Geral</p>
                <p className="text-[10px] text-slate-400">12/03/2026</p>
              </div>
           </div>

           {/* Círculo decorativo */}
           <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}