import React from "react";
import ProductCard from "./ProductCard";

const ProductsCards = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-7">
      {products.map(({ _id, name, price, description, image, categoryId }) => (
        <ProductCard
          key={_id}
          categoryId={categoryId}
          name={name}
          price={price}
          image={image}
          description={description}
        />
      ))}
    </div>
  );
};

export default ProductsCards;
