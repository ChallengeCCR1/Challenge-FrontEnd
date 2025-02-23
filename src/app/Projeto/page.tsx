'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3Alt, faJs, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 

import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";
import Link from "next/link";
import Formulario from '../Components/Formulario/Formulario';
const Produto = () => {
    return (
        <>
            <h1 className="text-6xl text-center p-8 font-bold ">PROJETO</h1>
            <Link href="#">
                <h1>PENASSSSS</h1>
            </Link>

            <div>
    <div>
        <div>

            <p className="w-1/2 text-3xl ml-20 leading-tight">O projeto da Future Station oferece uma solução inovadora que integra um chatbot interativo, um painel de avisos e uma ferramenta para análises de horários de pico, facilitando a comunicação e o gerenciamento de dados em tempo real</p>
            <p className="mt-14 w-1/2 text-3xl ml-20 leading-tight"><strong>Chatbot interativo:</strong> O chatbot da Future Station é capaz de atender dúvidas frequentes, realizar agendamentos e fornecer orientações, oferecendo suporte 24/7 aos usuários.</p>
            <p className="mt-4 w-1/2 text-3xl ml-20 leading-tight"><strong>Painel de Avisos:</strong> O painel centraliza informações importantes, como atualizações, prazos e notificações relevantes, garantindo que todos estejam informados em tempo hábil</p>
            <p className=" mt-4 w-1/2 text-3xl ml-20 leading-tight"><strong>Analize de Horarios de Pico:</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi soluta ipsa ut accusamus nemo optio, officiis, sit est esse quaerat fugit odit quibusdam quisquam omnis hic facere doloribus placeat praesentium!</p>
        </div>

        <h2 className="mt-8 text-5xl pl-20  pb-12">NOSSA VISÃO</h2>
        <div>

            <p className="w-1/2 text-3xl ml-20 leading-tight">Ser a plataforma líder em soluções de automação interativa e gestão inteligente de dados, melhorando a eficiência e a comunicação em ambientes corporativos e educacionais</p>

        </div>
        <h2 className="mt-8 text-5xl pl-20 pb-12">Nossa Missão</h2>
        <div>

            <p className="w-1/2 text-3xl ml-20 leading-tight">Proporcionar uma experiência fluida e personalizada através de soluções tecnológicas avançadas, promovendo a agilidade, a inovação e o acesso rápido à informação. Essa abordagem da Future Station visa transformar a maneira como as organizações se comunicam e gerenciam suas operações.</p>

        </div>
    
    </div>






</div>
<section>
    <div>
        <div>
            <div>
            <Image src="/Image/trem1.jpg" alt="linha_metro" width={500} height={300} />
                        </div>
        </div>
    </div>
</section>

  
<div className="skills-icons">
      <h1 className="text-4xl">MY SKILLS</h1>
      <div className="icon-container">
        <FontAwesomeIcon icon={faReact } className="text-orange-500 text-6xl hover:scale-110 transition-all" />
        <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-6xl hover:scale-110 transition-all" />
        <FontAwesomeIcon icon={faJs} className="text-yellow-500 text-6xl hover:scale-110 transition-all" />
        <FontAwesomeIcon icon={faDatabase} className="text-gray-600 text-6xl hover:scale-110 transition-all" />
        <FontAwesomeIcon icon={faJava} className="text-orange-600 text-6xl hover:scale-110 transition-all" />
        <FontAwesomeIcon icon={faPython} className="text-blue-500 text-6xl hover:scale-110 transition-all" />
      </div>
    </div>
<Formulario/>
<h1>PARCERIAS</h1>
<div>
<Link href="#">
Alura
<img src="Image_Logo/Logo_Alura.jfif" alt="" />

</Link>

<Link href="#">
Fiap
<img src="Image_Logo/Logo_Faip.jfif" alt="" />
</Link>

<Link  href="#">
CCR
<img src="Image_logo/Logo_CCR.jfif" alt="" />
</Link>
  
</div>
<section>
</section>

        </>
    )
}

export default Produto; 