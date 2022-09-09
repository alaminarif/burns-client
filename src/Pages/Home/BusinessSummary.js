import React from "react";
import mainBannr from "../../Images/bg.jpg";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faMessage, faRectangleList, faUsers } from "@fortawesome/free-solid-svg-icons";
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
        <div className="flex flex-col items-start">
          <FontAwesomeIcon icon={faFlag} className="text-primary  text-7xl mb-8" />
          <CountUp className="font-bold text-4xl text-white" delay={2} end={72} />

          <p className="text-xl text-primary mt-2 ">Countries</p>
        </div>
        <div className="flex flex-col items-start">
          <FontAwesomeIcon icon={faUsers} className="text-primary  text-7xl mb-8" />
          <CountUp delay={2} start={0} end={300} className="font-bold text-4xl text-white">
            {" "}
            300+
          </CountUp>
          <p className="text-xl text-primary mt-2">Pepole</p>
        </div>
        <div className="flex flex-col items-start">
          <FontAwesomeIcon icon={faRectangleList} className="text-primary  text-7xl mb-8" />
          <CountUp delay={2} end={1000} className="font-bold text-4xl text-white">
            {" "}
            1000+
          </CountUp>
          <p className="text-xl text-primary mt-2">Projects</p>
        </div>
        <div className="flex flex-col items-start">
          <FontAwesomeIcon icon={faMessage} className="text-primary  text-7xl mb-8" />
          <CountUp delay={2} end={190} className="font-bold text-4xl text-white">
            {" "}
            190+
          </CountUp>
          <p className="text-xl text-primary  mt-2">Feedbacks</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
