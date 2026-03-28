"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {ShieldCheck, AlertCircle } from "lucide-react";
import Input from "../../components/Input";
import ActionButton from "../../components/ActionButton";
import Footer from "../../components/Footer";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validação de Segurança
    if (password.length < 6) {
      setError("A SENHA DEVE TER NO MÍNIMO 6 CARACTERES.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("AS SENHAS DIGITADAS NÃO CONFEREM.");
      setIsLoading(false);
      return;
    }

    // Simulação de alteração no banco de dados
    setTimeout(() => {
      setIsSuccess(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <main className="h-screen w-full bg-login-image flex flex-col items-center justify-between font-sans overflow-hidden">
      
      <div className="flex-1 flex items-start justify-center w-full p-4 pt-20">
        <div className="relative w-full max-w-sm">
          
          <header className="card-header-floating">
            <Image 
              src="/assets/image/bg-profile.png" 
              alt="Logo 17BPM" 
              width={80} 
              height={80} 
              className="logo-style" 
              priority 
            />
          </header>

          <div className="bg-white rounded-xl shadow-2xl p-8 pt-24 pb-8 transition-all duration-500">
            {!isSuccess ? (
              /* FORMULÁRIO DE NOVA SENHA */
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-bold text-slate-700 uppercase tracking-tight">Nova Senha</h2>
                  <p className="text-[11px] text-slate-500 mt-2">
                    Crie uma combinação segura para o seu próximo acesso.
                  </p>
                </div>
                
                {error && (
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-3 mb-6 flex items-center gap-3 animate-shake">
                    <AlertCircle className="text-amber-600 shrink-0" size={18} />
                    <p className="text-amber-800 text-[10px] font-bold uppercase leading-tight">
                      {error}
                    </p>
                  </div>
                )}

                <form onSubmit={handleResetPassword} className="space-y-4">
                  <Input 
                    label="NOVA SENHA" 
                    type="password" 
                    placeholder="••••••••" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />

                  <Input 
                    label="CONFIRMAR NOVA SENHA" 
                    type="password" 
                    placeholder="••••••••" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    required 
                  />

                  <div className="pt-4">
                    <ActionButton 
                      label="ATUALIZAR SENHA"
                      type="submit"
                      loading={isLoading}
                      loadingText="ATUALIZANDO..."
                      fullWidth={true}
                    />
                  </div>
                </form>
              </div>
            ) : (
              /* SUCESSO FINAL NA REDEFINIÇÃO */
              <div className="text-center animate-in fade-in zoom-in duration-500 py-2">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-blue-100">
                  <ShieldCheck size={28} />
                </div>
                
                <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wide mb-2">
                  Senha Alterada!
                </h2>
                
                <p className="text-[11px] text-slate-500 leading-relaxed mb-8 px-4">
                  Sua nova credencial foi registrada com sucesso. Você já pode acessar o sistema.
                </p>

                <ActionButton 
                  label="IR PARA O LOGIN"
                  onClick={() => router.push("/login")}
                  fullWidth={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="w-full">
        <Footer />
      </footer>
    </main>
  );
}