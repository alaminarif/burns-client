import React from "react";

const Contact = () => {
  return (
    <div className="">
      <h3 className="text-center text-4xl tracking-widest font-bold mt-20 uppercase">Contact</h3>
      <div className="w-24 mt-4 mx-auto rounded h-1 bg-primary mb-20 "></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 pb-10 justify-items-center">
        <div className="mt-12">
          <p className="font-bold text-xl"> Name:</p>
          <p className="font-bold mb-4">Arifur Rahman</p>
          <p className="font-bold text-xl">Location:</p>
          <p className="font-bold mb-4">Dhaka, Bangladesh</p>
          <p className=" font-bold text-xl">Contact</p>
          <p className="font-bold">Email: me.alamin.arif@gmail.com</p>
          <p className="font-bold"> call: 0190852703</p>
        </div>
        <form className="card w-96 bg-base-100 shadow-xl rounded-xl p-8 ">
          <input type="text" placeholder="Name" className="input input-bordered w-full mb-6 " />
          <input type="text" placeholder="Email" className="input input-bordered w-full mb-6" />
          <input type="text" placeholder="Subject" className="input input-bordered w-full mb-6 " />
          <textarea placeholder="Your Message" className="textarea textarea-bordered w-full  mb-6"></textarea>
          <input type="submit" placeholder="" className="btn btn-primary w-full " />
        </form>
      </div>
    </div>
  );
};

export default Contact;
