export default function NavBar() {
  return (
    <header className="header-page">
      <div className="container">
        <div className="logo">
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <div className="v-separator"></div>
          <a href="#">
            <img src="./images/Instagram_logo.svg" />
          </a>
          <button>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </button>
        </div>

        <div className="search">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className="options">
          <button>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </button>
          <button>
            <ion-icon name="compass-outline"></ion-icon>
          </button>
          <button>
            <ion-icon name="heart-outline"></ion-icon>
          </button>
          <button>
            <ion-icon name="person-outline"></ion-icon>
          </button>
        </div>
      </div>
    </header>
  );
}
