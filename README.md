# 🛡️ Sistema de Gestão Interna - 17º BPM

<p align="center">
  <img src="https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Lucide_Icons-FF69B4?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide" />
</p>

<p align="center">
  <strong>Plataforma inteligente para otimização de fluxos administrativos e controle operacional do 17º Batalhão de Polícia Militar.</strong>
</p>

---

## 📖 Sobre o Projeto: De Planilhas para Performance Digital

O **Sistema de Gestão Interna - 17º BPM** nasceu da necessidade de modernizar processos que dependiam de fluxos manuais e planilhas descentralizadas (Google Sheets). O projeto elimina o risco de inconsistência de dados e entrega uma interface intuitiva, rápida e focada na experiência do militar.

### 🔄 A Grande Transformação
* **Indicadores Visuais (KPIs):** Status instantâneo de serviços (Atrasados, Alerta, Em Dia).
* **Automação de Prazos:** Cálculo automático da próxima execução baseado na periodicidade.
* **Busca Dinâmica:** Filtros avançados para localização imediata de itens e manutenções.

---

## 🏗️ Arquitetura de Software

O sistema adota uma metodologia **Frontend-First** baseada em uma robusta **Arquitetura de Componentes Reutilizáveis**, garantindo escalabilidade e rigor visual.

### 🧩 Componentização Customizada
* **Estrutura:** `DataTable.jsx`, `TableActions.jsx`, `SearchInput.jsx`.
* **Formulários (H-54px):** `Input.jsx`, `FormSelect.jsx`, `ActionButton.jsx`.
* **Feedback:** `StatCard.jsx`, `StatusBadge.jsx`, `PermissionBadge.jsx`.
* **Layout:** `Sidebar.jsx`, `Modal.jsx`, `Card.jsx`, `Footer.jsx`.

---

## 📸 Demonstração da Transição Digital

### 🚩 O Ponto de Partida (Legacy)
Antes do sistema, a gestão era realizada através de planilhas, o que dificultava o controle de prazos e a visualização de indicadores em tempo real.

<p align="center">
  <img src="./screenshots/tabela controle de servicos - planilha.png" width="85%" style="border-radius: 8px; border: 1px solid #eaecef;" />
  <br>
  <em>Interface anterior baseada em Google Sheets (Ponto de dor inicial).</em>
</p>

### 🚀 A Nova Interface (Visual Preview)

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/🔐-Login-blue?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Autenticação segura para militares cadastrados.</p>
        <img src="./screenshots/login.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/📝-Criar_Conta-darkblue?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Interface de auto-cadastro para novos operadores.</p>
        <img src="./screenshots/tela de cadastro de usuario.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
  </tr>

  <tr>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/🔑-Esqueceu_Senha-orange?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Solicitação de recuperação via e-mail institucional.</p>
        <img src="./screenshots/esquece_senha.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/📧-Link_Enviado-green?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Feedback de confirmação e orientações de segurança.</p>
        <img src="./screenshots/tela de link enviado para senha.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
  </tr>

  <tr>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/🔒-Nova_Senha-blue?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Finalização do fluxo com criação de nova credencial.</p>
        <img src="./screenshots/reset_senha.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/📊-Dashboard-orange?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Visão geral com indicadores de manutenção (StatCards).</p>
        <img src="./screenshots/dashboard.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
  </tr>

  <tr>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/⚙️-Novo_Serviço-amber?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Gestão de manutenções preventivas e periódicas.</p>
        <img src="./screenshots/cadastrar_servico.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/📋-Controle-darkblue?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Listagem dinâmica com componente DataTable.</p>
        <img src="./screenshots/servicos.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
  </tr>

  <tr>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/📩-Solicitações-blue?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Gerenciamento de chamados e ordens de serviço.</p>
        <img src="./screenshots/tela_solicitacoes.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/🛠️-Interface_Modal-blueviolet?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Componente Modal unificado para inserção de dados.</p>
        <img src="./screenshots/modal_cadastrar_servico.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
  </tr>

  <tr>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/👥-Efetivo-indigo?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Listagem de militares com PermissionBadges.</p>
        <img src="./screenshots/tela_usuario_total.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/📈-Relatórios-blueviolet?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Painel de exportação de dados para PDF e Excel.</p>
        <img src="./screenshots/tela_relatorios.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
  </tr>

  <tr>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/📄-Impressão-red?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Documento timbrado pronto para arquivo oficial.</p>
        <img src="./screenshots/tela relatorio exportar pdf.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
    <td width="50%" valign="top" style="padding: 10px;">
      </td>
  </tr>
</table>

---

## 🚀 Status do Desenvolvimento

### ✅ Já Implementado
* **Migração de Arquitetura:** Conversão de fluxos manuais (Google Sheets) para sistema robusto e centralizado.
* **Autenticação & Segurança:** Login, Cadastro e fluxo completo de Recuperação de Senha.
* **Componentização Reutilizável:** Design System proprietário com foco em consistência visual (DRY).
* **Navegação Dinâmica:** Sidebar com reconhecimento de contexto e rotas protegidas.
* **Gestão Operacional:** Dashboard com indicadores, controle de efetivo e chamados.
* **Exportação Profissional:** Gerador de relatórios timbrados em PDF e planilhas Excel.

### 📈 Roadmap
1. **🔗 Persistência:** Integração com banco de dados real (PostgreSQL/MongoDB).
2. **🔔 Notificações:** Alertas via sistema e e-mail para prazos de manutenção vencidos.

---

## 🛠️ Stack Tecnológica

| Ferramenta | Aplicação |
| :--- | :--- |
| **Next.js 15** | Framework Estrutural (App Router) |
| **React 19** | Lógica de Interface e Componentização |
| **Tailwind CSS** | Estilização Responsiva e Design System |
| **Lucide React** | Biblioteca de Ícones Vetoriais |

---

## 👤 Desenvolvedor

**Hildo Costa** - *Software Developer*

<p align="left">
  <a href="https://www.linkedin.com/in/hildo-costa-b83812231/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="mailto:hyldo.costa@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
</p>
