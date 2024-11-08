import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="min-h-lvh bg-slate-800  ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
