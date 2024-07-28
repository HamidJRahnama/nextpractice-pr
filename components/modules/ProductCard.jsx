import React from "react";

const ProductCard = (props) => {
  const product = props.data;
  return (
    <>
      <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
};

export default ProductCard;
