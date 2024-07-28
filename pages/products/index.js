import ProductCard from "@/components/modules/ProductCard";
import React, { useEffect, useState } from "react";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([...props.products]);
  }, []);

  const product = products.map((product) => {
    return (
      <>
        <ProductCard key={product.id} data={product} />
      </>
    );
  });
  return (
    <div>
      <h1>products</h1>
      <hr />
      <table className="table ">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{product}</tbody>
      </table>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch(`https://fakestoreapi.com/products?limit=5`);
  const products = await response.json();
  return {
    props: { products },
  };
}
export default Products;
