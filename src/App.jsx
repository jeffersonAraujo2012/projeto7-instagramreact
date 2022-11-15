import NavBar from "./components/NavBar";
import Corpo from "./components/Corpo";
import Stories from "./components/Stories";

export default function App() {
  return (
    <>
      <NavBar />
      <Corpo>
        <Stories />
      </Corpo>
    </>
  );
}
