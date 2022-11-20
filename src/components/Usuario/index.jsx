import { useState } from "react";

export default function Usuario() {
  const [nomeUsuario, setNomeUsuario] = useState("Catana");

  function handlingEditarNomeUsuario() {
    const novoNome = prompt("Qual novo nome de usuário?");
    if (novoNome) setNomeUsuario(novoNome);
    else alert("Alteração não realizada! O nome não pode ser vazio.");
  }

  return (
    <div className="perfil perfil--my">
      <a href="#">
        <img src="./images/catanacomics 1.png" alt="Minha imagem de perfil" />
      </a>
      <div>
        <a href="#">catanacomics</a>
        <p>
          {nomeUsuario}&nbsp;
          <ion-icon
            onClick={handlingEditarNomeUsuario}
            name="pencil-outline"
          ></ion-icon>
        </p>
      </div>
    </div>
  );
}
