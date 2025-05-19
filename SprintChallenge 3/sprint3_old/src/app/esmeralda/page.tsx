'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBus, FaClock, FaMapMarkedAlt, FaRoute } from "react-icons/fa";
import { FaTrain } from "react-icons/fa6";

const estacoesLinha9 = [
  { nome: "Osasco", ativa: false },
  { nome: "Presidente Altino", ativa: false },
  { nome: "Ceasa", ativa: false },
  { nome: "Villa Lobos-Jaguaré", ativa: false },
  { nome: "Cidade Universitária", ativa: false },
  { nome: "Pinheiros", ativa: true, link: "/pinheiro" },  
  { nome: "Hebraica-Rebouças", ativa: false },
  { nome: "Cidade Jardim", ativa: false },
  { nome: "Vila Olímpia", ativa: false },
  { nome: "Berrini", ativa: false },
  { nome: "Morumbi", ativa: false },
  { nome: "Granja Julieta", ativa: false },
  { nome: "Santo Amaro", ativa: false },
  { nome: "Socorro", ativa: false },
  { nome: "Jurubatuba", ativa: false },
  { nome: "Autódromo", ativa: false },
  { nome: "Interlagos", ativa: false },
  { nome: "Grajaú", ativa: false },
  { nome: "Mendes-Vila Natal", ativa: false },
];

const Esmeralda = () => {
  const [expandedStation, setExpandedStation] = useState<string | null>(null);
  const [showMapa, setShowMapa] = useState(false);
  const [trainIndex, setTrainIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isViagemDisabled, setIsViagemDisabled] = useState(false);

  const toggleStation = (station: string) => {
    setExpandedStation(expandedStation === station ? null : station);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTrainIndex((prev) => (prev + 1) % estacoesLinha9.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentTrainIndex = hoverIndex !== null ? hoverIndex : trainIndex;

  const handleViagemClick = () => {
    setIsViagemDisabled(true);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <main className="text-center px-4 pt-10 pb-28 max-w-md mx-auto relative bg-white min-h-screen">
      <header>
        <h1 className="font-bold text-[1.8rem] sm:text-[2.3rem] mt-4">
          ESTAÇÕES <span className="text-[#42807D]">LINHAS</span>
        </h1>
      </header>

      <section className="mt-8 space-y-3">
        {[ 
          { label: "Previsão Pico", href: "/HorarioPico", icon: <FaClock />, disabled: false },
          { label: "Ver Relatório de viagem", href: "/Relatorio", icon: <FaBus />, disabled: false },
          { label: "Mapa Linha", href: "/mapaLinha", icon: <FaMapMarkedAlt />, disabled: false },
          { label: "Começar Viagem", href: "#", icon: <FaRoute />, disabled: isViagemDisabled }
        ].map((btn, idx) => (
          <div key={idx} className="mt-5">
            <Link href={btn.disabled ? "#" : btn.href}>
              <button
                className={`bg-[#42807D] ${btn.disabled ? "cursor-not-allowed opacity-50" : "hover:bg-[#5db6ab]"} text-white w-full py-4 rounded-[9px] text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-300`}
                onClick={btn.label === "Começar Viagem" ? handleViagemClick : undefined}
                disabled={btn.disabled}
                type="button"
              >
                {btn.icon}
                {btn.label}
              </button>
            </Link>
          </div>
        ))}
      </section>

      <button
        className="bg-[#42807D] hover:bg-[#5db6ab] text-white w-full mt-8 py-4 rounded-[9px] text-sm font-medium transition-colors duration-300"
        onClick={() => setShowMapa(!showMapa)}
        type="button"
      >
        {showMapa ? "Fechar Mapa" : "Ver Mapa das Estações"}
      </button>

      {showMapa && (
        <div
          className="relative mt-6 w-full h-[600px] bg-[#eef7f6] rounded-lg overflow-hidden"
          style={{ transition: "opacity 0.5s ease-in-out" }}
        >
          {estacoesLinha9.map((estacao, i) => {
            const top = 50 + i * 25;
            const left = i % 2 === 0 ? 40 : 200;
            return (
              <div
                key={estacao.nome}
                className={`absolute text-xs px-3 py-2 rounded-full shadow-md z-10 ${estacao.ativa ? "bg-[#42807D] text-white cursor-pointer" : "bg-[#d6eae9] text-gray-600 cursor-default"}`}
                style={{ top, left }}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {estacao.link ? (
                  <Link href={estacao.link}>
                    {estacao.nome}
                  </Link>
                ) : (
                  estacao.nome
                )}
                {hoverIndex === i && (
                  <div className="absolute top-[-28px] left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs text-gray-800 z-50">
                    {estacao.nome}
                  </div>
                )}
              </div>
            );
          })}

          <svg className="absolute w-full h-full pointer-events-none z-0" viewBox="0 0 400 600">
            {estacoesLinha9.map((_, i) => {
              if (i === estacoesLinha9.length - 1) return null;
              const y1 = 60 + i * 25 + 10;
              const y2 = 60 + (i + 1) * 25 + 10;
              const x1 = i % 2 === 0 ? 40 + 40 : 200 + 40;
              const x2 = (i + 1) % 2 === 0 ? 40 + 40 : 200 + 40;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#42807D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          <div
            className="absolute z-20"
            style={{
              top: `${50 + currentTrainIndex * 25}px`,
              left: `${currentTrainIndex % 2 === 0 ? 40 : 200}px`,
              transition: "top 0.5s ease, left 0.5s ease"
            }}
          >
            <FaTrain className="text-[#42807D] text-xl" />
          </div>
        </div>
      )}

      {showMessage && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-6 py-4 rounded-lg shadow-lg z-50"
          style={{ animation: "fadeIn 0.3s ease forwards" }}
        >
          <p>Em breve!</p>
        </div>
      )}

      <footer className="fixed bottom-4 left-0 w-full px-4">
        <Link href="/header">
          <button
            className="bg-[#42807D] text-white w-[58%] py-4 rounded-[9px] text-base hover:bg-[#365d56] transition-colors duration-300"
            type="button"
          >
            Voltar
          </button>
        </Link>
      </footer>
    </main>
  );
};

export default Esmeralda;
