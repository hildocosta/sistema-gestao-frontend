import Skeleton from "./Skeleton";

export default function TableSkeleton({ rows = 5 }) {
  return (
    <div className="w-full space-y-4 animate-in fade-in duration-500">
      {/* Simula o Header da Tabela */}
      <div className="flex gap-4 pb-2 border-b border-slate-100">
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-6 w-1/4" />
      </div>

      {/* Simula as Linhas (Rows) */}
      {[...Array(rows)].map((_, i) => (
        <div key={i} className="flex gap-4 items-center py-2">
          <Skeleton className="h-10 w-full" />
        </div>
      ))}
    </div>
  );
}