'use client';

import { useEffect, useState } from 'react';
import { TrainFront } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Estacao {
  id_estacao: number;
  nome: string;
  localizacao: string;
  passageirosSimulados: number;
}

const MapaLinha = () => {
  const [estacoes, setEstacoes] = useState<Estacao[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const router = useRouter();

  const obterZona = (nome: string): string => {
    const nomeEstacao = nome.toLowerCase();

    if (['osasco', 'jaguaré', 'villa lobos - jaguaré', 'pinheiros', 'butantã', 'lapa', 'são paulo-morumbi'].includes(nomeEstacao)) {
      return 'Zona Oeste - SP';
    }
    if (['morumbi', 'campo limpo', 'santo amaro'].includes(nomeEstacao)) {
      return 'Zona Sul - SP';
    }

    return 'Zona Oeste - SP';
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/mapa/linha9')
      .then(res => res.json())
      .then(data => {
        const estacoesFormatadas = data.estacoes.map((nome: string, index: number) => ({
          id_estacao: index,
          nome,
          localizacao: obterZona(nome),
          passageirosSimulados: Math.floor(Math.random() * 1000),
        }));
        setEstacoes(estacoesFormatadas);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="relative border-l-4 border-green-600 pl-6 space-y-14 mt-10">

        <div
          className="absolute -left-5 top-0 z-10 text-green-600 animate-bounce-slow"
          style={{
            animation: 'bounce 4s linear infinite',
            animationDelay: `${hovered !== null ? hovered : estacoes.length - 1}s`,
          }}
        >
          <TrainFront className="w-8 h-8 text-green-600" />
        </div>

        {estacoes.map((estacao) => (
          <div
            key={estacao.id_estacao}
            className="relative flex flex-col items-start group"
            onMouseEnter={() => setHovered(estacao.id_estacao)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center space-x-4">
              <div className="w-5 h-5 bg-green-600 rounded-full z-10 shadow-md"></div>
              <div className="text-sm sm:text-base text-gray-800 font-medium">{estacao.nome}</div>
              <div className="ml-auto text-xs text-gray-500">👥 {estacao.passageirosSimulados}</div>
            </div>

            {hovered === estacao.id_estacao && (
              <div
                className="bg-white border border-green-200 rounded-lg p-3 mt-2 shadow-xl w-72 text-sm transform transition-all duration-300 opacity-100 translate-y-0"
              >
                <p><strong>Estação:</strong> {estacao.nome}</p>
                <p><strong>Local:</strong> {estacao.localizacao}</p>
                <p><strong>Passageiros:</strong> {estacao.passageirosSimulados}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 w-full max-w-md px-6">
        <button
          onClick={() => router.push('/esmeralda')}
          className="bg-[#42807D] text-white w-[80%] ml-[9%] py-3 rounded-[9px] text-base hover:bg-[#365d56] transition-all duration-300"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default MapaLinha;
