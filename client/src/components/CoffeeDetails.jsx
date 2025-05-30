import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
  const {data:coffee} = useLoaderData()
  const {email,photo,details,price,taste,supplier,quantity,name,_id} = coffee || {}
  console.log(coffee.data)
  return (
    <div>
        <img src={photo} alt="" />
    </div>
  );
};

export default CoffeeDetails;