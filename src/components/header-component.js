"use client";
import { IoSearch } from "react-icons/io5";
import { DownOutlined } from "@ant-design/icons";
import PopUp from "./pop-up-component";
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import {
    Typography,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [Param, setParam] = useState("");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogIn = () => {
        setOpen(true);
    }
    const handleCancel = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        console.log(e, "eeeeeeeee");
        setParam(e.target.value);
    }

    const handleBlogClick = () => {
        console.log("hello")
        router.push("/Blogs");

    }
    return (
        <>
            <div className="mt-2 flex flex-row justify-evenly items-center font-medium">
                <p className='font-serif font-semibold  text-xl hover:cursor-wait '>Dribble</p>
                <div className="w-1/3 border-2 border-slate-200 p-2 rounded-full font-thin px-4 py-2 text-sm bg-slate-100 hover:bg-white flex justify-between items-center">

                    {/* <span className="opacity-4 text-sm  hover:cursor-pointer" onChange={handleChange}>What are you looking for?</span> */}

                    <input
                        type="text"
                        placeholder="What are you looking for ?"
                        className="opacity-4 text-sm bg-transparent border-none outline-none"
                        value={Param}
                        onChange={handleChange}
                    />
                    <p className="font-semibold text-slate-700 hover:cursor-pointer hover:text-slate-600">Shots <DownOutlined />
                        <span className="bg-pink-600 p-2 rounded-full inline-flex items-center ml-2">
                            <IoSearch />
                        </span>
                    </p>

                </div>
                <p className="font-serif hover:cursor-pointer hover:text-slate-700">Explore</p>

                <div className="font-serif hover:cursor-pointer hover:text-slate-700">
                    <Menu
                        open={isMenuOpen}
                        handler={setIsMenuOpen}
                        placement="bottom"
                        allowHover={true}
                    >
                        <MenuHandler>
                            <Typography >
                                <ListItem
                                    className="flex gap-2 py-2 pr-4 font-medium text-gray-900"
                                    selected={isMenuOpen}
                                >
                                    <span className="font-serif hover:text-slate-700">
                                        Hire a Designer <DownOutlined />
                                    </span>
                                </ListItem>
                            </Typography>
                        </MenuHandler>
                        <MenuList className="hidden rounded-xl lg:block">

                            <MenuItem className="m-2 font-medium hover:text-slate-700 hover:underline">
                                Browse Designers
                            </MenuItem>
                            <MenuItem className="m-2 font-medium hover:text-slate-700 hover:underline">Post a job</MenuItem>
                            <MenuItem className="m-2 font-medium hover:text-slate-700 hover:underline">Hiring on Dribble</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <p className="font-serif hover:cursor-pointer hover:text-slate-700">Find Jobs</p>
                <p className="font-serif hover:cursor-pointer hover:text-slate-700" onClick={handleBlogClick}>Blogs</p>
                <p className="font-serif hover:cursor-pointer hover:text-slate-700">Sign up</p>
                <p className='border rounded-full p-3 px-6 bg-slate-900 text-white hover:cursor-pointer' onClick={handleLogIn}>Log In</p>
            </div >
            <PopUp open={open} onCancel={handleCancel} />
        </>
    )
}

export default Header;
