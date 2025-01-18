import { Outlet } from "react-router";
import Navbar from "../components/bars/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <div>
      <Navbar />

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
