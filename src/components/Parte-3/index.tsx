import WhatsApp from "../WhatsApp";
import styles from "./Parte3.module.css";

export default function Parte3(){
    return(
        <div className={styles.cardTextos}>
            <p>
                Se você está cansado de ser negado pelo INSS, nós temos a solução 
                para você. Com anos de experiência e conhecimento em direito 
                previdenciário, podemos ajudá-lo a conseguir o que é seu por direito. 
                Não desista, nós estamos aqui para lutar por você e garantir que 
                você receba o que merece. Entre em contato conosco agora e deixe-nos 
                ajudá-lo a alcançar a vitória que você merece!
            </p>
            <div className={styles.linkArea}>
                <WhatsApp texto="Garanta seus direitos"/>
            </div>
        </div>
    )
}