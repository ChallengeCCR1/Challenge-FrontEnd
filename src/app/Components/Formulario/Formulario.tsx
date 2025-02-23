const Formulario = () => {
    return (
      <form className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="nome" className="block text-lg font-medium text-gray-700">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="mensagem" className="block text-lg font-medium text-gray-700">Sugestao</label>
          <textarea
            id="mensagem"
            name="mensagem"
            className="mt-2 p-3 w-full h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-[#42807D]-700 focus:outline-none focus:ring-2 focus:ring-bg-[#42807D]-500"
        >
          Enviar Sugestão
        </button>
      </form>
    );
  };
  
  export default Formulario;
  