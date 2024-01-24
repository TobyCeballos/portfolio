import {
  FaHouse,
  FaUser,
  FaFolderClosed,
} from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";



const NavBar = () => {
  const NavButtonStyle =
    "nav-btn border-4 border-orange-300 hover:bg-orange-300 z-10  text-white rounded-full p-4 text-2xl hover:scale-125 hover:z-10 hover:-translate-x-2 hover:backdrop-blur transition-all duration-300";

  return (
    <nav className="fixed bottom-6 lg:bottom-auto right-1/2 lg:top-1/2 lg:-translate-y-1/2 transform translate-x-1/2 flex flex-row lg:flex-col gap-2 text-orange-400 lg:right-10 z-50">
      <a href="#Home" alt="Home" className={NavButtonStyle}>
        <FaHouse className="nav-ico text-orange-300" />
      </a>
      <a href="#AboutMe" className={NavButtonStyle}>
        <FaUser className="nav-ico text-orange-300" />
      </a>
      <a href="#Projects" className={NavButtonStyle}>
        <FaFolderClosed className="nav-ico text-orange-300" />
      </a>
      <a href="#Contact" className={NavButtonStyle}>
        <FaUserFriends className="nav-ico text-orange-300" />
      </a>
    </nav>
  );
};

export default NavBar;
