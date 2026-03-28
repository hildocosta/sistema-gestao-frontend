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

O **Sistema de Gestão Interna - 17º BPM** nasceu da necessidade de modernizar e centralizar processos que dependiam de fluxos manuais e planilhas descentralizadas. O objetivo é converter a complexidade operacional em uma plataforma digital de alta performance, garantindo integridade de dados, agilidade na consulta e uma interface intuitiva para o militar.

### 🔄 A Grande Transformação: O Foco na Central de Serviços
O projeto resolve o gargalo da gestão via Google Sheets, eliminando a falta de alertas visuais e o risco de inconsistência. A solução digital entrega:
* **Indicadores Visuais (KPIs):** Status instantâneo de serviços (Atrasados, Alerta, Em Dia).
* **Automação de Prazos:** Cálculo automático da próxima execução baseado na periodicidade.
* **Busca Dinâmica:** Filtros avançados para localização imediata de itens e manutenções.

---

## 🏗️ Arquitetura de Software e Componentização

O sistema adota uma metodologia **Frontend-First** e evoluiu de telas monolíticas para uma robusta **Arquitetura de Componentes Reutilizáveis**. Isso garante escalabilidade e consistência visual rigorosa (Design System).

### 🧩 Biblioteca de Componentes Customizados
* **Estrutura de Dados:** `DataTable.jsx`, `TableActions.jsx`, `SearchInput.jsx`.
* **Formulários (Altura 54px):** `FormInput.jsx`, `FormSelect.jsx`, `Input.jsx`.
* **Feedback & Status:** `StatCard.jsx`, `StatusBadge.jsx`, `PermissionBadge.jsx`.
* **Navegação & Layout:** `Sidebar.jsx`, `Breadcrumb.jsx`, `Footer.jsx`, `Card.jsx`.
* **Interação:** `Modal.jsx` (Janelas flutuantes unificadas), `ActionButton.jsx`.

---

## 📸 Demonstração da Interface (Visual Preview)

Abaixo, os fluxos principais implementados. A interface utiliza **Mock Data** para validação de UX antes da integração com o banco de dados.

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
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Feedback visual de confirmação e orientações de spam.</p>
        <img src="./screenshots/tela de link enviado para senha.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
  </tr>

  <tr>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/📊-Dashboard-orange?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Visão geral com indicadores de manutenção (StatCards).</p>
        <img src="./screenshots/dashboard.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/⚙️-Novo_Serviço-amber?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Gestão de manutenções preventivas e periódicas.</p>
        <img src="./screenshots/cadastrar_servico.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
  </tr>

  <tr>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/📋-Controle-darkblue?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Listagem dinâmica utilizando o componente DataTable.</p>
        <img src="./screenshots/servicos.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
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
        <p align="center"><img src="https://img.shields.io/badge/📩-Solicitações-blue?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Gerenciamento de chamados e ordens de serviço.</p>
        <img src="./screenshots/tela_solicitacoes.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/⚡-Novo_Chamado-cyan?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Abertura rápida com vínculo à planilha mestre.</p>
        <img src="./screenshots/modal_abrir_chamado_tela_solicitacoes.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
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
        <p align="center"><img src="https://img.shields.io/badge/👤-Novo_Militar-dodgerblue?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Interface para cadastro e definição de privilégios.</p>
        <img src="./screenshots/tela_modal_novo_usuario_tela_usuarios.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
  </tr>

  <tr>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/📈-Relatórios-blueviolet?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Painel de exportação de dados para PDF e Excel.</p>
        <img src="./screenshots/tela_relatorios.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
    <td width="50%" valign="top" style="padding: 10px;">
      <div align="center" style="border: 1px solid #eaecef; border-radius: 12px; padding: 20px; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <p align="center"><img src="https://img.shields.io/badge/📄-Impressão-red?style=flat" /></p>
        <p align="center" style="font-size: 11px; color: #586069; margin-bottom: 15px; min-height: 25px;">Documento timbrado pronto para arquivo oficial.</p>
        <img src="./screenshots/tela relatorio exportar pdf.png" width="100%" style="border-radius: 8px; border: 1px solid #f0f0f0;" />
      </div>
    </td>
  </tr>
</table>

---

## 🚀 Status do Desenvolvimento

### ✅ Já Implementado
* **Refatoração de Arquitetura:** Migração completa para componentes reutilizáveis (DRY).
* **Autenticação Restrita:** Tela de Login com validação de campos e proteção de rotas.
* **Auto-cadastro Operacional:** Interface para novos militares realizarem o registro no sistema.
* **Recuperação de Conta:** Fluxo inteligente de "Esqueceu Senha" com:

* Validação de e-mail institucional.

* **Feedback Visual de Sucesso:** Tela intermediária confirmando o envio do link e orientações de segurança.
* **Navegação:** Sidebar dinâmica com reconhecimento de rota ativa.
* **Design System v2:** Padronização via Tailwind CSS v4 com altura de 54px em inputs.
* **Gestão de Efetivo:** Controle de privilégios (Adm/Gestor/Operador) e status.
* **Central de Relatórios:** Exportação para PDF timbrado e Excel.
* **UX Polida:** Toasts de sucesso, transições suaves e cursor interativo.

### 📈 Roadmap
1. **🔗 Persistência:** Integração com banco de dados real.
2. **🔔 Notificações:** Alertas via sistema para prazos vencidos.

---

## 🛠️ Stack Tecnológica

| Ferramenta | Aplicação |
| :--- | :--- |
| **Next.js 15** | Framework Estrutural (App Router) |
| **React 19** | Componentização e Lógica de Interface |
| **Tailwind CSS** | Estilização Modernas e Responsividade |
| **Lucide React** | Biblioteca de Ícones |

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

---

## ⚙️ Instalação Local

```bash
git clone [https://github.com/SEU_USUARIO/NOME_DO_REPO.git](https://github.com/SEU_USUARIO/NOME_DO_REPO.git)
cd nome-do-projeto
npm install
npm run dev
