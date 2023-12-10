import { Outlet } from "react-router-dom";
import "./App.css";
import NavbarContainer from "./components/navbar/NavbarContainer";
import NotesContainer from "./components/notes/display_notes/NotesContainer";
import SidebarContainer from "./components/sidebar/SidebarContainer";

function App() {
  return (
    <div className="app__main">
      <div className="app__main__navbar">
        <NavbarContainer />
      </div>
      <div className="app__main__sidebar">
        <SidebarContainer />
      </div>
      {/* <div className="app__main__notes">
        <NotesContainer />
      </div> */}
      <div className="app__main__notes">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
