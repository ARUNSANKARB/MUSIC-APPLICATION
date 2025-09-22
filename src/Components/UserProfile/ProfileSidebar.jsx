import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAccountBox } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const ProfileSidebar = () => {
    return (
        <aside className="basis-[17%] bg-gray-900 h-[calc(100vh-70px)] text-white">
            <nav className='w-full'>
                <ul className='w-full p-5 flex flex-col'>
                    <li >
                        <NavLink to={"/user/profile"}  className={({ isActive }) => 
                                `flex items-center gap-2 py-2 px-4 rounded-md font-semibold cursor-pointer mb-4 
                                ${isActive ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"}`
                            } 
                            end>
                        <span className='text-xl'><MdAccountBox /></span>
                        <span>My Account</span>
                    </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/user/profile/add-profile"}  className={({ isActive }) => 
                                `flex items-center gap-2 py-2 px-4 rounded-md font-semibold cursor-pointer mb-4 
                                ${isActive ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"}`
                            } 
                            end>
                        <span className='text-xl'><FaUserPlus /></span>
                        <span>Add Profile</span>
                    </NavLink>
                    </li>
                    <li><NavLink to={"/user/profile/upload-profile-photo"}  className={({ isActive }) => 
                                `flex items-center gap-2 py-2 px-4 rounded-md font-semibold cursor-pointer mb-4 
                                ${isActive ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"}`
                            } 
                            end>
                        <span className='text-xl'><MdOutlineAddPhotoAlternate /></span>
                        <span>Upload Profile Photo</span>
                    </NavLink>
                    </li>
                    <li><NavLink to={"/user/profile/change-password"} className={({ isActive }) => 
                                `flex items-center gap-2 py-2 px-4 rounded-md font-semibold cursor-pointer mb-4 
                                ${isActive ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"}`
                            } 
                            end>
                        <span className='text-xl'><FaLock /></span>
                        <span>Change Password</span>
                    </NavLink>
                    </li>
                    <li><NavLink to={"/user/profile/delete-account"} className={({ isActive }) => 
                                `flex items-center gap-2 py-2 px-4 rounded-md font-semibold cursor-pointer mb-4 
                                ${isActive ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"}`
                            } 
                            end>
                        <span className='text-xl'><MdDelete /></span>
                        <span>Delete Account</span>
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default ProfileSidebar
