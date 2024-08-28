import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import BotaoPrincipal from 'componentes/BotaoPrincipal';

export default function PostCard({props}){
    return (
        <Link to={`/posts/${props.id}`}>
            <div className={styles.post}>
                <img 
                    className={styles.capa}
                    src={`/posts/${props.id}/capa.png`}
                    alt="Imagem de Capa do Post"
                />
                <h2 className={styles.titulo}>
                    {props.titulo}
                </h2>

                <BotaoPrincipal> Ler  </BotaoPrincipal>
            </div>
        </Link>
    )

}