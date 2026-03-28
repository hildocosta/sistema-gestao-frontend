export default function PermissionBadge({ level }) {
  const styles = {
    Admin: "bg-purple-50 text-purple-600 border-purple-100",
    Gestor: "bg-blue-50 text-blue-600 border-blue-100",
    Operador: "bg-slate-100 text-slate-500 border-slate-100",
  };

  return (
    <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${styles[level] || styles.Operador}`}>
      {level}
    </span>
  );
}