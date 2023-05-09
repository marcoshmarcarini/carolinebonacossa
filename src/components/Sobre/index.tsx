import Image from "next/image"
import styles from "./Sobre.module.css"
import WhatsApp from "../WhatsApp"

export default function Sobre(){
    return(
        <div className={styles.cardTextos}>
            <div className={styles.sobreTextos}>
                <p>
                    A história da CAROLINE BONACOSSA ADVOCACIA é uma história de 
                    superação e crescimento. Começando do zero, Dra. Caroline Bonacossa, 
                    fundadora do escritório, prestava atendimento a domicílio com apenas 
                    um notebook antigo e uma impressora. Com o passar do tempo, a demanda 
                    cresceu e o escritório hoje conta com uma equipe capacitada de 13 
                    colaboradores e 03 filiais. A missão da equipe é oferecer um atendimento 
                    personalizado e entregar soluções jurídicas eficientes na busca pelos 
                    direitos dos clientes junto ao INSS. Conte conosco!
                </p>
                <p>
                    Garanta já os seus direitos. Entre em contato conosco!
                </p>
                <WhatsApp texto="Quero garantir minha aposentadoria!" />
            </div>
            
            <Image 
                src={`https://www.carolinebonacossa.com.br/wp-content/uploads/2021/06/dra-carolina-bonacossa-1.jpg`}
                width={300} 
                height={600} 
                alt={`Caroline Bonacosa`} 
            />
        </div>
    )
}