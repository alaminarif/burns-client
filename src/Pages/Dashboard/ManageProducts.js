import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ManageProducts = () => {
  const [user] = useAuthState(auth);
  const [products, setproduct] = useState([]);
  useEffect(() => {
    // ?email=${user.email}
    const url = `http://localhost:5000/purchase`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, [user]);
  const handleDelete = (id) => {
    const procced = window.confirm("are you sure?");
    if (procced) {
      const url = `http://localhost:5000/purchase/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setproduct(remaining);
          console.log(data);
        });
    }
  };
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>${product.price}</td>

                <td>
                  {" "}
                  <button onClick={() => handleDelete(product._id)} className="btn btn-sm btn-primary">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1>My products {products.length}</h1>
    </div>
  );
};

export default ManageProducts;
