import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink';


export default function Menu(){
        
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink local='/' texto='Início'>
                    Início
                </MenuLink>
                <MenuLink local='/sobremim' texto='Sobre mim'>
                    Sobre Mim...
                </MenuLink>
            </nav>
        </header>
    )
}