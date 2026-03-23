import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* A Sidebar aparece apenas nas rotas que começam com /dashboard */}
      <Sidebar />

      <main className="ml-72 p-8 pt-10 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}