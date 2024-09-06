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
          className="object-cover max-w-full max-h-full rounded"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <div className="text-gray-800 font-semibold mb-2">
        €{product.offerPrice.toFixed(2)}
      </div>
      <div className="text-sm text-gray-500 line-through">
        €{product.regularPrice.toFixed(2)}
      </div>
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
