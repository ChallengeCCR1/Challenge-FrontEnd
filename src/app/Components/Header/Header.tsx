import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-[#42807D] w-full h-[235px]">
            <div className="flex flex-col items-center text-center p-6">
                <h1 className="text-[4.8rem] text-black">
                    FUTURE <span className="text-white">STATION</span>
                </h1>

                {/* Navegação */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/">
                                <span className="text-white text-[1.2rem] font-bold transition duration-300 hover:text-[#00ff5e]">
                                    HOME
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Projeto">
                                <span className="text-white text-[1.2rem] font-bold transition duration-300 hover:text-[#00ff5e]">
                                    PROJETO
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-white text-[1.2rem] font-bold transition duration-300 hover:text-[#00ff5e]">
                                    EQUIPE
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Ccr">
                                <span className="text-white text-[1.2rem] font-bold transition duration-300 hover:text-[#00ff5e]">
                                    CCR
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
