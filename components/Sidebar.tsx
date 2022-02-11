import { AiFillGithub, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import { BsSun, BsMoon} from "react-icons/bs";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <h3 className="my-4 text-7xl font-bold font-firacode tracking-wider">
        Hello, <span className="text-yellow ">Amedeo</span> here.✌️
      </h3>
      {/* Resume */}
      
      <Image
        src="/images/io-lungo.jpg"
        alt="avatar"
        className="mx-auto rounded-full"
        height="550px"
        width="550px"
        layout="intrinsic"
        quality="100"
      />

      <h5>Me, when I was a little boy.</h5>

    {/* Socials */}
    <div className="flex justify-around w-9/12 mx-auto my-5 text-yellow md:w-full">
        <a href="https://www.instagram.com/">
          <AiFillInstagram className="w-8 h-8 cursor-pointer " />
        </a>
        <a href="https://it.linkedin.com/in/amedeozanotto/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.github.com/zame97/">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      <button
        onClick={changeTheme}
        className="px-5 py-5 my-3 rounded-full transform-gpu hover:scale-105 cursor-pointer bg-gradient-to-r from-yellow to-yellow focus:outline-none"
      >
        {/* //TODO remove bg black */}
        {theme === "light" ?  (
          <BsMoon size={32}/>
        ) : (
          <BsSun color={'#323031'} size={32}/>
        )}
      </button>
    </>
  );
};

export default Sidebar;
