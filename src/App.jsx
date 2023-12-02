import "./App.css";
import NavbarContainer from "./components/navbar/NavbarContainer";
import NotesContainer from "./components/notes/NotesContainer";
import SidebarContainer from "./components/sidebar/SidebarContainer";

function App() {
  return (
    <div>
      {/* Navbar */}
      <NavbarContainer />
      <div className="app__container">
        <div>
          <SidebarContainer />
        </div>
        <div>
          <NotesContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
