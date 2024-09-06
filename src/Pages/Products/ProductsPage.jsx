import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Pagination from "../../Components/Pagination";

const categories = ["Rocking Chair", "Side Chair", "Lounge Chair"];
const PRODUCTS_PER_PAGE = 6;

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Rocking Chair");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the product data!", error);
      });
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container px-14 py-8">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-1/4 pr-4 border-r-2 border-gray-300 mr-5">
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer py-2 px-4 rounded text-gray-500 text-2xl hover:bg-gray-100 ${
                  selectedCategory === category
                    ? "bg-black text-white font-semibold hover:bg-black"
                    : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1); // Reset to first page when category changes
                }}
              >
                {category}
              </li>
            ))}
          </ul>
          <hr className="transition" />
        </div>

        {/* Products Section */}
        <div className="w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-4">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow hover:shadow-lg"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
