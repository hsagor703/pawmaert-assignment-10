import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import PetCards from "../components/PetCards";
import { IoMdArrowRoundBack } from "react-icons/io";

const ProductListing = () => {
  const { category } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch(
      `https://pawmart-assignment-10-server.vercel.app/filter?filter=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilterData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold my-15 text-center ">
        <span className="linear-text">{category}</span> ({filterData.length})
      </h1>
      <Link
        to={"/"}
        className="btn rounded-full transition linear-text border-[#065C99] mb-2 "
      >
        <IoMdArrowRoundBack />
        Back to Home
      </Link>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5 md:px-0">
        {filterData.map((data) => (
          <PetCards key={data._id} data={data}></PetCards>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
