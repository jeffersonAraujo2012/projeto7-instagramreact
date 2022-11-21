import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function SideBar() {
  return (
    <aside>
      <Usuario />
      <Sugestoes />
      <footer>
        <nav className="nav-footer">
          <a href="#">Sobre</a> • <a href="#">Ajuda</a> •
          <a href="#">Imprensa</a> • <a href="#">API</a> •
          <a href="#">Carreiras</a> • <a href="#">Privacidade</a> •
          <a href="#">Termos</a> • <a href="#">Localizações</a> •
          <a href="#">Contas mais relevantes</a> • <a href="#">Hashtags</a> •
          <a href="#">Idioma</a>
        </nav>

        <p className="copy">© 2021 INSTAGRAM DO FACEBOOK</p>
      </footer>
    </aside>
  );
}
