import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center">
        {/* section 1 */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Master Leather</h3>
          <p className="text-gray-400">Crafting excellence since 1985</p>
        </div>
        {/* section 2 */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-gray-400">
            <li>
              <Link href="#" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="#categories" className="hover:text-white">
                Categories
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        {/* section 3 */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-gray-400">123 Leather Lane, Craftsville</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
          <p className="text-gray-400">Email: info@masterleather.com</p>
        </div>
      </div>
      {/* Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2023 Master Leather. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
}
