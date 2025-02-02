import { BASE_URL } from "@/helpers/BASE_URL";
import Image from "next/image";
import Link from "next/link";

const AllProducts = async () => {
  const url = `${BASE_URL}/combo_product/combo-products`;

  let data;
  try {
    const res = await fetch(url, {
      next: { revalidate: 20 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    data = await res.json();
  } catch (error) {
    return (
      <div className="h-14 bg-gray-50 flex items-center justify-center">
        <p className="text-center text-red-600">{`Error: ${error.message}`}</p>
      </div>
    );
  }

  // console.log("all data", data?.data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {data?.data?.data?.map((product) => (
        <Link
          key={product?.id}
          href={`/product/${product?.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
        >
          <Image
            src={product?.image}
            alt={product?.product_title}
            width={400}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col justify-between gap-3 h-36">
            <h3 className="text-lg font-semibold">{product?.product_title}</h3>
            <button className="bg-[#38DAAE] px-3 py-2  text-black text-center">
              {product?.first_btn_text}
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllProducts;
