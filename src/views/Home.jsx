import React, { useEffect, useState } from "react";
import image1 from "../assets/home/image1.jpeg";
import image2 from "../assets/home/image2.jpeg";
import image3 from "../assets/home/image3.jpeg";
import image4 from "../assets/home/image4.jpeg";
import image5 from "../assets/home/image5.jpeg";
import image6 from "../assets/home/image6.jpeg";
import Works from "../components/works/Works";
import styles from './Home.module.css'


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

  

  return (
    <div className="">
      <img
        className="h-screen w-full object-cover duration-2000"
        src={photo}
        alt=""
      />
      <div>
        <Works images={images}/>
      </div>
    </div>
  );
};

export default Home;
