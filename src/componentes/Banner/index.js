import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Portifólio Pessoal
                </h1>

                <p className={styles.paragrafo}>
                    Texto aleatório para compor o banner da tela sobre alguma coisa que eu não 
                    sei o que vai ser apresentada mas ta aqui pra encher linguiça enquanto
                    treino esse troço aqui.
                </p>
            </div>
            <div>
                <img className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Toca Raul!!!"
                 />
            </div>
        </div>
    )
}