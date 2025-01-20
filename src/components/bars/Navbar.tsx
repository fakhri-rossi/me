import { IoMdHome, IoMdPerson } from "react-icons/io";
import { NavLink, useLocation } from "react-router";
import MyText from "../MyText";
import { BiCode } from "react-icons/bi";

const navMenus = [
  {
    icon: <IoMdHome />,
    label: "Home",
    to: "/",
  },
  {
    icon: <IoMdPerson />,
    label: "About",
    to: "/about",
  },
  {
    icon: <BiCode />,
    label: "Projects",
    to: "/projects",
  },
];

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname.split("/");
  const pathName = path[1];

  return (
    <nav className="flex gap-4 justify-center items-center sticky top-0 z-10 bg-white/85 backdrop-blur-md">
      {navMenus.map((item, i) => {
        const isActive =
          item.label.toLowerCase() === pathName ||
          (pathName === "" && item.label === "Home");

        return (
          <NavLink
            to={item.to}
            end
            key={i}
            className={`px-3 py-2 flex gap-2 items-center justify-center hover:text-black/50 h-14 ${
              isActive && "border-b-2 border-solid border-black"
            }`}>
            <span className="text-2xl">{item.icon}</span>

            {isActive && (
              <MyText size="h4" className="font-medium">
                {item.label}
              </MyText>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
