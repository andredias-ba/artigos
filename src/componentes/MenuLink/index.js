//import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({local, texto}){
    
    return(
        <NavLink 
            className={({isActive})=> `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `} 
            to={local}
            end
        >
            {texto}
        </NavLink>
    )
}



/*
versão usando useLocation
const localizacao = useLocation();

    return(
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === local ? styles.linkDestacado : ''}
            `} to={local}>
            {texto}
        </Link>
    )
*/