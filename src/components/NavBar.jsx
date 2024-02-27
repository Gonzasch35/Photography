import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo3.png";
import logo3 from "../assets/logo4.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [move, setMove] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMove = () => {
    setMove(!move)
  }

  return (
    <div
      className={`fixed top-0 z-50 w-full flex justify-around items-center h-24 ${
        isScrolled ? "bg-gradient" : "bg-gradient"
      }`}
    >
      <div className="font-inco font-semibold flex gap-10">
        <Link className="" onMouseMove={handleMove} to='/'>Home</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/gallery'>Galería</Link>
      </div>
      <img className="h-16" src={logo1} alt="" />
      <div className="font-inco font-semibold flex gap-10">
        <Link to='/about-me'>Sobre Mi</Link>
        <Link to='/investment'>Tarifas</Link>
        <Link to='/contact'>Contacto</Link>
      </div>
    </div>
  );
};

export default NavBar;
