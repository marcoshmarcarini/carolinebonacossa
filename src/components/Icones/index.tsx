import Image from "next/image";
import styles from "./Icones.module.css";

export default function Icones(){
    return(
        <div className={styles.iconesContent}>
           <Image 
                src={`https://www.carolinebonacossa.com.br/wp-content/uploads/2021/06/1.png`} 
                width={100}
                height={100}
                alt={`Iniciar Aposentadoria`}
                className={styles.imgCard}
            />
            <Image 
                src={`https://www.carolinebonacossa.com.br/wp-content/uploads/2021/06/2.png`} 
                width={100}
                height={100}
                alt={`Planejar Aposentadoria`}
                className={styles.imgCard}
            />
            <Image 
                src={`https://www.carolinebonacossa.com.br/wp-content/uploads/2021/06/3.png`} 
                width={100}
                height={100}
                alt={`Calcular Aposentadoria`}
                className={styles.imgCard}
            />
            <Image 
                src={`https://www.carolinebonacossa.com.br/wp-content/uploads/2021/06/4.png`} 
                width={100}
                height={100}
                alt={`Revisar Aposentadoria`}
                className={styles.imgCard}
            />
        </div>
    )
}