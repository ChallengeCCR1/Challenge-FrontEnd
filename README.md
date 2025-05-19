
🚆 Objetivo do Projeto
O Future Station oferece uma interface interativa de viagem para os usuários de transporte público, permitindo calcular e exibir os tempos estimados de viagem entre diferentes estações. Além disso, o sistema registra as viagens realizadas, apresenta relatórios detalhados de fluxo de passageiros, e permite interações com funcionalidades como avisos e sugestões.


## Integrantes do Time

| Nome            | RM        |
|------------------|-----------|
| Matteus Viegas dos Santos | RM 561090  |
| Pedro Henrique de Souza Sena | RM 561178  |
| Sulamita Viegas dos Santos | RM 561089  |


Obrigado por visitar o nosso repositório!

Funcionalidades Implementadas
1. Iniciar Viagem
O usuário pode selecionar a estação de origem e destino.

O sistema calcula o tempo estimado de viagem e exibe uma barra de progresso em tempo real, informando quanto falta para a chegada.

Durante a viagem, o usuário vê o tempo restante e o percentual de viagem concluído.

2. Relatório de Viagens
Permite que o usuário visualize um histórico de suas viagens anteriores, com detalhes como estação de origem, destino, tempo de viagem e horário.

3. Horário de Pico e Fluxo de Passageiros
Visualização do fluxo de passageiros nas estações, incluindo número de pessoas presentes e horários específicos.

Análise de fluxo para diferentes horários do dia, ajudando o usuário a escolher os melhores momentos para viajar.

4. Mapa da Linha 9
Mapa interativo com todas as estações da Linha 9, destacando a zona sul e o número de passageiros em cada estação.

Visão clara da distribuição do fluxo de passageiros nas estações da linha.

5. Sistema de Login e Cadastro
Login com credenciais para acesso ao sistema.

Visualização e edição do perfil, incluindo alteração da foto de perfil.

6. Avisos e Sugestões Interativas
Página dedicada a notícias importantes sobre mudanças nas linhas.

Formulário para envio de feedback e sugestões dos usuários.

7. Perfil do Usuário
Exibição de informações pessoais: nome, e-mail e foto.

Opção para alterar foto de perfil e fazer logout.

🛠 Roadmap do Projeto
Fase 1: Protótipos e Planejamento

Criação de wireframes e mockups no Figma.

Definição da paleta de cores, tipografia e layout.

Fase 2: Desenvolvimento da Estrutura Básica

Implementação inicial com HTML e CSS.

Configuração da navegação e layout responsivo.

Fase 3: Implementação com Next.js e TypeScript

Migração para Next.js com TypeScript.

Desenvolvimento das funcionalidades principais: login, cadastro, viagens, relatórios e fluxo de passageiros.

🛠 Tecnologias Utilizadas
Next.js: Framework React para frontend.

TypeScript: Superset JavaScript para melhor escalabilidade.

React: Biblioteca para UI.

localStorage: Armazenamento local para dados do usuário.

📁 Estrutura de Pastas
/src — Código-fonte principal

/pages — Páginas Next.js

/components — Componentes reutilizáveis

/public — Arquivos estáticos (imagens, ícones)

🛠️ Como Rodar o Projeto Localmente
bash
Copiar
Editar
git clone https://github.com/ChallengeCCR1/Challenge-FrontEnd.git
cd Challenge-FrontEnd
npm install
npm run dev
Acesse a aplicação em: http://localhost:3000

🎥 Vídeo de Apresentação
Veja nosso vídeo de apresentação do projeto aqui.

Exemplo de Uso
Faça login no sistema com seu e-mail e senha.

Acesse a página Iniciar Viagem e selecione a estação de origem e destino.

O sistema calculará o tempo estimado de viagem e mostrará uma barra de progresso em tempo real.

Durante a viagem, acompanhe o tempo restante e o percentual concluído.

Ao final da viagem, uma mensagem de sucesso será exibida.

Consulte seu histórico de viagens na página de relatórios para revisar suas viagens anteriores.

Visualize o mapa interativo da Linha 9 para planejar futuras viagens.

Acesse os avisos e envie sugestões para melhorar o sistema.

Principais APIs do Projeto
API Viagem - Iniciar Viagem (POST)
URL: http://localhost:8080/api/viagem/iniciar
Inicia uma nova viagem, recebendo dados da estação de origem, destino e usuário, retornando o tempo estimado.

API Relatório de Usuário (GET)
URL: http://localhost:8080/relatorio/usuario/{id}?usuario={nome}
Retorna o histórico detalhado de viagens do usuário, com origem, destino, tempo e horários.

API Mapa da Linha 9 (GET)
URL: http://localhost:8080/api/mapa/linha9
Fornece dados para o mapa interativo da Linha 9, mostrando estações e fluxo de passageiros.

API Previsão (GET)
URL: http://localhost:8080/api/previsao?estacao={nomeEstacao}&horario={horario}
Retorna a previsão de fluxo de passageiros para uma estação e horário específicos.

API Status das Linhas Diamante (GET)
URL: http://localhost:8080/status-linhas/diamante
Informa o status em tempo real das linhas Diamante, incluindo atrasos ou interrupções.

API Cadastro de Usuário (POST)
URL: http://localhost:8080/api/usuario/cadastrar
Permite o cadastro de novos usuários com dados como nome, e-mail e senha.

API Login de Usuário (POST)
URL: http://localhost:8080/api/usuario/login
Autentica usuários para acesso ao sistema validando credenciais"!
