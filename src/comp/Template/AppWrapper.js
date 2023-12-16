import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Nav from "./Nav";
import '../../style/app.css';

function AppWrapper({ role = '', list = [] }) {
  return (
    <div className="app-wrapper h-screen overflow-hidden">
      <Nav role={role} />
      <Sidebar list={list} role={role} />
      <Outlet />
    </div>
  )
}

export default AppWrapper