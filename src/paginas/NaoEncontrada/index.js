import BotaoPrincipal from "componentes/BotaoPrincipal"
import styles from "./NaoEncontrada.module.css"
import erro404 from 'assets/erro_404.png'
import { useNavigate } from "react-router-dom"

export default function NaoEncontrada(){
    const navegar = useNavigate();

return (
    <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>
                404
            </span>
            <h1 className={styles.titulo}> Página não encontrada! </h1>
            <p className={styles.paragrafo}>
                Não era isso que você esvata procurando!!
            </p>

            <p className={styles.paragrafo}>
                Volte para a página inicial e tente de novo!!
            </p>

            <div 
                className={styles.botaoContainer}
                onClick={() => navegar("/")}
            >
                <BotaoPrincipal tamanho="lg"> 
                    Voltar 
                </BotaoPrincipal>
                
            </div>

            <img 
                className={styles.imagemCachorro}
                src={erro404}
                alt="Hommer"
            />
        </div>
        <div className={styles.espacoEmBranco}>  </div>
    </>
)
}