import React from "react";
import { useCart } from "../../Provider/CartProvider";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Access addToCart from CartContext

  return (
    <>
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover p-6 max-w-full max-h-full rounded"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

      <div className="flex gap-4">
        <div className="text-lg text-gray-800 font-bold mb-2">
          €{product.offerPrice.toFixed(2)}
        </div>
        <div className="text-lg text-gray-300 font-bold line-through">
          €{product.regularPrice.toFixed(2)}
        </div>
        <div className="text-lg text-red-800 font-bold">
          {product.offerPercentage}% OFF
        </div>
      </div>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <button
        className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        onClick={() => addToCart(product)} // Add to cart handler
      >
        Add to Cart
      </button>
    </>
  );
};

export default ProductCard;
