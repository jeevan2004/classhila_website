import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../AuthContextAPI";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { doLogout, profileData } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    doLogout();
    navigate("/");
  };

  return (
    <div
      className="relative header_uswer_icon inline-block text-left user_menu"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2 px-3 py-2">
        <FaUserCircle size={30} className="text-purple-600" />
        {/* <span className="hidden md:inline font-semibold">VS</span> */}
      </button>

      {isOpen && (
        <div className="menu_section absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md border z-50">
          <div className="p-4 border-b">
            <h4 className="font-bold text-sm">{profileData?.name}</h4>
            <p className="text-xs text-gray-500">{profileData?.email}</p>
          </div>
          <ul className="text-sm text-gray-700 divide-y user_menu_list">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to={"/my-course"}>My learning</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Link to={"/support"}>Support</Link>
            </li>

            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLogout()}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
