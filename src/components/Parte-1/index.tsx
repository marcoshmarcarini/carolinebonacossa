import WhatsApp from "../WhatsApp";
import styles from "./Parte1.module.css";
import Image from "next/image";



export default function Parte1(){
    const texto = 'Descubra como'
    
    return(
        <div className={styles.container}>
            <div className={styles.cardTextos}>
                <div className={styles.imagemParte1}>
                    <Image 
                        src={`https://www.carolinebonacossa.com.br/wp-content/uploads/2021/06/caroline-bonacossa-advocacia.jpg`} 
                        width={300}
                        height={600}
                        alt='Image'
                        className={styles.imgpt1}
                    />
                </div>
                <div className={styles.parte1Textos}>
                    <p>
                        Doenças podem ser devastadoras para a saúde e para o trabalho. 
                        Infelizmente, muitos trabalhadores não sabem que podem ter direito 
                        a benefícios previdenciários quando enfrentam problemas de saúde 
                        que os impedem de trabalhar. Se você está sofrendo de alguma doença 
                        que está afetando sua capacidade de trabalhar, saiba que você pode 
                        ter direito a auxílio-doença ou aposentadoria por invalidez.
                    </p>
                    <p>
                        O auxílio-doença é um benefício concedido pelo INSS para trabalhadores 
                        que estão temporariamente incapacitados de trabalhar devido a uma doença 
                        ou acidente. Já a aposentadoria por invalidez é um benefício concedido 
                        quando a doença ou acidente resulta em incapacidade permanente para o 
                        trabalho.
                    </p>
                    <p>
                        Nós estamos aqui para ajudá-lo a obter o benefício que você tem direito. 
                        Com nossa experiência em direito previdenciário, podemos avaliar seu caso 
                        e orientá-lo sobre os procedimentos necessários para obter o auxílio-doença 
                        ou aposentadoria por invalidez.
                    </p>
                    <p>
                        Não deixe sua saúde e seus direitos de lado. Entre em contato conosco 
                        e agende uma consulta para saber como podemos ajudá-lo a obter o benefício 
                        que você merece.
                    </p>
                    <div className={styles.linkArea}>
                        <WhatsApp texto={texto}/>
                    </div>
                </div>
            </div>
        </div>
    )
}