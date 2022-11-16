export default function Story(props) {
  return (
    <div className="storie-info">
      <div>
        <img src={props.imageAutor} alt={`Perfil ${props.autor}`} />
      </div>
      <p>{props.autor}</p>
    </div>
  );
}
