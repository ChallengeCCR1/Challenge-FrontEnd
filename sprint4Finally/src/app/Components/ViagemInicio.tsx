'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Usuario {
  id: number;
  nome: string;
}

interface Estacao {
  id: number;
  nome: string;
  linha?: string;
}

const ViagemInicio = () => {
  const [estacoesAPI, setEstacoesAPI] = useState<Estacao[]>([]);
  const [usuarioId, setUsuarioId] = useState('1');
  const [origemId, setOrigemId] = useState('');
  const [destinoId, setDestinoId] = useState('');
  const [hpartida, setHpartida] = useState('');
  const [erro, setErro] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [, estacoesResponse] = await Promise.all([
          fetch('/api/usuario/todos'), // chamado mas descartado
          fetch('/api/estacao/todas'),
        ]);

        if (!estacoesResponse.ok) {
          throw new Error('Falha ao carregar as estações');
        }

        const estacoesData: Estacao[] = await estacoesResponse.json();
        setEstacoesAPI(estacoesData);

        const agora = new Date();
        const agoraISO = agora.toISOString().slice(0, 16);
        setHpartida(agoraISO);
      } catch (err) {
        setErro(err instanceof Error ? err.message : 'Erro ao carregar dados');
      }
    };

    fetchData();
  }, []);

  const iniciarViagem = async () => {
    if (!origemId || !destinoId) {
      setErro('Preencha todos os campos!');
      return;
    }

    if (origemId === destinoId) {
      setErro('A estação de origem não pode ser igual à de destino.');
      return;
    }

    setIsLoading(true);
    setErro('');

    try {
      const resposta = await fetch('/api/viagem/iniciar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usuarioId: parseInt(usuarioId),
          estacaoOrigemId: parseInt(origemId),
          estacaoDestinoId: parseInt(destinoId),
          hPartida: hpartida,
        }),
      });

      const json = await resposta.json();

      if (!resposta.ok) {
        throw new Error(json.message || 'Falha ao iniciar a viagem');
      }

      router.push(`/viagem/iniciada?viagemId=${json.id}`);
    } catch (err: unknown) {
      setErro(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  };

  const estacoesLinha9 = estacoesAPI.filter((estacao) => estacao.linha === '9 Esmeralda');

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-lg font-semibold">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl font-bold mb-6">Iniciar Viagem</h1>
      {erro && <p className="text-red-500 mb-4">{erro}</p>}

      <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md space-y-4">
        <div>
          <label className="block mb-1">Estação de Origem</label>
          <select
            value={origemId}
            onChange={(e) => setOrigemId(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Selecione a origem</option>
            {estacoesLinha9.map((estacao) => (
              <option key={estacao.id} value={estacao.id.toString()}>
                {estacao.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Estação de Destino</label>
          <select
            value={destinoId}
            onChange={(e) => setDestinoId(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Selecione o destino</option>
            {estacoesLinha9.map((estacao) => (
              <option key={estacao.id} value={estacao.id.toString()}>
                {estacao.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={iniciarViagem}
          disabled={isLoading}
          className="w-full bg-[#42807D] text-white py-2 rounded hover:bg-[#365d56]"
        >
          {isLoading ? 'Iniciando...' : 'Iniciar Viagem'}
        </button>
      </form>

      <div className="mt-4">
        <button
          onClick={() => router.back()}
          className="bg-[#42807D] text-white w-full py-3 mt-6 rounded-[9px] text-base hover:bg-[#365d56]"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default ViagemInicio;
