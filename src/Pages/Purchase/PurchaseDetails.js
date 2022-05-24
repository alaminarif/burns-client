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
    const url = `https://shielded-falls-95338.herokuapp.com/purchase/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);

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
          <form className=" grid grid-cols-1 justify-items-center gap-6 py-6 ">
            <input type="text" readOnly placeholder={user?.displayName} class="input input-bordered placeholder-black  w-9/12 max-w-xs" />
            <input type="text" readOnly placeholder={user?.email} class="input input-bordered placeholder-black  w-9/12 max-w-xs" />
            <input type="text" placeholder="Number" class="input input-bordered  w-9/12 max-w-xs" />
            <input type="address" placeholder="Address" class="input input-bordered w-9/12 max-w-xs" />
            <input type="text" placeholder="Quantity" class="input input-bordered w-9/12 max-w-xs" />
            <input type="submit" value="place oder" className="btn btn-primary w-9/12 max-w-xs mb-6" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetails;
