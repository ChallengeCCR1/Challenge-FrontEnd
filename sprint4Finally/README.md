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

🔗 Principais APIs do Projeto
API	Método	URL	Função
API Viagem	POST	/api/viagem/iniciar	Inicia uma nova viagem. ⚠️ Requere correção de CORS para uso externo.
API Relatório de Usuário	GET	/relatorio/usuario/{id}?usuario={nome}	Retorna o histórico de viagens.
API Mapa da Linha 9	GET	/api/mapa/linha9	Fornece dados para o mapa interativo.
API Previsão de Fluxo	GET	/api/previsao?estacao={nome}&horario={horario}	Retorna previsão de lotação por horário.
API Status das Linhas Diamante	GET	/status-linhas/diamante	Retorna o status em tempo real das linhas.
API Cadastro de Usuário	POST	/api/usuario/cadastrar	Cadastro de novos usuários.
API Login de Usuário	POST	/api/usuario/login	Autentica usuário e inicia sessão.

🎥 Vídeo de Apresentação
📽️ (Insira o link do vídeo aqui, se disponível)

💡 Exemplo de Uso
Acesse a página de login, insira e-mail e senha;

Ao logar, vá até a página principal e conheça os participantes e opções;

Explore as linhas disponíveis e veja o status operacional;

Vá até a Linha 9 e selecione origem e destino;

Acompanhe a viagem com barra de progresso e tempo estimado;

Consulte seu histórico na seção de relatórios;

Use o mapa interativo e verifique os horários de pico;

Interaja com o chatbot para tirar dúvidas;

Acesse a estação Pinheiros para ver recursos adicionais;

Envie sugestões ou denúncias no formulário interativo.





Aplicação Java:

Por questões de tempo, o grupo optou por não hospedar a API feita na linguagem
Java (não é um recurso obrigatório da matéria de Domain Driven Design Using
Java), e por isso, essa documentação serve como um passo a passo para
colocar nossa aplicação no ar.

Abra o repositório https://github.com/ChallengeCCR1/ChallengeJava 

e clone onosso projeto.
Você terá uma pasta escrita “ChallengeJava”.

Basta abrir a pasta “future-station-challenge”, e basta adentrar os pacotes src ->
main -> java -> br -> com -> fiap e pronto, aí estão todos os arquivos e classes
do nosso projeto.

Basta abrir esse projeto na sua IDE (de preferência o Intellij Ultimate). Se estiver
tudo correto, basta clicar em:Caso não tenha essa opção, você deve seguir esses passos:
No canto superior direito da sua IDE, clique na engrenagem, e logo em seguida
em “Plugins”Ao acessar, você verá uma tela como essa:
Selecione a opção “Marketplace”, e digite o nome do plugin “Quarkus Tools”Se você não tiver instalada, clique em “Install”.
Pronto, agora basta reiniciar sua IDE e seu Plugin já estará instalado. Porém,
ainda temos alguns passos:
Para configurar o plugin, você deve clicar na seta para baixo, onde a marcação
mostra:
Abrirá uma tela parecida com essa:
Clique em “Edit Configurations” para configurar o plugin.
Logo em seguida, abrirá uma tela como a seguir, basta clicar no sinal de “+”, ou
em “Add new run configuration”:Ao clicar, aparecerá uma tela assim:
Basta rolar e procurar por “Quarkus”. Clique em “Apply” e em “OK”.Em seguida, especifique um nome para sua aplicação, selecione o projeto,
aplique e confirme.

Perceba que agora está configurado corretamente:Por fim, basta clicar em “Play”, ou no botão de rodar, como preferir chamar, e
esperar a aplicação subir.
Se tudo ocorrer bem, você deve ter algo assim no seu terminal:
Pronto, a aplicação está no ar!Problemas funcionalidade de Viagem e Relatório
Durante o planejamento do projeto, o grupo entrou em consenso de termos as
seguintes funcionalidades:
- Previsão de Pico (OK);
- Viagem (Inativa);
- Relatório (Inativa);
- Mapa da Linha (OK);
- Status Operacional (OK);
Durante a confecção da Sprint4, nos deparamos com um erro de CORS na
aplicação de viagem, no que implica diretamente na funcionalidade de relatório,
pois sem uma viagem, não existe relatório. Acontece que contatamos os
professores de Java e de Front, mas todas as propostas que nos deram foram
falhas, e não tivemos sucesso. Por fim, é importante ressaltar que, em uma aula
de Front o professor teve o mesmo problema, e não houve solução do mesmo
erro de CORS. Preferimos documentar pois, ao fazermos testes no Postman, a
API funciona normalmente, e insere no banco de dados (ao concluir uma
viagem), e ‘puxa’ (ao consumir a API de relatório):Como podemos ver, a aplicação rodou normalmente, e inseriu no banco de
dados. Nós entendemos que falhamos em não conseguir consertar, mas
gostaríamos que ficasse evidente que não foi por falta de tentativas.