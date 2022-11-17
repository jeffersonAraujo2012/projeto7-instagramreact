export default function Post(props) {
  return (
    <article className="post">
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
        <img src={props.imagePost} alt={props.altImagePost} />
      </div>

      <div className="post__actions">
        <div className="main">
          <button>
            <ion-icon name="heart-outline"></ion-icon>
          </button>
          <button>
            <ion-icon name="chatbubble-outline"></ion-icon>
          </button>
          <button>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </button>
        </div>
        <div className="other">
          <button>
            <ion-icon name="bookmark-outline"></ion-icon>
          </button>
        </div>
      </div>

      <div className="post__info">
        <img src={props.likedBy.image} alt={"Perfil " + props.likedBy.perfil} />
        <p>
          Curtido por <a href="#">{props.likedBy.perfil}</a> e&nbsp;
          <button>
            outras {props.likedBy.numLikes.toLocaleString("pt-br")} pessoas
          </button>
        </p>
      </div>
    </article>
  );
}
