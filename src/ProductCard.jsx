import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProductCard = ({ name, price, description, image }) => {
  return (
    <Card>
      <div className="h-80 bg-card rounded-lg p-4 relative">
        <img src={image} className="block" alt="headset" />
      </div>
      <div className="flex px-4 mt-4 items-center justify-between">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <span>${price}</span>
      </div>
      <div className="px-4 mt-2">
        <p className="text-sm">{description}</p>
      </div>
      <div className="mt-1 p-4">
        <Button variant="default" className="w-full">
          Buy Now
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
