'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import axiosInstance from '@/helpers/axiosInstance'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carousel from '@/components/Carousel'
import Order from '@/components/Order'
import { BASE_URL } from '@/helpers/baseUrl'

const ProductSingle = ({ params }) => {
  const { slug } = React.use(params) // Unwrap params using React.use()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const orderSectionRef = useRef(null)

  const scrollToOrderSection = () => {
    orderSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true // Only animate once
    })

    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(
          `/combo_product/combo-products/${slug}`
        )
        setProduct(response?.data?.data)
        setLoading(false)
      } catch (error) {
        setProduct(null)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [slug])

  if (loading) return <div>Loading...</div>
  if (!product) return <div>Product not found!</div>

  return (
    <div className='bg-gray-50 min-h-screen'>
      <header className='relative text-white'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: `url('${product.bgImage || '/images/bg.png'}')`,
            filter: 'brightness(0.3)' // This creates the dark overlay effect
          }}
        />
        <div className='relative mx-auto px-4 pt-7 pb-16 max-w-[1150px] text-center'>
          <div
            data-aos='fade-down'
            className='flex justify-center items-center bg-white backdrop-blur-sm mx-auto mb-6 rounded-full w-[150px] h-[150px]'
          >
            <Image
              src='/logo/logo.png'
              alt='Product Logo'
              width={130} // Adjust width and height as per the design
              height={130}
              className='bject-cover'
            />
          </div>

          <div
            data-aos='fade-right'
            className='border-4 border-white bg-black/80 backdrop-blur-sm mb-7 py-4 rounded-2xl'
          >
            <h1 className='font-bold text-[32px] leading-10'>
              {product?.product_title}
            </h1>
          </div>

          <p
            data-aos='fade-left'
            className='backdrop-blur-sm mb-8 rounded-lg font-bold text-2xl leading-9'
          >
            {product?.title}
          </p>

          <div data-aos='fade-up'>
            <button
              onClick={scrollToOrderSection}
              className='border-4 border-white bg-[#037710] shadow-lg px-10 py-4 rounded-3xl font-bold text-[24px] text-white sm:text-[32px] leading-8 transition-transform duration-300 hover:scale-90'
            >
              {product?.first_btn_text}
            </button>
          </div>
        </div>
      </header>
      <section className='mx-auto px-4 py-8 max-w-[1150px]'>
        <div className='flex justify-center'>
          <span className='bg-black drop-shadow-2xl mb-8 px-6 py-4 rounded-xl font-bold text-3xl text-center text-white leading-9'>
            {product?.video_section_title}
          </span>
        </div>
        <div className='bg-gray-200 w-full overflow-hidden aspect-video'>
          <iframe
            src={`https://www.youtube.com/embed/${product?.youtube}`}
            allowFullScreen
            className='w-full h-full'
            title={product?.video_section_title}
          ></iframe>
        </div>
      </section>
      <section className='bg-[#D5E4E8] mt-12 px-4 py-8'>
        <div className='mx-auto max-w-[1150px]'>
          <div data-aos='fade-up' className='flex justify-center'>
            <button
              onClick={scrollToOrderSection}
              className='border-4 bg-[#FF7400] hover:bg-[#037710] drop-shadow-2xl mb-4 sm:mb-8 px-12 py-4 border-black rounded-md font-extrabold text-[24px] text-center text-white sm:text-[32px] leading-6 sm:leading-8 transition-transform duration-300 hover:scale-90'
            >
              {product?.second_btn_text}
            </button>
          </div>

          <div className=''>
            {/* {JSON.stringify(product?.multiple_images)} */}
            <Carousel multipleImages={product?.multiple_images} />
          </div>
        </div>
      </section>
      {/* {JSON.stringify(product)} */}
      <section className='mx-auto px-4 py-8 max-w-[1150px]'>
        <div className='border-4 bg-[#8395A4] my-7 py-3 border-black rounded-md text-black text-center'>
          <span className='font-bold text-[#000000] text-[24px] text-center sm:text-[32px] leading-8'>
            {product?.first_sub_title}
          </span>
        </div>
        <div
          className='font-[500] text-[#2E2D2E] text-xl leading-6 features-list'
          dangerouslySetInnerHTML={{ __html: product?.first_description_title }}
        ></div>
      </section>
      <section className='bg-[#D5E4E8] mx-auto sm:mt-3 px-4 py-8 sm:py-12'>
        <div data-aos='fade-up' className='flex justify-center'>
          <button
            onClick={scrollToOrderSection}
            className='border-4 bg-[#FF1E00] hover:bg-[#037710] drop-shadow-2xl mb-4 sm:mb-8 px-12 py-4 border-black rounded-md font-bold text-[24px] text-center text-white sm:text-[32px] leading-6 sm:leading-8 transition-transform duration-300 hover:scale-90'
          >
            {product?.third_btn_text}
          </button>
        </div>
        <div className='flex justify-center'>
          <h2 className='border-4 bg-[#788F9F] drop-shadow-2xl mb-8 px-8 py-3 border-black rounded-md font-semibold text-[24px] text-center sm:text-[26px] leading-6 sm:leading-8'>
            <span className='text-white'> {product?.third_sub_title}</span>
          </h2>
        </div>
        <div
          className='border-2 shadow-2xl mx-auto border-black rounded-lg max-w-[1150px]'
          style={{ boxShadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.3)' }}
        >
          <div className='flex md:flex-row flex-col-reverse px-3 py-8'>
            <div
              className='mt-2 md:mt-0 md:pr-12 w-full md:w-3/5 font-[500] text-lg sm:text-xl leading-9 why-choose-us'
              dangerouslySetInnerHTML={{
                __html: product?.third_description_title
              }}
            ></div>
            <div className=''>
              <Image
                data-aos='fade-down'
                src={
                  BASE_URL + '/' + product?.third_description_image ||
                  '/images/logo.png'
                }
                alt='Product Logo'
                width={500}
                height={500}
                className='bg-white/10 backdrop-blur-sm mx-auto mb-6'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='mx-auto px-4 py-8 max-w-[1150px]'>
        <Order productData={product} />
      </section>
    </div>
  )
}

export default ProductSingle
