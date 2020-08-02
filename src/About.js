import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import {motion} from "framer-motion"
const animateTransition = {
    init : {
        y:200,
        opacity : 0
    },

    anim : {
        y:0,
        opacity : 1

    }
}
const About = () => {
  return (
    <motion.div
    variants = {animateTransition}
    initial = "init"
    animate = "anim"
    
    >
      <NavBar aboutIcon />
      <div className = "aboutContent">
      <h2>About</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in
          laboriosam voluptatem autem provident eos incidunt modi libero nulla
          perferendis quisquam nemo enim, magnam maxime velit rem quidem quasi
          accusantium! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis in laboriosam voluptatem autem provident eos incidunt modi
          libero nulla perferendis quisquam nemo enim, magnam maxime velit rem
          quidem quasi accusantium! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officiis in laboriosam voluptatem autem provident
          eos incidunt modi libero nulla perferendis quisquam nemo enim, magnam
          maxime velit rem quidem quasi accusantium! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis in laboriosam voluptatem autem
          provident eos incidunt modi libero nulla perferendis quisquam nemo
          enim, magnam maxime velit rem quidem quasi accusantium! Lorem ipsum
          dolor sit amet consectetur adipisicing elit <br /> Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Officiis in laboriosam
          voluptatem autem provident eos incidunt modi libero nulla perferendis
          quisquam nemo enim, magnam maxime velit rem quidem quasi accusantium!
          . Officiis in laboriosam voluptatem autem provident eos incidunt modi
          libero nulla perferendis quisquam nemo enim, magnam maxime velit rem
          quidem quasi accusantium!
          dolor sit amet consectetur adipisicing elit <br /> Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Officiis in laboriosam
          voluptatem autem provident eos incidunt modi libero nulla perferendis
          quisquam nemo enim, magnam maxime velit rem quidem quasi accusantium!
          . Officiis in laboriosam voluptatem autem provident eos incidunt modi
          libero nulla perferendis quisquam nemo enim, magnam maxime velit rem
          quidem quasi accusantium!
          libero nulla perferendis quisquam nemo enim, magnam maxime velit rem
          quidem quasi accusantium!
          dolor sit amet consectetur adipisicing elit <br /> Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Officiis in laboriosam
          voluptatem autem provident eos incidunt modi libero nulla perferendis
          quisquam nemo enim, magnam maxime velit rem quidem quasi accusantium!
          . Officiis in laboriosam voluptatem autem provident eos incidunt modi
          libero nulla perferendis quisquam nemo enim, magnam maxime velit rem
          quidem quasi accusantium!
          dolor sit amet consectetur adipisicing elit <br /> Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Officiis in laboriosam
          voluptatem autem provident eos incidunt modi libero nulla perferendis
          quisquam nemo enim, magnam maxime velit rem quidem quasi accusantium!
          . Officiis in laboriosam voluptatem autem provident eos incidunt modi
          libero nulla perferendis quisquam nemo enim, magnam maxime velit rem
          quidem quasi accusantium!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
