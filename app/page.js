'use client'
import { useState, useEffect } from 'react'
import axiosInstance from '@/helpers/axiosInstance'
import Image from 'next/image'
import Link from 'next/link'
import { BASE_URL } from '@/helpers/baseUrl'

export default function Home () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(
          '/combo_product/combo-products'
        )
        setProducts(
          Array.isArray(response.data.data.data) ? response.data.data.data : []
        )
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setProducts([])
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className='min-h-screen bg-gray-50'>
      <main>
        {/* Hero Section */}
        <section className='bg-[#38DAAE]'>
          <div className='container mx-auto px-6 py-10 text-center'>
            <div className='relative w-56 h-28 mx-auto'>              
                <Image
                  src='/logos/logo.png'
                  alt='Logo'
                  fill
                  className='object-contain'
                  sizes='(max-width: 640px) 80vw, 40vw'
                />              
            </div>
            <p className='text-xl mb-8 text-[#835702]'>
              Discover our premium collection of handcrafted leather goods
            </p>
            {/* <Link
              href='#products'
              className='bg-black text-white py-2 px-6 rounded-full text-lg font-semibold'
            >
              Explore Offers
            </Link> */}
          </div>
        </section>

        {/* Products Section */}
        <section id='products' className='container mx-auto px-6 py-16'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Explore Offers
          </h2>
          {loading ? (
            <p className='text-center text-lg text-gray-500'>
              Loading products...
            </p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
              {products.map(product => (
                <Link
                  key={product?.id}
                  href={`/product/${product?.id}`}
                  className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300'
                >
                  {product?.first_description_image ? (
                    <Image
                      src={BASE_URL + '/' + product?.first_description_image}
                      alt={product?.title}
                      width={400}
                      height={400}
                      className='w-full h-48 object-cover'
                    />
                  ) : (
                    <div className='w-full h-48 bg-gray-200 flex items-center justify-center'>
                      <span className='text-gray-500 text-sm'>
                        Image not available
                      </span>
                    </div>
                  )}
                  <div className='p-4'>
                    <h3 className='text-lg font-semibold mb-2'>
                      {product?.title}
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      {product?.product_title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
        <section className='container mx-auto px-6 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center'>
            <div>
              <h2 className='text-3xl font-bold text-center mb-8'>ABOUT US</h2>
              <p>
                Master Leather is a dynamic and innovative supply chain company
                specializing for sourcing production and distribution of a wide
                range of customized with products including leather goods,
                Garments accessories, jute goods etc. committed to excellence in
                every aspect of the supply chain process partnership to ensure
                the seamless flow of goods from manufacturing to final delivery
                with a focus on quality, sustainability and efficiency.
              </p>
              <p>&nbsp;</p>
              <p>
                Master Leather has stated its journey from the dream of giving
                you a state of the art experience regarding fashion and comfort.
                We are committed to strive to only deliver you the very best.
                The company has a diverse product range of belts, Bags, Wallets
                and small leather goods. We make all leather related goods in
                our own factory and we are ensuring that all the products are
                export quality.
              </p>
            </div>
            <div className='relative mx-auto'>
              <Image
                src='/images/homepageslider1.jpg'
                alt='Logo'
                width={1000}
                height={1000}
                className='object-contain'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
