import React, { useEffect, useState } from "react";
import image1 from "../assets/home/image1.jpeg";
import image2 from "../assets/home/image2.jpeg";
import image3 from "../assets/home/image3.jpeg";
import image4 from "../assets/home/image4.jpeg";
import image5 from "../assets/home/image5.jpeg";
import image6 from "../assets/home/image6.jpeg";
import Works from "../components/works/Works";
import styles from "./Home.module.css";

const Home = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [photo, setPhoto] = useState(images[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Incrementar el índice, pero asegurarse de volver a 0 si llegamos al final
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Limpiar el temporizador cuando el componente se desmonte o el índice cambie
    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    setPhoto(images[index]);
  }, [index]);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Opcional, para realizar un desplazamiento suave
    });
  };

  return (
    <div>
      <div className="relative">
        <img
          className="h-screen w-full object-cover duration-2000"
          src={photo}
          alt=""
        />
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-rosa to-transparent" />
      </div>
      <div>
        <Works images={images} />
      </div>
      <div className="fixed bottom-0 right-0 p-4">
        <button
          className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
          onClick={backToTop}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
