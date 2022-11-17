export default function Sugestao(props) {
  return (
    <div className="suggestion">
      <div className="perfil perfil--other">
        <a href="#">
          <img
            src={props.imgPerfilSugerido}
            alt={props.altImgPerfilSugerido}
          />
        </a>
        <div>
          <a href={props.urlPerfilSugerido}>{props.perfilSugerido}</a>
          <p>Segue você</p>
        </div>
      </div>

      <button className="follow">Seguir</button>
    </div>
  );
}
