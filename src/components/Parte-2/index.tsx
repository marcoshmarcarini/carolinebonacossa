import WhatsApp from "../WhatsApp"
import styles from "./Parte2.module.css"

export default function Parte2(){
    return(
        <div className={styles.container}>
            <div className={styles.cardTextos}>
                <p>
                    Se você está sem pagar o INSS, saiba que ainda é possível ter 
                    direito a se aposentar. Não deixe de buscar seus direitos e 
                    garantir uma aposentadoria tranquila e justa. Com o auxílio de 
                    um advogado especializado em direito previdenciário, é possível 
                    encontrar alternativas para regularizar sua situação e garantir
                    um futuro mais tranquilo. Não perca mais tempo e agende uma 
                    consulta hoje mesmo para saber como podemos te ajudar a alcançar 
                    sua aposentadoria.
                </p>
                <div className={styles.linkArea}>
                    <WhatsApp  texto="Garanta já a sua aposentadoria!"/>
                </div>
            </div>
        </div>
    )
}