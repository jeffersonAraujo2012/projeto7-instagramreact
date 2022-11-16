import Story from "./Story";

export default function Stories() {
  const stories = [
    {
      imageAutor: "./images/9gag 1.svg",
      autor: "9gag",
    },
    {
      imageAutor: "./images/meowed 1.svg",
      autor: "meowed",
    },
    {
      imageAutor: "./images/barked 1.svg",
      autor: "barked",
    },
    {
      imageAutor: "./images/nathanwpylestrangeplanet 1.svg",
      autor: "nathanwpylestrangeplanet",
    },
    {
      imageAutor: "./images/wawawiwacomicsa 1.svg",
      autor: "wawawiwacomicsa",
    },
    {
      imageAutor: "./images/respondeai 1.svg",
      autor: "respondeaí",
    },
    {
      imageAutor: "./images/filomoderna 1.svg",
      autor: "filomoderna",
    },
    {
      imageAutor: "./images/memeriagourmet 1.svg",
      autor: "memeriagoumert",
    },
  ];
  return (
    <section className="stories-area">
      {stories.map((story) => {
        return (
          <Story
            imageAutor={story.imageAutor}
            autor={story.autor}
            key={"story-" + story.autor}
          />
        );
      })}
      <button>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    </section>
  );
}
