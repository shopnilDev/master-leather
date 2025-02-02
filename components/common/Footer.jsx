import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-5 sm:mt-10 py-8 text-white">
      <div className="mx-auto px-6 container">
        <div className="flex flex-wrap justify-center">
          {/* section 1 */}
          <div className="mb-6 md:mb-0 w-full md:w-1/4">
            <h3 className="mb-2 font-bold text-xl">
              Master Leather
            </h3>
            <p className="text-gray-400">Established since 2016</p>
          </div>
          {/* section 2 */}
          <div className="mb-6 md:mb-0 w-full md:w-1/4">
            <h4 className="mb-2 font-semibold text-lg">Quick Links</h4>
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
          <div className="mb-6 md:mb-0 w-full md:w-1/4">
            <h4 className="mb-2 font-semibold text-lg">Contact</h4>
            <p className="text-gray-400">93 Chadpur Tannery, Hazaribagh</p>
            <p className="text-gray-400">Jigatola, Dhanmondi, Dhaka, Bangladesh</p>
            <p className="text-gray-400">Phone: (880) 01757757235</p>
            <p className="text-gray-400">Email: info@masterleather.com</p>
          </div>
        </div>
        {/* Bottom */}
        <div className="border-gray-800 mt-8 pt-8 border-t text-center text-gray-400">
          <p>&copy; 2025 Master Leather. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
