# 🚀  Automation Exercise

Projeto de automação de testes de interface utilizando **Cypress**, com geração de dados dinâmicos através do **Faker** e criação de relatórios detalhados usando **Mochawesome**, seguindo boas práticas de **QA**.

---

## 📌 Objetivo do Projeto
Garantir a qualidade da aplicação **Automation Exercise**, validando fluxos críticos da interface do usuário:

- ✅ Confiabilidade nos testes  
- ⚡ Redução de falhas manuais  
- 🛠️ Facilidade de manutenção  
- 📊 Relatórios claros e objetivos  

---

## 🧪 Tecnologias Utilizadas
- **Cypress** – Testes end-to-end  
- **JavaScript** – Linguagem base  
- **Faker** – Dados dinâmicos  
- **Mochawesome** – Relatórios detalhados  
- **Node.js** – Ambiente de execução  

---

## 🌐 Aplicação Testada
**URL:** [https://automationexercise.com](https://automationexercise.com)

---

## 📂 Estrutura do Projeto
cypress
├── e2e
│ └── specs # Casos de teste
├── fixtures # Massa de dados
├── support # Comandos customizados
├── reports # Relatórios Mochawesome
└── screenshots # Evidências de falhas

Aqui está uma versão otimizada e profissional para o seu `README.md`. Eu organizei as informações com ícones, seções claras e uma estrutura que facilita a leitura para quem visitar o seu repositório.

---

# 🚀  Automation Exercise

Este projeto contém uma suíte de testes automatizados do site [Automation Exercise](https://automationexercise.com/api_list), desenvolvida utilizando **Cypress**. O objetivo é garantir a qualidade e a confiabilidade dos endpoints através de testes robustos e boas práticas de engenharia de software.

## 🛠️ Tecnologias Utilizadas

* **Cypress**: Framework de testes ponta a ponta.
* **Node.js**: Ambiente de execução.
* **Mochawesome**: Gerador de relatórios detalhados.
* **Faker.js**: Geração de dados aleatórios para testes dinâmicos.

---

## 🏁 Primeiros Passos

### Pré-requisitos

* Node.js instalado (versão 14 ou superior).
* Git instalado.

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/Teste-automa-o-API-automationexercise.git

```


2. **Acesse a pasta do projeto:**
```bash
cd Teste-automa-o-API-automationexercise

```


3. **Instale as dependências:**
```bash
npm install

```



---

## ▶️ Executando os Testes

Você pode executar os testes de duas formas:

### Modo Interativo (Interface Gráfica)

Ideal para desenvolvimento e depuração.

```bash
npx cypress open

```

### Modo Headless (Linha de Comando)

Ideal para integração contínua (CI).

```bash
npx cypress run

```

---

## 📊 Relatórios de Testes

Utilizamos o **Mochawesome** para gerar relatórios visuais após a execução em modo headless.

* **Caminho padrão:** `cypress/reports/`
* **O que o relatório inclui:**
* ✅ Status dos testes (Pass/Fail).
* 📸 Evidências (quando aplicável).
* ⏱ Tempo total de execução.
* 🛠️ Detalhes técnicos sobre falhas.



---

## 🧠 Boas Práticas Aplicadas

O projeto foi estruturado seguindo padrões modernos de automação:

* **Separação de responsabilidades:** Divisão clara entre testes, comandos e massa de dados.
* **Dados Dinâmicos:** Uso da biblioteca **Faker** para evitar testes viciados e garantir cobertura com dados variados.
* **Custom Commands:** Criação de comandos personalizados no Cypress para reutilização de lógica comum.
* **Escalabilidade:** Estrutura organizada para facilitar a adição de novos cenários sem gerar dívida técnica.
* **Legibilidade:** Testes escritos de forma declarativa, facilitando o entendimento do negócio.

---

## 👨‍💻 Autores

| [<img src="https://github.com/github.png" width="75px;"/><br /><sub><b>Nathanael Henrique Souza Nunes</b></sub>](https://github.com/) | [<img src="https://github.com/github.png" width="75px;"/><br /><sub><b>Wellison Souza Oliveira</b></sub>](https://github.com/) |
| --- | --- |
| QA Engineer / SDET | QA Engineer |

---

⭐ **Foco em qualidade, aprendizado contínuo e boas práticas.**
