'use client';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="space-y-8">
        <div className="">
          <h1 className="text-2xl">Estações de Metrô</h1>
          <div>
            <img src='Image/metro_linhaAmarela5.jpg' alt="" />
          </div>

          <div className="w-1/2 text-right">
            <h2 className="text-4xl text-gray-800">Linha 4 Amarela</h2>
            <p className="text-3xl text-gray-600">Luz - Vila Sônia</p>
            <p className="text-2xl text-gray-600">04h AM às 00h.</p>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <h1 className="text-2xl">Estações de Metrô</h1>
          <div>
            <img src='Image/imgmetro1.png' alt="" />

          </div>

          <div className="w-1/2 text-right">


            <h3 className="text-4xl text-gray-800">Linha 9 Esmeralda</h3>
            <p className="text-3xl text-gray-600">Osasco - Grajaú</p>
            <p className="text-2xl text-gray-600">04h AM às 00h.</p>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <h1 className="text-2xl">Estações de Metrô</h1>
          <div> 
                       <img src='Image/linha_diamante.jpg' alt="" />
           </div>
          <div className="w-1/2 text-right">
           
            <h3 className="text-4xl font-bold">Linha 8 Diamante</h3>
            <p className="text-3xl text-gray-600">Júlio Prestes - Itapevi</p>
            <p className="text-2xl text-gray-600">04h AM às 00h.</p>
          </div>
        </div>
      </section>

      <section className="p-4">
        <div className="space-y-4 bg-[#42807D] w-1/2 p-12">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-yellow-500"></div>
            <div>
              <h2 className="text-4xl font-bold text-white">LINHA 4 AMARELA</h2>
              <p className="text-2xl">Operando normalmente</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-gray-500"></div>
            <div>
              <h2 className="text-4xl font-bold text-white">LINHA 8 DIAMANTE</h2>
              <p className="text-2xl">Operando normalmente</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-green-500"></div>
            <div>
              <h2 className="text-4xl font-bold text-white">LINHA 9 ESMERALDA</h2>
              <p className="text-2xl">Operando com velocidade reduzida</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4">
        <header>
          <h1 className="text-5xl font-bold text-center">PROBLEMAS ENFRENTADOS</h1>
        </header>

        <article className="mt-4 space-y-4  mt-16 mb-28">
          <h3 className="text-xl text-5xl font-bold">Superlotação</h3>
          <p className="w-[880px] text-2xl">Durante os horários de pico, o fluxo de passageiros nas estações de metrô aumenta consideravelmente, o que pode causar uma superlotação intensa nas plataformas e nos trens. Essa aglomeração dificulta o embarque e desembarque de passageiros, tornando o processo mais demorado e, muitas vezes, desconfortável.</p>
        </article>

        <article className="mt-4 space-y-4 ">
          <h3 className="text-xl text-5xl font-bold">Superlotação</h3>
        
          <p className="w-[880px] text-2xl">A falta de respostas rápidas e claras em situações de emergência no metrô cria um ambiente de insegurança e desinformação para os passageiros. Sem orientação oficial, muitos acabam recorrendo a boatos, o que aumenta a ansiedade e o estresse no local.</p>
        </article>

        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">Voltar ao topo</button>
      </section>
      
    </>
  );
}
