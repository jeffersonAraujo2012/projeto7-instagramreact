import NavBar from "./components/NavBar";
import Corpo from "./components/Corpo";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Corpo>
        <Stories />
        <Posts />
      </Corpo>
      <SideBar />
    </>
  );
}
