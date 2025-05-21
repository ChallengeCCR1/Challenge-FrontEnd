🚆 Future Station – Sistema de Viagem e Gestão de Fluxo de Passageiros
Bem-vindo ao repositório do Future Station, um sistema interativo de transporte desenvolvido com foco em experiência do usuário, eficiência no deslocamento e informação em tempo real para os passageiros das estações da CCR.

👥 Integrantes do Time
Matteus Viegas dos Santos – RM 561090

Pedro Henrique de Souza Sena – RM 561178

Sulamita Viegas dos Santos – RM 561089

🎯 Objetivo do Projeto
O Future Station é uma plataforma desenvolvida para usuários do transporte público, com o objetivo de:

Calcular tempo estimado de viagem entre estações;

Exibir relatórios de viagens anteriores;

Fornecer dados de fluxo de passageiros e horários de pico;

Apresentar status operacionais das linhas;

Integrar funcionalidades interativas como chatbot e formulários de feedback;

Oferecer uma interface moderna, acessível e conectada às necessidades do usuário.

Nosso sistema promove planejamento de rota inteligente, interatividade, transparência nas informações e conectividade entre tecnologias.

✅ Funcionalidades Implementadas
1. 🔐 Login e Cadastro
Acesso seguro com autenticação.

Cadastro com nome, e-mail e senha.

Dados enviados ao banco Oracle via API Java, com comunicação com módulo Python.

2. 🏠 Página Principal Pós-Login
Após efetuar login, o usuário é redirecionado para a tela inicial do sistema, que contém:

Apresentação dos integrantes do projeto;

Botão "Saber Mais" com informações detalhadas das linhas disponíveis:

Status operacional das Linhas 4, 8 e 9;

Horário de funcionamento;

Formulário de feedback e reclamações.

3. 🚋 Linha 9 – Funcionalidades Principais
Ao acessar a Linha 9, o usuário encontra:

▸ Iniciar Viagem
Escolha da estação de origem e destino;

Cálculo de tempo estimado;

Barra de progresso com percentual da viagem e tempo restante.

🔧 Adendo técnico:
Durante a integração do front (Vercel) com o back (Java), foi identificado um erro de CORS, causado pela diferença de domínios.
Foi necessário configurar o back-end para aceitar origens externas, como o domínio do Vercel.
Além disso, a API de Relatório depende dos dados gerados pela API de Viagem, tornando ambas interdependentes.

▸ Relatório de Viagens
Histórico completo com estação de origem, destino, horário e duração.

▸ Mapa Interativo da Linha 9
Visualização em tempo real das estações da linha;

Destaque da zona sul e número de passageiros por estação.

▸ Previsão de Horário de Pico
Gráficos e dados mostrando os momentos de maior lotação em cada estação;

Ajuda no planejamento de viagens em horários estratégicos.

▸ Estações Detalhadas – Exemplo: Pinheiros
Ao selecionar a estação Pinheiros, o usuário acessa:

Ícones com informações de acessibilidade, botão de denúncia rápida;

Integração com o Chatbot interativo, que responde dúvidas frequentes sobre o sistema, rotas, horários e status das linhas.

4. 💬 Chatbot Interativo
Disponível nas estações e na página principal.

Responde perguntas sobre:

Viagens;

Status das linhas;

Como utilizar o sistema;

Problemas e reclamações.

5. 📢 Avisos e Sugestões
Página com atualizações e mudanças nas linhas.

Formulário de envio de feedback, sugestões e reclamações.

6. 👤 Perfil do Usuário
Visualização de nome, e-mail e foto de perfil.

Edição de imagem e opção de logout.

🛠️ Roadmap do Projeto
Fase 1: Planejamento
Criação de protótipos no Figma;

Definição visual (cores, tipografia, layout).

Fase 2: Estrutura Inicial
Desenvolvimento com HTML/CSS;

Estruturação de páginas e componentes básicos.

Fase 3: Integração e Stack Completa
Migração para Next.js com TypeScript;

Criação das APIs em Java;

Integração com módulo Python;

Banco de dados Oracle para persistência.

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

📽️ *(Insira o link do vídeo aqui, se disponível)*

---

## 💡 **Exemplo de Uso**

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



Documentação para Colocar a Aplicação Java no Ar
Objetivo: Este documento tem como objetivo fornecer um passo a passo para colocar a aplicação Java do projeto Future Station Challenge no ar, caso alguém precise hospedar a API que foi construída utilizando Java, mas que, por questões de tempo, não foi hospedada pela equipe.

Passos para Colocar a Aplicação no Ar
1. Clonando o Repositório
Acesse o repositório do projeto:

Repositório ChallengeJava

Clone o repositório para o seu ambiente local.

Você terá uma pasta chamada ChallengeJava no seu diretório local.

2. Abrindo o Projeto na IDE
Dentro da pasta clonada, navegue até:
src -> main -> java -> br -> com -> fiap
Aqui estarão todos os arquivos e classes do nosso projeto.

Abra o projeto na sua IDE de preferência (recomendamos o IntelliJ IDEA Ultimate).

3. Configuração do Quarkus Tools Plugin
Caso você não tenha o plugin do Quarkus instalado na sua IDE, siga os seguintes passos:

No canto superior direito da sua IDE, clique na engrenagem e selecione Plugins.

Na tela de plugins, selecione a opção Marketplace e digite "Quarkus Tools" na barra de pesquisa.

Se você não tiver o plugin instalado, clique em Install.

Após a instalação, reinicie sua IDE.

4. Configurando o Plugin Quarkus
Após reiniciar a IDE, siga os passos abaixo para configurar o Quarkus:

Clique na seta para baixo no canto superior direito da IDE, onde aparece a opção Run Configurations.

Na tela que abrir, clique em Edit Configurations.

Na janela de configurações, clique no ícone + para adicionar uma nova configuração.

Selecione a opção Quarkus na lista de configurações.

Clique em Apply e depois em OK para salvar.

Agora, o Quarkus está corretamente configurado.

5. Rodando a Aplicação
Com a configuração pronta, basta clicar no botão Play ou Run na IDE para iniciar a aplicação.

Se tudo estiver correto, você verá algo semelhante a isso no terminal:

scss
Copiar
Editar
Quarkus started in XXs. (Running)
Isso indica que a aplicação foi iniciada com sucesso.

Problemas de Funcionalidade de Viagem e Relatório
Durante a Sprint 4, nos deparamos com um erro de CORS nas funcionalidades de Viagem e Relatório. Esse problema tem impacto direto no funcionamento dessas funcionalidades, pois sem uma viagem registrada, não é possível gerar um relatório.

Contexto do Erro de CORS
CORS (Cross-Origin Resource Sharing) é um mecanismo de segurança que impede que páginas da web façam requisições a servidores de domínios diferentes.

No nosso caso, durante os testes no Postman, a API funcionou corretamente, realizando a inserção de dados no banco de dados ao concluir uma viagem e recuperando os dados corretamente ao consultar o relatório.

Tentativas de Solução
Durante o processo, tentamos diversas soluções para resolver o erro de CORS:

Contato com os Professores: Buscamos auxílio com os professores de Java e Frontend, mas, apesar das tentativas, não conseguimos resolver o problema.

Tentativas de Implementação: Várias abordagens foram testadas para contornar o erro de CORS, mas nenhuma delas teve sucesso.

Conclusão
Embora a aplicação funcione corretamente quando testada via Postman, o erro de CORS impediu que as funcionalidades de Viagem e Relatório funcionassem como esperado na interface. Gostaríamos de enfatizar que, apesar das tentativas de resolução, o problema de CORS não foi solucionado. No entanto, a API está funcional e interage corretamente com o banco de dados.

Nota: A solução para o problema de CORS pode depender de configurações específicas no servidor backend ou na aplicação frontend, e por isso, recomendamos uma revisão adicional dessas configurações.

Considerações Finais
A API foi configurada corretamente e está em funcionamento, com exceção da funcionalidade de Viagem e Relatório, que estão inativas devido ao erro de CORS.

Continuaremos trabalhando para corrigir esse erro, mas por enquanto, a aplicação de Previsão de Pico, Mapa da Linha e Status Operacional estão operacionais.