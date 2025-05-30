'use client';

import Link from "next/link";
import { useEffect, useState, Suspense } from "react";  // Importando Suspense para otimizar o carregamento
import Image from "next/image";

// Componente de Spinner (loading) para exibição enquanto os dados são carregados
const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="w-16 h-16 border-4 border-t-transparent border-green-600 border-solid rounded-full animate-spin"></div>
  </div>
);

// Componente que busca os dados de status das linhas
const StatusLinhas = () => {
  // Estado inicial com valores de "Carregando..." para cada linha
  const [status, setStatus] = useState({
    diamante: "Carregando...",
    esmeralda: "Carregando...",
    amarela: "Carregando..."
  });

  // Efeito que carrega os dados das linhas quando o componente é montado
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        // Fazendo requisições assíncronas para pegar os dados de status das linhas
        const [diamanteRes, esmeraldaRes, amarelaRes] = await Promise.all([
          fetch("http://localhost:8080/status-linhas/diamante"),
          fetch("http://localhost:8080/status-linhas/esmeralda"),
          fetch("http://localhost:8080/status-linhas/amarela")
        ]);

        // Convertendo as respostas para JSON
        const [diamante, esmeralda, amarela] = await Promise.all([
          diamanteRes.json(),
          esmeraldaRes.json(),
          amarelaRes.json()
        ]);

        // Atualizando o estado com os dados recebidos
        setStatus({
          diamante: diamante[0]?.status || "Indisponível",  // Caso não exista o status, "Indisponível"
          esmeralda: esmeralda[0]?.status || "Indisponível",
          amarela: amarela[0]?.status || "Indisponível"
        });
      } catch {
        // Em caso de erro na requisição, configura os status como "Erro ao carregar"
        setStatus({
          diamante: "Erro ao carregar",
          esmeralda: "Erro ao carregar",
          amarela: "Erro ao carregar"
        });
      }
    };

    fetchStatus();  // Chama a função para fazer a requisição
  }, []);  // O array vazio significa que o efeito será executado apenas uma vez, após o primeiro render

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {[ 
        { nome: "Linha 8 Diamante", cor: "text-gray-700", status: status.diamante },
        { nome: "Linha 9 Esmeralda", cor: "text-emerald-600", status: status.esmeralda },
        { nome: "Linha 4 Amarela", cor: "text-yellow-500", status: status.amarela }
      ].map((linha, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center group"
        >
          {/* Ícone de status das linhas */}
          <svg
            className={`w-12 h-12 ${linha.cor} mb-4 transition-transform duration-300 group-hover:scale-110`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M12 9v2.25m0 4.5h.008v-.008H12v.008zm-.75 4.5A9 9 0 1112 21a9 9 0 01-.75-1.5z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#357063]">
            {linha.nome}
          </h3>
          <p className="text-sm font-medium text-gray-600">{linha.status}</p>
        </div>
      ))}
    </div>
  );
};

const Header = () => {
  // Função para rolar até o topo da página
  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-white via-[#f4fdfa] to-white min-h-screen">
      <header>
        <h1 className="mx-auto mt-10 w-full text-[2.8rem] sm:text-[3rem] font-extrabold tracking-wide">
          FUTURE <span className="text-[#42807D]">STATION</span>
        </h1>
      </header>

      <section className="w-[90%] sm:w-[70%] mx-auto mt-10">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-[#1F2937] mb-8">
          Status Operacional das Linhas:
        </h2>

        {/* Suspense é usado aqui para mostrar o spinner enquanto o StatusLinhas está sendo carregado */}
        <Suspense fallback={<LoadingSpinner />}>
          <StatusLinhas />
        </Suspense>
      </section>

      {/* Mais seções de conteúdo */}
      <section className="w-[90%] sm:w-[70%] mt-12">
        <p className="text-[1.4rem] font-medium mb-8">
          Selecione a linha desejada para mais informações:
        </p>

        <div className="flex flex-col gap-6 items-center justify-center border-2 border-[#cce5e3] rounded-2xl p-6 shadow-lg">
          <Link href="/esmeralda">
            <button className="bg-[#357063] hover:bg-[#2a5d51] transition-all duration-300 text-white text-[1.2rem] px-10 py-4 rounded-xl shadow-md hover:scale-105">
              Linha 9 Esmeralda
            </button>
          </Link>

          <button
            className="bg-[#6c6960] text-white text-[1.2rem] px-10 py-4 rounded-xl cursor-not-allowed opacity-70 shadow-md"
            disabled
          >
            Linha 8 Diamante
          </button>

          <button
            className="bg-[#e6e94d] text-[#333] text-[1.2rem] px-10 py-4 rounded-xl cursor-not-allowed opacity-80 shadow-md"
            disabled
          >
            Linha 4 Amarela
          </button>
        </div>
      </section>

      {/* Seção de Horário de Funcionamento */}
      <h1 className="text-[1.7rem] sm:text-[1.8rem] mx-auto mt-[26%] font-bold w-[77%] text-black mb-2">
        Horário de Funcionamento das Linhas
      </h1>
      <p className="text-[1.2rem] sm:text-[1.1rem] mx-auto leading-snug text-gray-600  px-4 sm:px-8">
        Confira os horários de abertura e fechamento das estações de cada linha.
      </p>

      <section className="flex text-center align-center mt-10 flex-col gap-2">
        <div className="mt-4">  
          <div className="flex bg-[#fff] flex-col gap-6 items-center justify-center border-2 border-[#cce5e3] rounded-2xl p-13 shadow-lg">
            <Link href="/horariofuncionamento">
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src="/img_Icons/horario.png"
                  alt="Horario de Funcionamento"
                  width={98}
                  height={98}
                />
                <h3 className="font-bold mt-[5%] text-[1.4rem] sm:text-lg">Horário de Funcionamento!</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Sugestões */}
      <h1 className="text-[1.7rem] sm:text-[1.8rem] mx-auto mt-[19%] font-bold text-black mb-2">
        Sua opinião importa!
      </h1>
      <p className="text-[1.2rem] sm:text-[1.1rem] mx-auto leading-snug text-gray-600 mb-6 px-4 sm:px-8">
        Sua contribuição é essencial para que possamos melhorar nossos serviços no futuro!
      </p>

      <div className="flex flex-col gap-6 bg-[#fff] items-center justify-center border-2 border-[#cce5e3] rounded-2xl p-11 py-10 px-17 shadow-lg">
        <div className="w-[100%] mx-auto mb-7">
          <Link href="/sugestao">
            <div className="transition-transform duration-300 hover:scale-110">
              <Image
                src="/img_icons/image_form.png"
                alt="formulario"
                width={72}
                height={66}
                className="mx-auto"
              />
              <p className="font-bold mt-[5%] text-[1.4rem] sm:text-lg">
                Deixe aqui sua opinião!
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="fixed bottom-10 left-4">
        <button
          onClick={scrollTo}
          className="bg-[#357063] text-white text-lg py-3 px-4 rounded-full shadow-lg hover:bg-[#2a5d51] transition-all duration-300"
        >
          ↑ Voltar ao Topo.
        </button>
      </div>

      <div className="flex justify-center mt-19 mb-1 w-full px-4">
        <Link href="/avisos" className="w-full max-w-sm">
          <button className="w-full bg-[#42807D] text-white text-lg sm:text-xl py-3 rounded-lg hover:bg-[#365d56] transition-all duration-300">
            Voltar
          </button>
        </Link>
      </div>

      <div className="flex justify-center mt-10 mb-[30%] w-full px-4">
        <button
          onClick={() => window.location.reload()}
          className="w-full max-w-sm bg-[#42807D] text-white text-lg sm:text-xl py-3 rounded-lg hover:bg-[#365d56] transition-all duration-300"
        >
          Atualizar Página
        </button>
      </div>
    </main>
  );
};

export default Header;
