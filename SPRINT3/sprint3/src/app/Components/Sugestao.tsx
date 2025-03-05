'use client'

import React, { useState } from 'react'; // Importando React e useState

const Sugestoes = () => {
  // Estado para controlar o feedback do envio
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFeedback('Sugestão enviada com sucesso!');
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen flex justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-full max-w-lg sm:max-w-md lg:max-w-2xl p-8 rounded-xl shadow-lg">
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-[#42807D] mb-6">
          ENVIAR SUA <span className="text-[#2C3E50]">SUGESTÃO</span>
        </h1>
        <p className="text-center text-base sm:text-lg text-gray-600 mb-6">
          Sua sugestão é fundamental para ajudarmos a melhorar cada vez mais!
        </p>

        {/* Feedback de envio */}
        {feedback && (
          <div className="mb-4 p-4 text-center text-white bg-[#4CAF50] rounded-lg">
            {feedback}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="nome"
              className="block text-lg font-medium text-[#2C3E50] mb-2"
            >
              Seu nome
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              className="w-full p-4 rounded-lg border-2 border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#42807D] text-lg"
              required
            />
          </div>

          {/* Sugestão */}
          <div>
            <label
              htmlFor="sugestao"
              className="block text-lg font-medium text-[#2C3E50] mb-2"
            >
              Sua sugestão
            </label>
            <textarea
              id="sugestao"
              rows="4"
              placeholder="Digite sua sugestão aqui..."
              className="w-full p-4 rounded-lg border-2 border-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#42807D] text-lg"
              required
            />
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <button
              type="submit"
              className="bg-[#42807D] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#365F52] transition-colors w-full sm:w-auto mb-4 sm:mb-0"
            >
              Enviar Sugestão
            </button>
            <button
              type="reset"
              className="text-[#42807D] py-3 px-6 rounded-lg text-lg font-semibold border-2 border-[#42807D] hover:bg-[#42807D] hover:text-white transition-colors w-full sm:w-auto"
            >
              Limpar
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Sua informação estará protegida! <br />
            <span className="font-semibold text-[#42807D]">Confiança e privacidade</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sugestoes;
