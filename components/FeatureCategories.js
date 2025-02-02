import Image from "next/image";
import React from "react";

const categories = [
  { name: "Wallets", image: "/images/black.webp" },
  { name: "Bags", image: "/images/bag.jpg" },
  { name: "Accessories", image: "/images/all.jpg" },
];

function FeatureCategories() {
  return (
    <div>
      {/* Featured Categories */}
      <section id="categories" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md group"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureCategories;
