import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("https://shielded-falls-95338.herokuapp.com/purchase")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);
  return (
    <div className="py-4">
      <h3 className="text-center text-4xl tracking-widest font-bold mb-16 my-8 uppercase">Our Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
