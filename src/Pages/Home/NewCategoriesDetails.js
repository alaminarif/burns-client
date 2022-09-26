import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const NewCategoriesDetails = () => {
  const [user, loading, error] = useAuthState(auth);
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState([]);
  const { name, img, price, minQuantity, avilabeQuantity, description } = purchase;
  useEffect(() => {
    const url = `https://immense-wave-88332.herokuapp.com/purchase/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const oder = {
      email: user.email,
      purchase: purchase.name,
      purchaseId: purchaseId,
      address: e.target.address.value,
      number: e.target.number.value,
      quantity: e.target.quantity.value,
    };
    axios.post("https://immense-wave-88332.herokuapp.com/oder", oder).then((response) => {
      const { data } = response;
      console.log(response);
      // if (data.insertedId) {
      //   toast("oder success");
      //   e.target.reset();
      // }
      toast.success("oder success");
      e.target.reset();
    });
  };

  return (
    <div className="shadow-xl w-9/12 mx-auto pb-16 ">
      <div className="card  lg:card-side bg-base-100 p-8">
        <div className="text-black">
          <figure>
            <img src={img} className="  rounded" alt="Album" />
          </figure>
          <h2 className="card-title">{name}</h2>
          <p className="">{description}</p>
          <p className="flex justify-between mt-2 text-primary ">
            <span>Minimum Order: {minQuantity}</span> <span>Available: {avilabeQuantity}</span>
          </p>
          <p> price: ${price}</p>
        </div>

        <div className=" card-body w-9/12 mt-0">
          <form onSubmit={handleSubmit} className=" grid grid-cols-1 justify-items-center gap-6 w-96 bg-base-100 shadow-xl text-black px-8 ">
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

export default NewCategoriesDetails;
