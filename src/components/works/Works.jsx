import React from "react";
import Atropos from "atropos/react";
import styles from "./Works.module.css";

const Works = ({ images }) => {
  return (
    <div className="w-full md:w-3/4 p-16 mx-auto flex items-center flex-col flex-wrap">
      <h1 className={`${styles.works} mb-5 font-dancing text-3xl`}>
        What type of photoshoot are you looking for?
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
        {images?.map((img, index) => {
          return (
            <div className={styles.works}>
              <Atropos activeOffset={20} shadowScale={1.05} className="">
                <img
                  key={index}
                  className="w-full h-48 object-cover rounded-xl"
                  src={img}
                  alt=""
                  data-atropos-offset="0"
                />
                <h1
                  className="font-dancing text-4xl text-white absolute top-1/3 left-1/3 transform -translate-x-1/3"
                  data-atropos-offset="20"
                >
                  Family
                </h1>
              </Atropos>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
