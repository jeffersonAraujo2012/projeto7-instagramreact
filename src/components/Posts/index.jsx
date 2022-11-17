import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      imageAuthor: "./images/logo-javascript.svg",
      author: "javascript",
      imagePost: "./images/post-javascript.jpeg",
      altImagePost: "Linhas de código em javascript",
      likedBy: {
        image: "./images/gameplayrj.jpg",
        perfil: "Universe",
        numLikes: 245279,
      },
    },
    {
      imageAuthor: "./images/user-universe.jpg",
      author: "universe",
      imagePost: "./images/universe.jpg",
      altImagePost: "Imagem do cosmos",
      likedBy: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/2018_Animal_Planet_logo.svg/800px-2018_Animal_Planet_logo.svg.png",
        perfil: "animalplanet",
        numLikes: 1345956,
      },
    },
    {
      imageAuthor:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/2018_Animal_Planet_logo.svg/800px-2018_Animal_Planet_logo.svg.png",
      author: "animalplanet",
      imagePost:
        "https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2020/01/arara-azul-carateristicas-e-comportamento-5-1024x768.jpg",
      altImagePost: "Três araras azuis em um galho",
      likedBy: {
        image: "./images/greenpeacebrasil.jpg",
        perfil: "greenpeacebrasil",
        numLikes: 187354,
      },
    },
  ];
  return (
    <section className="post-area">
      {posts.map((post,index) => {
        return (
          <Post
            imageAuthor={post.imageAuthor}
            author={post.author}
            imagePost={post.imagePost}
            altImagePost={post.altImagePost}
            likedBy={post.likedBy}
            key={post.author+index}
          />
        );
      })}
    </section>
  );
}
