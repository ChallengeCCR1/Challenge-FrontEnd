'use client';
import Botao from "../Components/Botao/Botao";

const Contato = () => {
    return (
        <>
          
            <h1>Equipe</h1>
         
            <main>
    <h1>EQUIPE</h1>

    <section>
        <div>
            <div>
                <h3>Matteus Viegas Dos Santos</h3>
                <p>RM 561090</p>
            </div>
        </div>

        <div>
            <div>
                <h3>Pedro Henrique de Souza Sena</h3>
                <p>RM 561178</p>
            </div>
        </div>

        <div>
            <div>
                <h3>Sulamita Viegas Dos Santos</h3>
                <p>RM 561019</p>
            </div>
        </div>    
    </section>
    <button>voltar ao topo</button>
</main>

         
            <Botao cor="green" texto="Voltar ao topo " onClick={() => { alert("Element press") }} />

        </>
    )
}


export default Contato;