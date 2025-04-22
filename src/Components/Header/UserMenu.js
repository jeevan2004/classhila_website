import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative header_uswer_icon inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-full">
        <FaUserCircle size={30} className="text-purple-600" />
        <span className="hidden md:inline font-semibold">VS</span>
      </button>

      {isOpen && (
        <div className="menu_section absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md border z-50">
          <div className="p-4 border-b">
            <h4 className="font-bold text-sm">Vishnu Kumar Sharma</h4>
            <p className="text-xs text-gray-500">vishnusharmabora93@gmail.com</p>
          </div>
          <ul className="text-sm text-gray-700 divide-y">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My learning</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My cart</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Wishlist</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Teach on Udemy</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Messages</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Subscriptions</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
