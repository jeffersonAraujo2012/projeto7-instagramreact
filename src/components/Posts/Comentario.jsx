import { useState } from "react";

export default function Comentario(props) {
  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(props.info.curtidas);

  function handlerBtnLike() {
    setLiked(!liked);
    if (liked === true) setNumLikes(numLikes - 1);
    else setNumLikes(numLikes + 1);
  }

  return (
    <div className="post__comments">
      <div className="comment">
        <img src={props.imgAutor} alt={"perfil " + props.autor} />

        <div>
          <p className="comment__content">
            <strong className="author">{props.autor} </strong> {props.conteudo}
          </p>

          <div className="comment__info">
            <span className="info-time">{props.info.tempo}</span>
            <span className="likes">{numLikes} curtidas</span>
            <button className="answer">Responder</button>
          </div>
        </div>

        <button className="comment__like" onClick={handlerBtnLike}>
          {liked ? (
            <ion-icon name="heart"></ion-icon>
          ) : (
            <ion-icon name="heart-outline"></ion-icon>
          )}
        </button>
      </div>
    </div>
  );
}
