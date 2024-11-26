import React from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

const products: Product[] = [
  {
    id: 1,
    title: "Stylish Watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    price: 20.99,
  },
  {
    id: 2,
    title: "Premium Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    price: 35.99,
  },
  {
    id: 3,
    title: "Smart Camera",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    price: 15.49,
  },
  {
    id: 4,
    title: "Wireless Speaker",
    image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b",
    price: 50.00,
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto mt-28">
      <h1 className="text-4xl font-bold text-center p-8">Our Products</h1>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Add unoptimized prop to allow external URLs */}
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="object-cover w-full h-64"
              unoptimized
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-700 text-lg mt-2">${product.price.toFixed(2)}</p>
              <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}