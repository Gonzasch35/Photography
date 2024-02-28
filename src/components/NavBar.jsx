import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo3.png";
import logo3 from "../assets/logo4.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [move, setMove] = useState(false);
  const [menu, setMenu] = useState(false);

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
    setMove(!move);
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full flex justify-between md:justify-around items-center h-24 ${
        isScrolled ? "bg-gradient" : "bg-gradient"
      }`}
    >
      <div
        className={
          menu
            ? "absolute top-20 right-5 z-20 font-inco font-semibold flex flex-col items-end gap-10"
            : "hidden font-inco font-semibold md:flex gap-10"
        }
      >
        <Link className="p-2 rounded-sm hover:bg-rosa" to="/">Home</Link>
        <Link className="p-2 rounded-sm hover:bg-rosa" to="/portfolio">Portfolio</Link>
        <Link className="p-2 rounded-sm hover:bg-rosa" to="/gallery">Galería</Link>
      </div>
      <img className="h-16" src={logo1} alt="" />
      <div
        className={
          menu
            ? "absolute top-80 right-5 z-20 font-inco font-semibold flex flex-col items-end gap-10"
            : "hidden font-inco font-semibold md:flex gap-10"
        }
      >
        <Link className="p-2 rounded-sm hover:bg-rosa" to="/about-me">Sobre Mi</Link>
        <Link className="p-2 rounded-sm hover:bg-rosa" to="/investment">Tarifas</Link>
        <Link className="p-2 rounded-sm hover:bg-rosa" to="/contact">Contacto</Link>
      </div>
      <button className="md:hidden z-20" onClick={() => setMenu(!menu)}>
        <div class="group flex h-16 w-20 cursor-pointer items-center justify-center rounded-3xl p-2 border-black">
          <div class="space-y-2">
            <span
              class={
                menu
                  ? "block h-1 w-8 origin-center rounded-full bg-black transition-transform ease-in-out translate-y-1.5 rotate-45"
                  : "block h-1 w-7 origin-center rounded-full bg-black transition-transform ease-in-out"
              }
            ></span>
            <span
              class={
                menu
                  ? "block h-1 w-8 origin-center rounded-full bg-green transition-transform ease-in-out -translate-y-1.5 -rotate-45"
                  : "block h-1 w-5 origin-center rounded-full bg-green transition-transform ease-in-out"
              }
            ></span>
          </div>
        </div>
      </button>
      <span className={menu ? "absolute w-40 h-screen bg-rosa top-0 right-0" : 'hidden'}></span>
    </div>
  );
};

export default NavBar;
