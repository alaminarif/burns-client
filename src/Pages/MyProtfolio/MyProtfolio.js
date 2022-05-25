import React from "react";
import About from "../../Images/about.png";
import protfolio1 from "../../Images/1.png";
import protfolio2 from "../../Images/4.png";
import protfolio3 from "../../Images/Screenshot_98.png";

const MyProtfolio = () => {
  return (
    <div>
      <h3 className="text-center text-4xl tracking-widest font-bold mb-16 my-8 uppercase"> about me </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <figure>
          <img src={About} alt="" />
        </figure>
        <div className="">
          <p className="text-2xl">
            I am working as a frontend developer. I always focus on high quality service and 100% client. Love to work with any front-end related
            projects in any latest front-end development technology.
          </p>
          <h4 className="font-bold text-2xl uppercase mt-6 mb-4">Contact</h4>
          <p className="text-2xl">Call: 01793911158</p>
          <p className="text-2xl"> Email: me.alamin.arif.com</p>
          <address className="text-2xl">Dumki, Patuakhali.</address>
          <h3 className="font-bold text-2xl uppercase my-6">skills :</h3>
          <div className="flex flex-wrap gap-6">
            <button className="font-bold  btn btn-secondary p-2">Html</button>
            <button className="font-semibold  btn btn-secondary ">Css</button>
            <button className="font-semibold  btn btn-secondary ">Bootstrap</button>
            <button className="font-semibold  btn btn-secondary ">Tailwind Css</button>
            <button className="font-semibold  btn btn-secondary ">Javascript</button>
            <button className="font-semibold  btn btn-secondary ">React</button>
          </div>
          <h3 className="font-bold text-2xl uppercase my-6">Education</h3>
          <p className="">
            <span className="font-semibold text-2xl">Diploma In Engineering -</span>
            <span className="font-semibold"> Barishal Gvot Polytechnic Institute</span>
          </p>
        </div>
      </div>
      <h3 className="text-center text-4xl tracking-widest font-bold mb-16 my-8 uppercase"> recent projects </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-12">
        <figure>
          <img src={protfolio1} className=" rounded-lg" alt="" />
          <h4 className="font-semibold text-2xl mt-2 mb-4">Web Application</h4>
          <p className="text-justify">
            Gear-bending strength calculations are commonly based on the assumption that the tooth-bending fatigue strength has a normal distribution
            with one standard deviation being about 8 percent of the nominal endurance limit.
          </p>

          <p className="font-bold text-accent my-2">technologies used - html, css</p>
          <a href="https://influence-gear-al.netlify.app/" target="_blank">
            view online - <span className="text-primary">www.influence-gear.com</span>
          </a>
        </figure>
        <figure>
          <img src={protfolio2} className=" rounded-lg" alt="" />
          <h4 className="font-semibold text-2xl mt-2 mb-4">Profolio Website</h4>
          <p className="text-justify">
            The first GPUs were designed as graphics accelerators, becoming more programmable over the 90s, culminating in NVIDIA's first GPU in 1999.
            Researchers and scientists rapidly began to apply the excellent floating point performance of this GPU for general purpose computing
          </p>

          <p className="font-bold text-accent my-2">technologies used - Html, Css, Bootstrap</p>
          <a href="https://bdth-protfolio.netlify.app/" target="_blank">
            view online - <span className="text-primary">www.protfolio.com</span>
          </a>
        </figure>
        <figure>
          <img src={protfolio3} className=" rounded-lg" alt="" />
          <h4 className="font-semibold text-2xl mt-2 mb-4">Personal Profolio Website</h4>
          <p className="text-justify">
            I am working as a frontend developer for the last two years. I always focus on high quality service and 100% client. Love to work with any
            front-end related projects in any latest front-end development technology.
          </p>

          <p className="font-bold text-accent my-2">technologies used - Html, Css, Javascript</p>
          <a href="https://alaminarif.netlify.app/" target="_blank">
            view online - <span className="text-primary">alamin-arif.com</span>
          </a>
        </figure>
      </div>
    </div>
  );
};

export default MyProtfolio;
