# 🚆 Future Station – Sistema de Viagem e Gestão de Fluxo de Passageiros

Bem-vindo ao repositório do **Future Station**, um sistema interativo de transporte desenvolvido com foco na **experiência do usuário**, **eficiência no deslocamento** e **informação em tempo real** para os passageiros das estações da **CCR**.

---

## 👥 Integrantes do Time

- **Matteus Viegas dos Santos** – RM 561090  
- **Pedro Henrique de Souza Sena** – RM 561178  
- **Sulamita Viegas dos Santos** – RM 561089  

---

## 🎯 Objetivo do Projeto

O Future Station é uma plataforma desenvolvida para usuários do transporte público com o objetivo de:

- 📍 Calcular tempo estimado de viagem entre estações  
- 📈 Exibir relatórios de viagens anteriores  
- 👥 Fornecer dados de fluxo de passageiros e horários de pico  
- ⚠️ Apresentar status operacionais das linhas  
- 🤖 Integrar funcionalidades interativas como chatbot e formulários de feedback  
- 💻 Oferecer uma interface moderna, acessível e conectada às necessidades do usuário  

Nosso sistema promove **planejamento de rota inteligente**, **interatividade**, **transparência nas informações** e **conectividade entre tecnologias**.

---

## ✅ Funcionalidades Implementadas

### 1. 🔐 Login e Cadastro
- Autenticação segura  
- Cadastro com nome, e-mail e senha  
- Integração com banco Oracle via API Java  
- Comunicação entre back-end Java e módulo Python  

---

### 2. 🏠 Página Principal Pós-Login
- Redirecionamento para tela inicial após login  
- Apresentação dos integrantes  
- Botão "Saber Mais" com informações detalhadas:  
  - Status operacional das Linhas 4, 8 e 9  
  - Horário de funcionamento  
  - Formulário de feedback e reclamações  

---

### 3. 🚋 Linha 9 – Funcionalidades Principais

#### ▸ Iniciar Viagem
- Escolha de estação de origem e destino  
- Cálculo do tempo estimado  
- Barra de progresso com percentual e tempo restante  

> 🔧 **Nota técnica:**  
> Durante a integração do front-end (Vercel) com o back-end (Java), foi necessário configurar o CORS devido à diferença de domínios.  
> A API de Relatório depende da API de Viagem, tornando ambas interdependentes.

#### ▸ Relatório de Viagens
- Histórico com origem, destino, horário e duração

#### ▸ Mapa Interativo da Linha 9
- Visualização em tempo real das estações  
- Destaque da zona sul e número de passageiros por estação  

#### ▸ Previsão de Horário de Pico
- Gráficos e dados com horários de maior lotação  
- Ajuda no planejamento de viagens estratégicas  

#### ▸ Estações Detalhadas – Exemplo: Pinheiros
- Ícones com acessibilidade, botão de denúncia rápida  
- Integração com chatbot para dúvidas sobre rotas e horários  

---

### 4. 💬 Chatbot Interativo
Disponível nas estações e na página principal.  
Responde perguntas sobre:

- Viagens  
- Status das linhas  
- Como utilizar o sistema  
- Problemas e reclamações  

---

### 5. 📢 Avisos e Sugestões
- Página com atualizações das linhas  
- Formulário para envio de feedback, sugestões e reclamações  

---

### 6. 👤 Perfil do Usuário
- Visualização de nome, e-mail e foto de perfil  
- Edição de imagem de perfil e opção de logout  

---

## 🛠️ Roadmap do Projeto

### 🔹 Fase 1: Planejamento
- Criação de protótipos no Figma  
- Definição visual: cores, tipografia e layout  

### 🔹 Fase 2: Estrutura Inicial
- Desenvolvimento com HTML/CSS  
- Estruturação de páginas e componentes básicos  

### 🔹 Fase 3: Integração e Stack Completa
- Migração para Next.js com TypeScript  
- Criação das APIs em Java  
- Integração com módulo Python  
- Banco de dados Oracle para persistência  

---


🧰 Tecnologias Utilizadas
Tecnologia	Função
Next.js	Framework React para SPA e SSR
TypeScript	Tipagem estática no front-end
React	Criação de componentes de UI
Java	Back-end e lógica de negócio (APIs REST)
Python	Manipulação de dados e integração com Oracle
Oracle DB	Armazenamento principal
localStorage	Armazenamento local de sessão do usuário

📁 Estrutura de Pastas (Frontend)
bash
Copiar
Editar
/src
  /pages         → Páginas Next.js (login, home, viagem, etc.)
  /components    → Componentes reutilizáveis (navbar, card, etc.)
/public          → Imagens, ícones, arquivos estáticos
▶️ Como Rodar o Projeto Localmente
bash
Copiar
Editar
git clone https://github.com/ChallengeCCR1/Challenge-FrontEnd.git
cd Challenge-FrontEnd
npm install
npm run dev
Acesse em: http://localhost:3000



# 🔗 Principais APIs do Projeto

| **API**                               | **Método** | **URL**                                             | **Função**                                               |
|---------------------------------------|------------|-----------------------------------------------------|----------------------------------------------------------|
| **API Viagem**                        | `POST`     | `/api/viagem/iniciar`                               | Inicia uma nova viagem. ⚠️ *Requere correção de CORS para uso externo.* |
| **API Relatório de Usuário**          | `GET`      | `/relatorio/usuario/{id}?usuario={nome}`            | Retorna o histórico de viagens.                          |
| **API Mapa da Linha 9**               | `GET`      | `/api/mapa/linha9`                                  | Fornece dados para o mapa interativo.                    |
| **API Previsão de Fluxo**             | `GET`      | `/api/previsao?estacao={nome}&horario={horario}`     | Retorna previsão de lotação por horário.                 |
| **API Status das Linhas Diamante**    | `GET`      | `/status-linhas/diamante`                           | Retorna o status em tempo real das linhas.               |
| **API Cadastro de Usuário**           | `POST`     | `/api/usuario/cadastrar`                            | Cadastro de novos usuários.                              |
| **API Login de Usuário**              | `POST`     | `/api/usuario/login`                                | Autentica usuário e inicia sessão.                       |

---

## 🎥 **Vídeo de Apresentação**

📽️ *(https://www.youtube.com/watch?si=dEPzTfV44Aw_BLOs&v=gVor1AxFEl4&feature=youtu.be)*

---

## 💡 **Exemplo de Uso**


## 🚀 Acesso à Aplicação

Você pode acessar a aplicação hospedada na Vercel pelo link abaixo:

🔗 **[Future Station - Acesse aqui](https://challengefrontend-ten.vercel.app/)**

> *Observação:* Caso a aplicação demore um pouco para carregar na primeira vez, é porque a Vercel pode estar "acordando" o projeto.


##  ☕ Repositório do Back-End (Java)
O back-end do sistema Future Station foi desenvolvido em Java, com foco em desempenho, segurança e integração com múltiplas tecnologias. Ele é responsável pelo processamento das requisições da aplicação, autenticação de usuários, comunicação com o banco de dados Oracle, e envio de dados para os módulos front-end e Python.

🔗 Acesse o repositório Java aqui: https://github.com/ChallengeCCR1/ChallengeJava





1. **Acesso à página de login**:  
   Acesse a página de login e insira seu **e-mail** e **senha**.

2. **Página principal**:  
   Após o login, navegue até a página principal para conhecer os **participantes** e as opções disponíveis.

3. **Exploração das Linhas**:  
   Veja o **status operacional** das linhas e explore as **linhas disponíveis**.

4. **Linha 9 - Origem e Destino**:  
   Selecione a **origem** e **destino** na **Linha 9** para planejar sua viagem.

5. **Acompanhamento de Viagem**:  
   Durante a viagem, visualize a **barra de progresso** e o **tempo estimado** para chegada.

6. **Consulta de Relatórios**:  
   Consulte seu **histórico de viagens** na seção de relatórios.

7. **Mapa Interativo**:  
   Explore o **mapa interativo** e consulte os horários de **pico**.

8. **Chatbot**:  
   Interaja com o **chatbot** para tirar dúvidas sobre o sistema.

9. **Recursos Adicionais - Estação Pinheiros**:  
   Acesse a **estação Pinheiros** para ver recursos adicionais do sistema.

10. **Formulário de Sugestões ou Denúncias**:  
    Envie **sugestões** ou **denúncias** através do **formulário interativo**.

---

# Documentação para Colocar a Aplicação Java no Ar

## Objetivo
Este documento tem como objetivo fornecer um passo a passo para colocar a aplicação Java do projeto **Future Station Challenge** no ar, caso alguém precise hospedar a API que foi construída utilizando Java, mas que, por questões de tempo, não foi hospedada pela equipe.

## Passos para Colocar a Aplicação no Ar

| Passo | Descrição |
|-------|-----------|
| **1. Clonando o Repositório** | Acesse o repositório do projeto e clone-o para o seu ambiente local. Você terá uma pasta chamada **ChallengeJava** no seu diretório local. |
| **2. Abrindo o Projeto na IDE** | Dentro da pasta clonada, navegue até `src -> main -> java -> br -> com -> fiap`. Abra o projeto na sua IDE de preferência (recomendamos o **IntelliJ IDEA Ultimate**). |
| **3. Configuração do Quarkus Tools Plugin** | Caso o plugin **Quarkus** não esteja instalado, instale-o da seguinte maneira: No canto superior direito da sua IDE, clique na engrenagem e selecione **Plugins**. Na tela de plugins, selecione a opção **Marketplace** e busque por **Quarkus Tools**, clique em **Install** e reinicie a IDE. |
| **4. Configurando o Plugin Quarkus** | Após reiniciar a IDE, clique em **Run Configurations** no canto superior direito, selecione **Edit Configurations**, clique no ícone `+` e escolha **Quarkus**. Clique em **Apply** e depois em **OK** para salvar. |
| **5. Rodando a Aplicação** | Com a configuração pronta, clique no botão **Play** ou **Run** para iniciar a aplicação. Você verá no terminal: `Quarkus started in XXs. (Running)`, o que indica que a aplicação foi iniciada com sucesso. |

## Problemas de Funcionalidade de Viagem e Relatório

Durante a **Sprint 4**, nos deparamos com um erro de **CORS** nas funcionalidades de **Viagem** e **Relatório**. Esse problema tem impacto direto no funcionamento dessas funcionalidades, pois sem uma viagem registrada, não é possível gerar um relatório.

| Erro | Descrição |
|------|-----------|
| **CORS (Cross-Origin Resource Sharing)** | É um mecanismo de segurança que impede que páginas da web façam requisições a servidores de domínios diferentes. Durante os testes no **Postman**, a API funcionou corretamente, mas nas funcionalidades de Viagem e Relatório, o erro de CORS impediu o funcionamento adequado. |

### Tentativas de Solução

| Tentativa | Descrição |
|-----------|-----------|
| **Contato com os Professores** | Buscamos auxílio com os professores de Java e Frontend, mas não conseguimos resolver o problema. |
| **Tentativas de Implementação** | Foram testadas diversas abordagens, mas nenhuma teve sucesso em resolver o erro de CORS. |

### Conclusão

Embora a aplicação funcione corretamente quando testada via **Postman**, o erro de **CORS** impediu que as funcionalidades de **Viagem** e **Relatório** funcionassem como esperado na interface. No entanto, a API está funcional e interage corretamente com o banco de dados.

**Nota:** A solução para o problema de CORS pode depender de configurações específicas no servidor backend ou na aplicação frontend, por isso recomendamos uma revisão adicional dessas configurações.

## Considerações Finais

A API foi configurada corretamente e está em funcionamento, com exceção das funcionalidades de **Viagem** e **Relatório**, que estão inativas devido ao erro de **CORS**.

Continuaremos trabalhando para corrigir esse erro, mas, por enquanto, a aplicação de **Previsão de Pico**, **Mapa da Linha** e **Status Operacional** estão operacionais.
