import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductsCards from "./ProductsCards";
import { Separator } from "@/components/ui/separator";
import { Button } from "./components/ui/button";
import Tab from "./Tabs";

const productsDummy = [
  {
    categoryId: "1",
    image: "/assets/products/airpods-max.png",
    _id: "1",
    name: "AirPods Max",
    price: "549.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "3",
    image: "/assets/products/echo-dot.png",
    _id: "2",
    name: "Echo Dot",
    price: "99.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "2",
    image: "/assets/products/pixel-buds.png",
    _id: "3",
    name: "Galaxy Pixel Buds",
    price: "99.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "1",
    image: "/assets/products/quietcomfort.png",
    _id: "4",
    name: "Headphone",
    price: "249.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "3",
    image: "/assets/products/soundlink.png",
    _id: "5",
    name: "Bose SoundLink",
    price: "119.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "5",
    image: "/assets/products/apple-watch.png",
    _id: "6",
    name: "Apple Watch 9",
    price: "699.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "4",
    image: "/assets/products/iphone-15.png",
    _id: "7",
    name: "Apple Iphone 15",
    price: "1299.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "4",
    image: "/assets/products/pixel-8.png",
    _id: "8",
    name: "Galaxy Pixel 8",
    price: "549.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
];

const categories = [
  { _id: "ALL", name: "All" },
  { _id: "1", name: "Headphones" },
  { _id: "2", name: "Earbuds" },
  { _id: "3", name: "Speakers" },
  { _id: "4", name: "Mobile Phones" },
  { _id: "5", name: "Smart Watches" },
];
const Products = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("ALL");
  const [products, setProducts] = useState(productsDummy);
  const [selectedFilterButton, setSelectedFilterButton] = useState("");

  const filteredProducts =
    selectedCategoryId === "ALL"
      ? products
      : products.filter((product) => product.categoryId === selectedCategoryId);

  const handleTabClick = (_id) => {
    setSelectedCategoryId(_id);
  };

  const handleOnClickAse = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
    setSelectedFilterButton("Ascending");
  };

  const handleOnClickDse = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
    setSelectedFilterButton("Descending");
  };

  return (
    <section className="px-24 py-8">
      <h2 className="text-4xl font-bold">Our Products</h2>
      <Separator className="mt-4" />
      <div className="mt-4 flex items-center  justify-between">
        <div className="flex gap-4">
          {categories.map((category) => (
            <Tab
              key={category._id}
              _id={category._id}
              selectedCategoryId={selectedCategoryId}
              name={category.name}
              onTabClick={handleTabClick}
            />
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <Button
            onClick={handleOnClickAse}
            className={`${
              selectedFilterButton === "Ascending"
                ? "bg-[#010204] text-white hover:bg-slate-800"
                : "bg-[#e5e7ed] text-black  hover:bg-white"
            } border `}
          >
            Sort by price: Ascending
          </Button>
          <Button
            onClick={handleOnClickDse}
            className={`${
              selectedFilterButton === "Descending"
                ? "bg-[#010204] text-white hover:bg-slate-800"
                : "bg-[#e5e7ed] text-black  hover:bg-white"
            } border `}
          >
            Sort by price: Descending
          </Button>
        </div>
      </div>

      <ProductsCards products={filteredProducts} />
    </section>
  );
};

export default Products;
