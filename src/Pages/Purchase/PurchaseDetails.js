import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchaseDetails = () => {
  const [user, loading, error] = useAuthState(auth);
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState([]);
  const { name, img, price, minQuantity, avilabeQuantity, description } = purchase;
  useEffect(() => {
    const url = `https://shielded-falls-95338.herokuapp.com/purchase/${purchaseId}`;
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
    axios.post("http://localhost:5000/oder", oder).then((response) => {
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
    <div className="shadow-xl w-9/12 mx-auto ">
      <div class="card  lg:card-side bg-base-100   my-12 p-8">
        <div className="">
          <figure>
            <img src={img} className="  rounded" alt="Album" />
          </figure>
          <h2 class="card-title">{name}</h2>
          <p className="">{description}</p>
          <p className="flex justify-between mt-2 text-primary ">
            <span>Minimum Order: {minQuantity}</span> <span>Available: {avilabeQuantity}</span>
          </p>
          <p> price: ${price}</p>
        </div>

        <div class=" card-body w-9/12">
          <h3>Purchase</h3>
          <form onSubmit={handleSubmit} className=" grid grid-cols-1 justify-items-center gap-6 ">
            <input type="text" name="name" readOnly value={user?.displayName} class="input input-bordered  w-full" />
            <input type="text" name="email" readOnly value={user?.email} class="input input-bordered   w-full" />
            <input type="text" name="number" placeholder="Number" class="input input-bordered w-full" />
            <input type="address" name="address" placeholder="Address" class="input input-bordered w-full" />
            <input type="text" name="quantity" placeholder="Quantity" class="input input-bordered w-full" />
            <input type="submit" value="place oder" className="btn btn-primary w-full mb-6" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetails;
