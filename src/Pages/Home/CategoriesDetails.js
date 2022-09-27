import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const CategoriesDetails = () => {
  const { categoriesID } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const [categoriesDetails, setCategoriesDetails] = useState({});
  useEffect(() => {
    const url = `https://immense-wave-88332.herokuapp.com/categories/${categoriesID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategoriesDetails(data));
  }, []);
  const { _id, name, img, description, minQuantity, avilabeQuantity, price } = categoriesDetails;
  const handleSubmit = (e) => {
    e.preventDefault();

    const oder = {
      email: user.email,
      name: name,
      categoriesID: categoriesID,
      address: e.target.address.value,
      number: e.target.number.value,
      quantity: e.target.quantity.value,
    };
    axios.post("https://immense-wave-88332.herokuapp.com/oder", oder).then((response) => {
      const { data } = response;
      console.log(response);
      if (data.insertedId) {
        toast("oder success");
        e.target.reset();
      }
      // toast.success("oder success");
      // e.target.reset();
    });
  };
  return (
    <div className="shadow-xl w-9/12 h-screen mt-10 mx-auto ">
      <div className="card  lg:card-side bg-base-100 p-8">
        <div className=" text-black">
          <figure className="w-3/6">
            <img src={img} className=" rounded" alt="Album" />
          </figure>
          <h2 className="card-title">{name}</h2>
          <p className="w-4/5 text-justify">{description}</p>
          <p className="flex justify-between mt-2 text-primary ">
            <span>Minimum Order: {minQuantity}</span> <span>Available: {avilabeQuantity}</span>
          </p>
          <p> price: ${price}</p>
        </div>

        <div className=" card-body max-w-9/12 max-h-fit mt-0">
          <form onSubmit={handleSubmit} className=" grid grid-cols-1 justify-items-center gap-6 w-96 bg-base-100 shadow-xl px-8 text-black">
            <input type="text" name="name" readOnly value={user?.displayName} className="input input-bordered  w-full" />
            <input type="text" name="email" readOnly value={user?.email} className="input input-bordered   w-full" />
            <input type="text" name="number" placeholder="Number" className="input input-bordered w-full" />
            <input type="address" name="address" placeholder="Address" className="input input-bordered w-full" />
            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
            <input type="submit" value="place oder" className="btn btn-primary w-full mb-6" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDetails;

/**
 https://i.ibb.co/qm5SNHR/AKD-30007-R.png
https://i.ibb.co/GHxrHcQ/AKD-40003.png
https://i.ibb.co/xX2dFPz/APH-3612505.png
https://i.ibb.co/smM1H8d/APT-36305.png
https://i.ibb.co/xFGTHGx/ASD-53.png
https://i.ibb.co/xHpWzhB/AWT-35039-8.png
https://i.ibb.co/Ss1FFPK/european-type-double-ring-offset-wrench.png
 */
