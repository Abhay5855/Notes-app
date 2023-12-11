import { Outlet } from "react-router-dom";
import "./App.css";
import NavbarContainer from "./components/navbar/NavbarContainer";
import SidebarContainer from "./components/sidebar/SidebarContainer";

function App() {
  console.log(import.meta.env.VITE_BASE_URL);
  return (
    <div className="app__main">
      <div className="app__main__navbar">
        <NavbarContainer />
      </div>
      <div className="app__main__sidebar">
        <SidebarContainer />
      </div>
      <div className="app__main__notes">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
