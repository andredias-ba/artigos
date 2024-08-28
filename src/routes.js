import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

/*
console.log(window.location)

const pagina = window.location.pathname === '/' 
  ? <Inicio  />
  : <SobreMim />
*/



function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
      
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>  {/* <Route path="/" element={<Inicio />} /> */}
          <Route index element={<Inicio />} />  {/* <Route path="/sobremim" element={<SobreMim />} /> */}
          <Route path="sobremim" element={<SobreMim />} />  {/* como é uma rota aninhada pode ignorar o / porque ele */}
          
        </Route>
          {/* 
          Na rota "/", a estrutura a ser renderizada é:
          <PaginaPadrao>
            <Inicio />
          </PaginaPadrao

          Na rota "/sobremim", a estrutura a ser renderizada é:
          <PaginaPadrao>
            <SobreMim />
          </PaginaPadrao>
          */}
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} 
        />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
