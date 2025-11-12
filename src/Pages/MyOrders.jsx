import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyOrders = () => {

  const {user} = use(AuthContext)
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/myOrders?email=${user.email}`
    ).then(res => res.json()).then(data => {
      console.log(data);
      setOrders(data)
    }).catch(err => {
      console.log(err);
    })
  },[user])

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Customer <span className="linear-text">Orders</span>
        </h2>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200 text-left">
            <thead className="bg-blue-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 border-b">#</th>
                <th className="py-3 px-4 border-b">Product/Listing Name</th>
                <th className="py-3 px-4 border-b">Buyer Name</th>
                <th className="py-3 px-4 border-b">Price</th>
                <th className="py-3 px-4 border-b">Quantity</th>
                <th className="py-3 px-4 border-b">Address</th>
                <th className="py-3 px-4 border-b">Date</th>
                <th className="py-3 px-4 border-b">Phone</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-3 px-4 border-b">{index + 1}</td>
                  <td className="py-3 px-4 border-b font-medium text-gray-800">
                    {order.productName}
                  </td>
                  <td className="py-3 px-4 border-b">{order.buyerName}</td>
                  <td className="py-3 px-4 border-b">
                    <span
                      className={
                        order.price === "0"
                          ? "linear-text font-semibold"
                          : "text-blue-600 font-semibold"
                      }
                    >
                      {order.price}
                    </span>
                  </td>
                  <td className="py-3 px-4 border-b">{order.quantity}</td>
                  <td className="py-3 px-4 border-b">{order.address}</td>
                  <td className="py-3 px-4 border-b">{order.date}</td>
                  <td className="py-3 px-4 border-b">{order.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {orders.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No orders found yet.</p>
        )}
      </div>
    </section>
  );
};

export default MyOrders;
