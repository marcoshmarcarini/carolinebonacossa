import Image from "next/image";
import WhatsApp from "../WhatsApp";
import Link from "next/link";
export default function Cabecalho(){
    return(
        <div>
            <div className="h-16 w-full bg-black bg-opacity-50 mb-5">
                <div className="w-full h-full flex justify-center items-center">
                    <div
                        className="flex h-full items-center">
                        <div className="mx-4 text-white"><Image src={`https://www.carolinebonacossa.com.br/wp-content/uploads/2021/06/caroline-bonacossa-logo-branco.png`} width={150} height={80} alt={`Caroline Bonacosa`}/></div>
                        <div className=" h-8 w-px bg-gray-300"></div>
                    </div>
                    <div className="flex h-full items-center  hover:bg-black hover:bg-opacity-50 hover:ease-in duration-300">
                        <div className="mx-4 text-white">
                            <Link 
                                href={`https://www.carolinebonacossa.com.br/`}
                                rel="Nosso site"
                            >
                                Nosso Site
                            </Link>
                        </div>
                        <div className=" h-8 w-px bg-gray-300"></div>
                    </div>
                    <div className="flex h-full items-center  hover:bg-black hover:bg-opacity-50 hover:ease-in duration-300">
                        <div className="mx-4 text-white">
                            <Link 
                                href={`https://www.instagram.com/caroline.bonacossa`}
                                rel="Nosso site"
                            >
                                Instagram
                            </Link>
                        </div>
                        <div className=" h-8 w-px bg-gray-300"></div>
                    </div>
                    <div className="flex h-full items-center  hover:bg-black hover:bg-opacity-50 hover:ease-in duration-300">
                        <div className="mx-4 text-white">
                            <Link 
                                href={`https://www.facebook.com/DraCarolineBonacossa`}
                                rel="Nosso site"
                            >
                                Facebook
                            </Link>
                        </div>
                        <div className=" h-8 w-px bg-gray-300"></div>
                    </div>
                    <div className="flex h-full  items-center hover:bg-black hover:bg-opacity-50">
                        <div className="mx-4 text-white">
                            <Link 
                                href={`https://www.tiktok.com/@terror.do.inss`}
                                rel="Nosso site"
                            >
                                TikTok
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}