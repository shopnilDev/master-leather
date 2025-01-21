import AllProducts from "@/components/AllProducts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <section className="bg-[#38DAAE] ">
          <div className="container mx-auto px-6 py-10  text-center">
            <div className="relative w-56 h-28 mx-auto">
              <Image
                src="/logos/logo.png"
                alt="Logo"
                fill
                className="object-contain" // Ensures the image maintains its aspect ratio
                sizes="(max-width: 640px) 80vw, 40vw" // Adjust this based on your layout needs
              />
            </div>

            {/* <Image
            src='/logos/logo.png'
            alt="logo"
            width={150}
            height={50}
            className="mx-auto"
            /> */}

            <p className="text-xl mb-8  text-[#835702]">
              Discover our premium collection of handcrafted leather goods
            </p>
            <Link
              href="#products"
              className="bg-black text-white py-2 px-6 rounded-full text-lg font-semibold 
               "
            >
              Explore Offers
            </Link>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Offered Products
          </h2>
          <AllProducts />
        </section>

        {/* About Us */}
        <section id="about" className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 mb-8 md:mb-0 bg-green-200">
              <Image
                src="/images/all.jpg"
                alt="About Master Leather"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 ">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About Master Leather
              </h2>
              <p className="text-lg text-gray-800 mb-4">
                At Master Leather, we are passionate about crafting the finest
                leather goods. With decades of experience and a commitment to
                quality, we bring you timeless pieces that blend style and
                functionality.
              </p>
              <p className="text-lg text-gray-800 mb-4">
                Our artisans use only the best materials and traditional
                techniques to create products that stand the test of time. From
                wallets to bags, each item is a testament to our dedication to
                excellence.
              </p>
              <Link
                href="#"
                className="inline-block bg-gray-900 text-white py-2 px-6 rounded-full text-md font-semibold
                 hover:bg-gray-800 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
