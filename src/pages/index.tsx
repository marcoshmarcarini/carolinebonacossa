import Cabecalho from "@/components/Cabecalho"
import Icones from "@/components/Icones"
import Parte1 from "@/components/Parte-1"
import Parte2 from "@/components/Parte-2"
import Parte3 from "@/components/Parte-3"
import Sobre from "@/components/Sobre"
import Videos from "@/components/Videos"
import Image from "next/image"

export default function Home(){
  return(
    <div>
       <Cabecalho />
       <div className="mb-5">
          <Parte1 />
       </div>
       <div className="mb-5">
          <Parte2 />
       </div>
       <div className="mb-5">
          <Icones />
       </div>
       <div className="mb-5">
          <Parte3 />
       </div>
       <div className="mb-5">
          <Sobre />
       </div>
       {/* <div className="mb-5">
          <Videos />
       </div> */}
    </div>
  )
}