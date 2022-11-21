import { useState } from "react";
import Comentario from "./Comentario";

export default function Post(props) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const [numLikes, setNumLikes] = useState(props.likedBy.numLikes);
  const [comentarios, setComentarios] = useState(props.comentarios);

  function handlerDoubleClickLike() {
    if (like === false) setNumLikes(numLikes + 1);
    setLike(true);
  }

  function handlerBtnLike() {
    setLike(!like);
    if (like === true) setNumLikes(numLikes - 1);
    else setNumLikes(numLikes + 1);
  }

  function handlerToggleSave() {
    console.log("teste");
    setSaved(!saved);
  }

  function handlerEnviarComentario(e) {
    e.preventDefault();
    const inputComentario = e.target.querySelector("input");
    const novoComentario = {
      imgAutor: "./images/catanacomics 1.png",
      autor: "catanacomics",
      conteudo: inputComentario.value,
      info: {
        tempo: "Hoje",
        curtidas: 0,
      },
    };
    setComentarios([...comentarios, novoComentario]);
    inputComentario.value = "";
  }

  return (
    <article className="post" data-test="post">
      <header className="post__header">
        <div className="author">
          <img src={props.imageAuthor} alt={"Perfil " + props.author} />
          <h2>{props.author}</h2>
        </div>
        <button>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </button>
      </header>

      <div className="post__content">
        <img
          src={props.imagePost}
          alt={props.altImagePost}
          onDoubleClick={handlerDoubleClickLike}
          data-test="post-image"
        />
      </div>

      <div className="post__actions">
        <div className="main">
          <button onClick={handlerBtnLike} data-test="like-post">
            {like ? (
              <ion-icon name="heart"></ion-icon>
            ) : (
              <ion-icon name="heart-outline"></ion-icon>
            )}
          </button>
          <button>
            <ion-icon name="chatbubble-outline"></ion-icon>
          </button>
          <button>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </button>
        </div>
        <div className="other">
          <button onClick={handlerToggleSave} data-test="save-post">
            {saved ? (
              <ion-icon name="bookmark"></ion-icon>
            ) : (
              <ion-icon name="bookmark-outline"></ion-icon>
            )}
          </button>
        </div>
      </div>

      <div className="post__info">
        <img src={props.likedBy.image} alt={"Perfil " + props.likedBy.perfil} />
        <p>
          Curtido por <a href="#">{props.likedBy.perfil}</a> e&nbsp;
          <button>
            outras{" "}
            <span data-test="likes-number">
              {numLikes.toLocaleString("pt-br")}
            </span>{" "}
            pessoas
          </button>
        </p>
      </div>

      {comentarios.map((comentario, index) => {
        return (
          <Comentario
            imgAutor={comentario.imgAutor}
            autor={comentario.autor}
            conteudo={comentario.conteudo}
            info={comentario.info}
            key={comentario.autor + index}
          />
        );
      })}

      <form className="post__send-comment" onSubmit={handlerEnviarComentario}>
        <input type="text" placeholder="Adicione um comentário..." required />
        <button type="submit">Publicar</button>
      </form>
    </article>
  );
}
