import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiFolderMusicFill } from "react-icons/ri";

const AdminSidebar = () => {
  return (
    <aside className="basis-[17%] min-h-[calc(100vh-70px)] bg-gray-700">
      <nav className="w-full">
        <ul className="w-full p-6">
          <li>
            <NavLink
              to="create-album"
              className={({ isActive }) =>
                `${isActive ? "bg-orange-600" : ""} 
                px-4 py-2 flex items-center gap-2 hover:bg-orange-600 rounded-md cursor-pointer`
              }
            >
              <span className="text-lg">
                <RiFolderMusicFill />
              </span>
              <span className="font-semibold">Create Album</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
