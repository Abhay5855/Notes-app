import './App.css'
import Editor from "./components/editor/Editor";
import NavbarContainer from "./components/navbar/NavbarContainer";
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
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default App
