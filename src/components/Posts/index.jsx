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
      comentarios: [
        {
          imgAutor: "./images/gameplayrj.jpg",
          autor: "gameplayrj",
          conteudo: "Foi com essa linguagem que aprendi a programar",
          info: {
            tempo: "47 dias",
            curtidas: 2589,
          },
        },
      ],
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
      comentarios: [
        {
          imgAutor: "./images/universe.jpg",
          autor: "universe",
          conteudo: `Uma das simulações
          mais fidedignas de um buraco negro foi desenvolvida para um
          filme, Interestelar, hoje é utilizada por cientistas para
          estudos que ajudarão a compreender essas megas estruturas.`,
          info: {
            tempo: "3 dias",
            curtidas: 3245,
          },
        },
        {
          imgAutor:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAeFBMVEUAAAD///8QEBAhISGkpKS6urq1tbWysrJUVFQ+Pj5lZWXKysre3t4wMDCWlpacnJyEhITm5uZDQ0P5+fnz8/N/f38tLS1xcXHQ0NCNjY1iYmLa2tqpqam/v78TExPGxsbq6upNTU03NzceHh5JSUl2dnaRkZEmJiaA8q30AAADyElEQVR4nO3X2XqyOgCFYWjFARURUOtA66+t3v8dbjIICQRF3CfLZ31HVSDwShjqXT/ePO/Te/coxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxI9C/CjEj0L8KMSPQvwoxO9thMlunMxdGnjhOYyGo0G0+te2ArJwEgfLdH8IP+6uhSrcDfa+v1/8Pl4TUZgsCp0fhN3WhhOGQVrwhuPOG2AJd3mh86cdz54KSLg+iLOXRU9u9v8KJ90nz7NtxLXnzzZPb+gQhkvfbnY77q/aAj+d2qQsrY21q4/l5/rePq8vEOdHWfRev41xInH6/K/Wh95TwrFj1zu1aOpYFBubFr/A9OFYvlq0bhV63l59LM/XQH78Snr4XMKhGGxgddhWwixalAXVAYuiutgTN4ZsURtMnYjPYNjoYI1UnG/DN+tz/txCcVQtV7MQzswvfoovqnn6LQ/lZCwX03rZ57CSTI519LyL/CN9/vq79ZowsITezpxqtw1ahJ9zo3VzufjxAi9U0kNzeefcwnwVV/1NzAO2hEtb6I2quVVu0CLMzQvw6FghzhJ9a1ueHIs71xRemneA47o64HQ/K5M/sPXeexTfrMqPd4RDcwfudbZq4aInTed4WjjumFnrEn9kbXuV363Noe4I07+VLHZdZeeZ2vX8vHIs7Z7riZ9sI6OtOFOT8oDt9nrv3/qCOl+sSfdIeOfA9FPxx/uz5v3zdXinERebulU3rsNbpxo80N/3F+pJvJV3HD974UrsIDw+FE4a51ZPu95C/So09j70e1TcuuqjmsLd2C4Rwt/ygF3CTbwykkd0Ljc4jkO7UyW8TsyS203rlKpL8Co+qPFqL0svCTPH7US/uLTOUit5C1RnbuEaqxLW048l/a531OOt5Q3aT3u+1DSFzSknLgdZx1cUObGG1Z92A7VS0CoM1QfjpxxaW74sLObFYWQV3a7zKA+CDrv5KFYLftQj4zey30ovt7FisZJdLjc550O5V3PEjfwq7/XYAPoPuGcU4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4kchfhTiRyF+FOJHIX4U4vf2wv8AX9ooUbWfkSAAAAAASUVORK5CYII=",
          autor: "spacex",
          conteudo: `Quem sabe um dia?`,
          info: {
            tempo: "2 dias",
            curtidas: 1789,
          },
        },
      ],
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
      comentarios: [
        {
          imgAutor:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/2018_Animal_Planet_logo.svg/800px-2018_Animal_Planet_logo.svg.png",
          autor: "animalplanet",
          conteudo: `Uma das aves mais
          belas e raras da natureza, ameaçada de extinsão devido a caça
          e tráfico ilegal. Vive exclusivamente no Brasil na região da
          caatinga baiana. Ajude a preservar!`,
          info: {
            tempo: "5 dias",
            curtidas: 1478,
          },
        },
        {
          imgAutor: "./images/greenpeacebrasil.jpg",
          autor: "greenpeacebrasil",
          conteudo: `Nós do
          Greenpeace Brasil apoiamos esta causa.`,
          info: {
            tempo: "5 dias",
            curtidas: 980,
          },
        },
        {
          imgAutor: "./images/razoesparaacreditar 1.png",
          autor: "razoesparaacreditar",
          conteudo: `A natureza
          é realmente linda, não é?`,
          info: {
            tempo: "2 dias",
            curtidas: 127,
          },
        },
      ],
    },
  ];
  return (
    <section className="post-area">
      {posts.map((post, index) => {
        return (
          <Post
            imageAuthor={post.imageAuthor}
            author={post.author}
            imagePost={post.imagePost}
            altImagePost={post.altImagePost}
            likedBy={post.likedBy}
            comentarios={post.comentarios}
            key={post.author + index}
          />
        );
      })}
    </section>
  );
}
