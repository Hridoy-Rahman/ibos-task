import React from "react";
import { useCart } from "../Provider/CartProvider";
import { RxCross2 } from "react-icons/rx";

const CartPage = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useCart();

  // Constants for order calculations
  const SHIPPING_COST = 5.99;
  const TAX_RATE = 0.08;

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.offerPrice * item.quantity,
    0
  );

  // Calculate estimated tax
  const estimatedTax = subtotal * TAX_RATE;

  // Calculate total
  const total = subtotal + SHIPPING_COST + estimatedTax;

  return (
    <div className="container  px-14 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items on the Left */}
        <div className="w-full lg:w-3/4">
          <h1 className="text-3xl font-semibold mb-6">An overview of your order</h1>
          <div className="bg-gray-50 rounded-lg">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cartItems.map((item) => (
                    <li key={item.id} className="px-4 pb-2">
                      <hr className="mb-4" />
                      <div className="flex justify-between space-x-4">
                        <div className="flex gap-4">
                          <div className="flex items-center gap-4">
                            <div>
                              <div className="flex border rounded">
                                <button
                                  className="px-2 py-1 rounded-l hover:bg-gray-400"
                                  onClick={() =>
                                    updateCartItemQuantity(
                                      item.id,
                                      Math.max(item.quantity - 1, 1)
                                    )
                                  }
                                >
                                  -
                                </button>
                                <span className="px-4 py-1">{item.quantity}</span>
                                <button
                                  className="px-2 py-1 rounded-r hover:bg-gray-400"
                                  onClick={() =>
                                    updateCartItemQuantity(item.id, item.quantity + 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <div>
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover bg-gray-200 rounded"
                              />
                            </div>
                          </div>
                          <div>
                            <h1 className="text-lg font-bold text-[#434343]">{item.name}</h1>
                          </div>
                        </div>
                        <div>
                          {/* Remove Item Button */}
                          <button
                            className="ml-4 text-gray-500 py-1 px-3 rounded"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <RxCross2 />
                          </button>
                        </div>
                      </div>
                      <p className="text-xl font-bold text-right">€{(item.offerPrice * item.quantity).toFixed(2)}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Order Summary on the Right */}
        <div className="w-full lg:w-1/4">
          <h2 className="text-xl font-semibold mb-8">Order Details</h2>
          <div className="w-full bg-gray-50 border p-4 rounded-lg shadow">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>€{SHIPPING_COST.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Estimated Tax</span>
              <span>€{estimatedTax.toFixed(2)}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 mt-6">
            GO TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
