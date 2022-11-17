import Sugestao from "./Sugestao";

export default function Sugestoes() {
  const sugestoes = [
    {
      imgPerfilSugerido: "./images/badvibesmemes 1.png",
      altImgPerfilSugerido: "Perfil bad vibes meme",
      urlPerfilSugerido: "https://www.instagram.com/bad.vibes.memes/",
      perfilSugerido: "bad.vibes.memes",
    },
    {
      imgPerfilSugerido: "./images/chibirdart 1.png",
      altImgPerfilSugerido: "Perfil chibirdart",
      urlPerfilSugerido: "https://www.instagram.com/chibirdart/",
      perfilSugerido: "chibirdart",
    },
    {
      imgPerfilSugerido: "./images/razoesparaacreditar 1.png",
      altImgPerfilSugerido: "Perfil razoes para acreditar",
      urlPerfilSugerido: "https://www.instagram.com/razoesparaacreditar/",
      perfilSugerido: "razoesparaacreditar",
    },
    {
      imgPerfilSugerido: "./images/adorableanimals 1.png",
      altImgPerfilSugerido: "Perfil adorable animals",
      urlPerfilSugerido: "https://www.instagram.com/adorable_animals/",
      perfilSugerido: "adorable_animals",
    },
    {
      imgPerfilSugerido: "./images/smallcutecats 1.png",
      altImgPerfilSugerido: "Perfil small cute cats",
      urlPerfilSugerido: "https://www.instagram.com/smallcutecats/",
      perfilSugerido: "smallcutecats",
    },
  ];

  return (
    <section className="suggestions">
      <div className="text">
        <p>Sugestões para você</p>
        <a href="#">Ver tudo</a>
      </div>

      {sugestoes.map((sugestao, index) => {
        return (
          <Sugestao
            imgPerfilSugerido={sugestao.imgPerfilSugerido}
            altImgPerfilSugerido={sugestao.altImgPerfilSugerido}
            urlPerfilSugerido={sugestao.urlPerfilSugerido}
            perfilSugerido={sugestao.perfilSugerido}
            key={sugestao.perfilSugerido + index}
          />
        );
      })}

      <div className="text">
        <p>Sugestões para você</p>
        <a href="#">Ver tudo</a>
      </div>
    </section>
  );
}
