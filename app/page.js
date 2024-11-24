import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Classic Leather Wallet",
    image: "/images/black.webp",
    slug: "classic-leather-wallet",
  },
  {
    id: 2,
    name: "Vintage Messenger Bag",
    image: "/images/bag.jpg",
    slug: "vintage-messenger-bag",
  },
  {
    id: 3,
    name: "Executive Shoe",
    image: "/images/shoe.png",
    slug: "executive-briefcase",
  },

  {
    id: 4,
    name: "Executive Shoe",
    image: "/images/shoe-2.png",
    slug: "executive-briefcase",
  },
  {
    id: 5,
    name: "Travel Duffel Bag",
    image: "/images/bag2.jpg",
    slug: "travel-duffel-bag",
  },
  {
    id: 7,
    name: "Leather Belt",
    image: "/images/belt.png",
    slug: "leather-belt",
  },
  {
    id: 6,
    name: "Card Holder",
    image: "/images/cardholder.jpg",
    slug: "card-holder",
  },
  {
    id: 8,
    name: "Leather Belt",
    image: "/images/belt.png",
    slug: "leather-belt",
  },
  {
    id: 9,
    name: "Executive Briefcase",
    image: "/images/brifcase.jpg",
    slug: "executive-briefcase",
  },

  {
    id: 10,
    name: "Travel Duffel Bag",
    image: "/images/bag2.jpg",
    slug: "travel-duffel-bag",
  },
];

const categories = [
  { name: "Wallets", image: "/images/black.webp" },
  { name: "Bags", image: "/images/bag.jpg" },
  { name: "Accessories", image: "/images/all.jpg" },
];

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
              className="bg-black text-white py-2 px-6 rounded-full text-md font-semibold 
               "
            >
              Explore Products
            </Link>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">
                    Handcrafted with premium leather
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Categories */}
        {/* <section id="categories" className="bg-gray-100 py-16">
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
        </section> */}

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
