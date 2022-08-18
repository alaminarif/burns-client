import React from "react";

const Blogs = () => {
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2 justify-items-center gap-12 sm:p-12 max-w-7xl mx-auto ">
      {/* <h2 className="text-center text-4xl tracking-widest font-bold mb-16 my-8 uppercase">Blogs</h2> */}
      <div className="border border-primary rounded-xl p-8 ">
        <h3 className="font-bold text-2xl mb-4">How will you improve the performance of a React Application.</h3>
        <ul className="text-2xl ml-4 line leading-10">
          <li>01. Usage of Pure components React.</li>
          <li> 02. memo for component memorization.</li>
          <li>03. Avoid extra tags by using React fragments. </li>
          <li>04. Binding vs. Arrow Functions in Constructors</li>
          <li>05. Refrain from using Inline style attribute</li>
        </ul>
      </div>
      <div className="border border-primary rounded-xl p-8 ">
        <h3 className="font-bold text-2xl mb-4">What are the different ways to manage a state in a React application.</h3>
        <ul className="text-2xl ml-4 line leading-10">
          <p className="my-2">There are four main types of state you need to properly manage in your React apps:</p>
          <li>01. Local state </li>
          <li> 02. URL state </li>
          <li>03. Server state </li>
          <li>04. Global state </li>
        </ul>
      </div>
      <div className="border border-primary rounded-xl p-8 ">
        <h3 className="font-bold text-2xl mb-4">How does prototypical inheritance work?</h3>
        <ul className="text-2xl ml-4 line leading-10">
          <li className="mb-2">
            01. Under the classical inheritance phenomenon, we create a new class that actually extends or reuses the properties or functions.{" "}
          </li>
          <li className="mb-2"> 02. JavaScript doesn’t use classical inheritance instead it uses the phenomenon called Prototype Inheritance. </li>
          <li>03. In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage.</li>
        </ul>
      </div>
      <div className="border border-primary rounded-xl p-8 ">
        <h3 className="font-bold text-2xl mb-4"> What is a unit test? Why should write unit tests?</h3>
        <ul className="text-2xl ml-4 line leading-10">
          <li>01. A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. </li>
          <li> 02. In his book "Working Effectively with Legacy Code". </li>
          <li>03. The isolated part of the definition is important. </li>
          <li>04. In most programming languages, that is a function, a subroutine, a method or property. </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
