import Link from "next/link";
import styles from "./WhatsApp.module.css";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

type TextoObjType = {
    texto: string;
};

export default function WhatsApp(props: TextoObjType){
    const tel = '5528999722500'
    const text = 'Olá!%20Diga%20como%20podemos%20ajudar$20você.%20'
    return(
        <div className={styles.botaoWhats}>
            <Link href={`https://wa.me/${tel}?text=${text}`} rel="Entre em contato" target="_blank">
                {props.texto}
            </Link>
        </div>
    )
}