import React from "react";
import mainBannr from "../../Images/bg.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faFlag, faMessage, faRectangleList, faUsers } from "@fortawesome/free-solid-svg-icons";
const BusinessSummary = () => {
  // const Business =

  return (
    <div
      style={{
        background: `url(${mainBannr})`,
      }}
      className="
      bg-no-repeat
      bg-cover
      bg-center "
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center py-20 bg-black-rgba">
        <div className="">
          <FontAwesomeIcon icon={faFlag} className="text-primary  text-7xl mb-8" />
          <h2 className="font-bold text-4xl text-white"> 72</h2>
          <p className="text-xl text-primary mt-2 ">Countries</p>
        </div>
        <div className="">
          <FontAwesomeIcon icon={faUsers} className="text-primary  text-7xl mb-8" />
          <h2 className="font-bold text-4xl text-white"> 300+</h2>
          <p className="text-xl text-primary mt-2">Pepole</p>
        </div>
        <div className="">
          <FontAwesomeIcon icon={faRectangleList} className="text-primary  text-7xl mb-8" />
          <h2 className="font-bold text-4xl text-white"> 1000+</h2>
          <p className="text-xl text-primary mt-2">Projects</p>
        </div>
        <div className="">
          <FontAwesomeIcon icon={faMessage} className="text-primary  text-7xl mb-8" />
          <h2 className="font-bold text-4xl text-white"> 190+</h2>
          <p className="text-xl text-primary  mt-2">Feedbacks</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
