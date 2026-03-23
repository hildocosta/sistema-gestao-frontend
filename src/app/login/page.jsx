"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { loginUser } from "../../utils/auth";
import Footer from "../../components/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      if (loginUser(email, password)) {
        router.push("/dashboard");
      } else {
        setError("E-mail ou senha inválidos.");
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <main className="min-h-screen bg-login-image flex flex-col items-center justify-center p-4 font-sans">
    
      <div className="relative w-full max-w-sm mt-20">
        
        {/* Header do Card com o Logo */}
        <header className="card-header-floating">
          <Image 
            src="/assets/image/bg-profile.png" 
            alt="Sistema Gestão Interna Logo"
            width={80}
            height={80}
            className="logo-style"
            priority 
          />
        </header>

        <div className="bg-white rounded-xl shadow-2xl p-8 pt-32">
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-2 mb-6 animate-shake">
              <p className="text-red-700 text-xs text-center font-bold">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <Input 
              label="E-mail" 
              type="email" 
              placeholder="Digite seu e-mail..."
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            
            <Input 
              label="Senha" 
              type="password" 
              placeholder="Digite sua senha..."
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
            
            <div className="flex items-center gap-2 py-2">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 rounded border-gray-300 accent-blue-600 cursor-pointer transition-all" 
              />
              <label htmlFor="remember" className="text-sm text-slate-500 font-medium cursor-pointer select-none hover:text-slate-700">
                Lembrar-me
              </label>
            </div>

            <Button 
              text={isLoading ? "Autenticando..." : "Entrar"} 
              type="submit" 
              disabled={isLoading}
            />
            
            <footer className="text-center text-sm text-slate-500 pt-4">
              Não tem uma conta?{" "}
              <button type="button" className="text-blue-500 font-bold cursor-pointer hover:underline decoration-2">
                Cadastre-se
              </button>
            </footer>
          </form>
        </div>
      </div>

      {/* Rodapé da Página */}
      <footer className="absolute bottom-0 w-full">
        <Footer />
      </footer>
    </main>
  );
}