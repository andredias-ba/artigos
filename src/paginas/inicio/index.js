//import Banner from "componentes/Banner";
// com o uso do arquivo jsconfig.json podemos apagar o ../..
// import Banner from "componentes/Banner";
import styles from './Inicio.module.css';
import posts from 'json/posts.json'
import Post from "componentes/PostCard";

export default function Inicio(){
    return(
 //       <main>
 //           <Banner />
            
            <ul className="styles.posts">
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post props={post} />
                    </li>
                ))}
            </ul>
//        </main>
    )
}
