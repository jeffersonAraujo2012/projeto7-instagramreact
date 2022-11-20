import { useState } from "react";

export default function Usuario() {
  const [nomeUsuario, setNomeUsuario] = useState("Catana");
  const [imgUsuario, setImgUsuario] = useState("./images/catanacomics 1.png");

  function handlerEditarNomeUsuario() {
    const novoNome = prompt("Qual novo nome de usuário?");
    if (novoNome) setNomeUsuario(novoNome);
    else alert("Alteração não realizada! O nome não pode ser vazio.");
  }

  function handlerEditarImgUsuario() {
    const novaImg = prompt("Qual link da nova imagem?");
    if (novaImg) setImgUsuario(novaImg);
    else alert("Alteração não realizada! O link não pode ser vazio.");
  }

  return (
    <div className="perfil perfil--my">
      <a href="#">
        <img
          src={imgUsuario}
          alt="Minha imagem de perfil"
          onClick={handlerEditarImgUsuario}
        />
      </a>
      <div>
        <a href="#">catanacomics</a>
        <p>
          {nomeUsuario}&nbsp;
          <ion-icon
            onClick={handlerEditarNomeUsuario}
            name="pencil-outline"
          ></ion-icon>
        </p>
      </div>
    </div>
  );
}
