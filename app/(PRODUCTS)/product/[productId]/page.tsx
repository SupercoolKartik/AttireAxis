import React from "react";

const product = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return (
    <>
      <div>Here is your product id</div>
      <h1>PId : {params.productId}</h1>
    </>
  );
};

export default product;
