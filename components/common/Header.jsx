import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">
            <Link href="/">Master Leather</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link
              href="#products"
              className="text-gray-800 hover:text-gray-600"
            >
              Products
            </Link>
            <Link
              href="#categories"
              className="text-gray-800 hover:text-gray-600"
            >
              Categories
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-gray-600">
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
