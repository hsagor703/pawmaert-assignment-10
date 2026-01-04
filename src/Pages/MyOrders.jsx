import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading2 from "./Loading2";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Swal from "sweetalert2";

const MyOrders = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://pawmaert-assignment-10-server.vercel.app/myOrders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  const handleDownloadPdf = () => {
    const pdf = new jsPDF();
    const title = "MyOrders";
    pdf.setFontSize(14);
    pdf.text(title, 14, 15);
    const columns = [
      "ID",
      "Product/Listing Name",
      "Buyer Name",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone",
    ];

    const rows = orders.map((order, idx) => [
      idx + 1,
      order.productName ?? "-",
      order.buyerName ?? "-",

      typeof order.price === "number"
        ? order.price.toFixed(2)
        : order.price ?? "-",
      order.quantity ?? "-",
      order.address ?? "-",

      order.date ? new Date(order.date).toLocaleString() : "-",
      order.phone ?? "-",
    ]);

    autoTable(pdf, {
      head: [columns],
      body: rows,
      startY: 20,
      headStyles: { fillColor: [22, 101, 245] },
      styles: { fontSize: 9 },
    });

    Swal.fire({
      title: "Do you want to save this?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        // main  point
        pdf.save("Orders.pdf");
      } else if (result.isDenied) {
        Swal.fire("are not saved", "", "info");
      }
    });
  };

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold  mb-8 text-center">
          My <span className="linear-text">Orders</span>
        </h2>

        <div className="flex justify-end mb-3">
          <button
            disabled={orders.length === 0}
            className="linear-btn btn"
            onClick={handleDownloadPdf}
          >
            Download PDF
          </button>
        </div>

        <div className="overflow-x-auto shadow-md rounded-lg">
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
                  key={order._id}
                  className="hover:bg-blue-200 hover:text-gray-600 transition duration-200"
                >
                  <td className="py-3 px-4 border-b">{index + 1}</td>
                  <td className="py-3 px-4 border-b font-medium ">
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

        {loading ? (
          <Loading2 />
        ) : (
          orders.length === 0 && (
            <p className="text-center text-gray-500 mt-6">
              No listings found. Add a pet or product to get started!
            </p>
          )
        )}
      </div>
    </section>
  );
};

export default MyOrders;
