import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const PurchaseDetails = () => {
  const [user, loading, error] = useAuthState(auth);
  const { purchaseId } = useParams();
  const [purchase, setPurchase] = useState([]);
  const { name, img, price, minQuantity, avilabeQuantity, description } = purchase;
  useEffect(() => {
    const url = `http://localhost:5000/purchase/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);
  console.log(purchaseId);
  return (
    <div className="shadow-xl w-9/12 mx-auto ">
      <div class="card  lg:card-side bg-base-100   my-12 p-8">
        <figure>
          <img src={img} className=" w-full rounded" alt="Album" />
        </figure>
        <div class="card-body w-9/12">
          <h2 class="card-title">{name}</h2>
          <p className="flex-grow-0">{description}</p>
          <p>${price}</p>
        </div>
      </div>
      <form className="w-full mx-auto ">
        <h2 className="text-center">form</h2>
        <input className="placeholder-red-500" type="text" placeholder={user.displayName} />
      </form>
    </div>
  );
};

export default PurchaseDetails;
