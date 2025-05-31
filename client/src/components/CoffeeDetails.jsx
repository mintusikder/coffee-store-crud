import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { data: coffee } = useLoaderData();
  const {
    photo,
    details,
    price,
    _id,
    likedBy,
  } = coffee || {};
  console.log(coffee.data);
  return (
    <div className="flex gap-8 justify-center items-center py-12">
      <div className="flex-1">
        <img src={photo} alt="" />
      </div>
      <div className="flex-1">
        <p className="text-3xl font-bold">Details: {details}</p>
        <p className="text-3xl ">Price: {price}</p>
        <p>Likes: {likedBy.length}</p>
        <div className="flex gap-3 mt-3">
          <button className="btn btn-primary">Order</button>
          <button className="btn btn-secondary">Like</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
