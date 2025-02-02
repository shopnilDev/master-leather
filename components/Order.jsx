'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CircleCheck } from 'lucide-react'
import { BASE_URL } from '@/helpers/baseUrl'
import axiosInstance from '@/helpers/axiosInstance'
import Swal from 'sweetalert2'

export default function Order ({ productData }) {
  const [quantities, setQuantities] = useState(
    productData.color_variations.reduce((acc, curr) => {
      acc[curr.id] = 1 // Default quantity is 1
      return acc
    }, {})
  )

  const [selectedVariations, setSelectedVariations] = useState({})
  const shippingRates = { inside: 60, outside: 120 }
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    mobile: '',
    address: ''
  })

  const [shippingMethod, setShippingMethod] = useState('inside')

  const [otherDetails, setOtherDetails] = useState({
    comboProductId: productData?.id,
    paymentMethod: 'Cash On Delivery',
    shippingMethod: null, // Set user selected value here
    shippingCost: null // Set user selected value here
  })

  const handleQuantityChange = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta) // Ensure at least 1
    }))
  }

  const handleBillingDetailsChange = e => {
    const { name, value } = e.target
    setBillingDetails(prev => ({ ...prev, [name]: value }))
  }

  const handleOtherDetails = e => {
    const { name, value } = e.target
    setOtherDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const calculateTotal = () => {
    const productsTotal = productData.color_variations.reduce(
      (total, variation) =>
        selectedVariations[variation.id] // Only for selected variations
          ? total +
            (quantities[variation.id] || 1) * parseFloat(variation.color_price)
          : total,
      0
    )
    const shippingCost = shippingRates[shippingMethod]
    return productsTotal + shippingCost
  }

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault()
    const orderList = getOrderList()

    if (!orderList.length) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please select at least one product!',
      })
      return
    }

    const payload = {
      billingDetails,
      otherDetails,
      orderItems: orderList
    }

    try {
      const response = await axiosInstance.post(
        '/combo_product/store-combo-order',
        payload
      )
      Swal.fire({
        icon: 'success',
        title: 'Order Placed!',
        text: 'Your order has been placed successfully.',
        confirmButtonColor: '#3085d6',
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Something went wrong while placing the order.',
      })
    }
  }

  const getOrderList = () =>
    Object.values(selectedVariations).map(variation => ({
      id: variation.id,
      color_image: variation.color_image,
      color_title: variation.color_title,
      quantity: quantities[variation.id] || 1,
      price: variation.color_price,
      total: (quantities[variation.id] || 1) * variation.color_price
    }))

  useEffect(() => {
    if (shippingMethod) {
      const shippingCost = shippingRates[shippingMethod]
      setOtherDetails(prevDetails => ({
        ...prevDetails,
        shippingMethod,
        shippingCost
      }))
    }
  }, [shippingMethod]) // Add // eslint-disable-next-line react-hooks/exhaustive-deps if needed

  return (
    <div
      className='border-2 bg-[#F8F6F8] shadow-2xl p-4 sm:p-6 md:p-8 border-black rounded-md'
      style={{ boxShadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.2)' }}
    >
      <form onSubmit={handleSubmit}>
        <div className='mb-6'>
          <h2
            data-aos='fade-up'
            className='border-4 bg-[#007F0A] py-3 border-black rounded-md font-bold text-[24px] text-center text-white sm:text-[32px] leading-8'
            style={{ boxShadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.3)' }}
          >
            {productData?.title}
          </h2>
        </div>

        <div data-aos='zoom-in-up'>
          <div className='space-y-2 md:space-y-4 mb-6 md:mb-10 font-[500] text-gray-600 text-sm'>
            <div className='flex md:items-center gap-2'>
              <CircleCheck size={16} color='#ee4f4f' />
              <p>
                Customer matched zone Locations not covered by your other zones
              </p>
              <CircleCheck size={16} color='#ee4f4f' />
              <p>
                Customer matched zone Locations not covered by your other zones
              </p>
            </div>
          </div>
        </div>

        <div className='mb-8 text-[#555555]'>
          <div className='gap-6 grid md:grid-cols mt-5 text-[#333333]'>
            <h3 className='font-semibold text-xl'>
              আপনার তথ্যের সাথে প্রোডাক্ট সিলেক্ট করুন
            </h3>
            <div className='flex flex-wrap gap-4'>
              {[
                {
                  label: 'আপনার নাম',
                  name: 'name',
                  required: true
                },
                {
                  label: 'মোবাইল নাম্বার',
                  name: 'mobile',
                  required: true,
                  type: 'tel'
                },
                {
                  label: 'ঠিকানা লিখুন',
                  name: 'address',
                  required: true
                }
              ].map(({ label, name, required, type = 'text' }, index) => (
                <div className='flex-1 min-w-[200px]' key={index}>
                  <label className='block mb-1 text-gray-600 text-sm'>
                    {label}
                    {required && (
                      <span className='ml-1 text-[#E2260A] text-lg'>*</span>
                    )}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={billingDetails[name]}
                    onChange={handleBillingDetailsChange}
                    className='border-gray-300 p-2 border rounded w-full text-sm'
                    required={required}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='hidden-fields'>
            <input
              type='hidden'
              name='comboProductId'
              value={otherDetails.comboProductId}
              onChange={handleOtherDetails}
              required
            />
          </div>

          <div className='gap-6 grid md:grid-cols text-[#333333]'>
            {/* Order Summary */}
            <div className='mt-5'>
              <h3 className='mb-5 font-bold text-lg leading-6'>
                কালার সিলেক্ট করুনঃ
              </h3>
              <div className='gap-4 grid grid-cols-1 md:grid-cols-2'>
                {productData?.color_variations.map((variant, key) => (
                  <div
                    key={key}
                    className='border-gray-300 p-2 sm:p-4 border rounded-lg'
                  >
                    <div className='flex items-center gap-2 sm:gap-4'>
                      <input
                        type='checkbox'
                        checked={!!selectedVariations[variant.id]}
                        onChange={() => {
                          setSelectedVariations(prev => ({
                            ...prev,
                            [variant.id]: !prev[variant.id]
                              ? variant
                              : undefined
                          }))
                        }}
                        className='w-4 h-4'
                      />
                      <Image
                        src={BASE_URL + '/' + variant?.image}
                        alt={`${variant?.color_title}`}
                        width={80}
                        height={80}
                        className='border-gray-200 border rounded-lg'
                      />
                      <div className=''>
                        <h4 className='font-semibold text-[12px] sm:text-[16px]'>
                          {variant?.color_title}
                        </h4>
                        <div className='flex sm:flex-row flex-col md:justify-center md:items-center gap-2 sm:gap-4 mt-2'>
                          <div className='flex items-center'>
                            <button
                              type='button'
                              onClick={() =>
                                handleQuantityChange(variant.id, -1)
                              }
                              className='flex justify-center items-center border-gray-300 bg-gray-50 hover:bg-gray-100 border border-r-0 rounded-l w-5 sm:w-8 h-5 sm:h-8 text-gray-600'
                            >
                              -
                            </button>
                            <input
                              type='number'
                              min='1'
                              value={quantities[variant.id]}
                              onChange={e =>
                                setQuantities(prev => ({
                                  ...prev,
                                  [variant.id]: Math.max(
                                    1,
                                    parseInt(e.target.value) || 1
                                  )
                                }))
                              }
                              className='border-gray-300 border w-16 h-5 sm:h-8 text-center text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [appearance:textfield]'
                            />
                            <button
                              type='button'
                              onClick={() =>
                                handleQuantityChange(variant.id, 1)
                              }
                              className='flex justify-center items-center border-gray-300 bg-gray-50 hover:bg-gray-100 border border-l-0 rounded-r w-5 sm:w-8 h-5 sm:h-8 text-gray-600'
                            >
                              +
                            </button>
                          </div>
                          <span className='font-semibold text-[10px]'>
                            ৳ {variant?.color_price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='items-center grid grid-cols-2'>
                <div className='mt-5'>
                  <h3 className='mb-4 font-semibold text-xl'>
                    SHIPPING METHOD
                  </h3>
                  <div className='flex flex-col-3 gap-3'>
                    {Object.entries(shippingRates).map(([key, value]) => (
                      <label key={key} className='flex items-center gap-3'>
                        <input
                          type='radio'
                          name='shippingMethod'
                          value={key}
                          checked={shippingMethod === key}
                          onChange={e => setShippingMethod(e.target.value)}
                          className='w-4 h-4'
                        />
                        <span>
                          {key === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka'}{' '}
                          -<span className='font-bold'> ৳{value}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className='mt-5'>
                  <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-xl'>PAYMENT METHOD</h3>
                    <label className='flex items-center gap-3'>
                      <input
                        type='radio'
                        name='paymentMethod'
                        value={otherDetails.paymentMethod}
                        onChange={handleOtherDetails}
                        defaultChecked
                        className='w-4 h-4'
                      />
                      <span>Cash On Delivery</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='mt-6 pt-4 border-t'>
                <div className='flex justify-between mb-2'>
                  <span className='font-medium'>Subtotal</span>
                  <span>
                    ৳
                    {productData.color_variations
                      .filter(variant => selectedVariations[variant.id]) // Only selected variations
                      .reduce(
                        (total, variant) =>
                          total +
                          (quantities[variant.id]
                            ? quantities[variant.id]
                            : 0) *
                            parseFloat(variant.color_price),
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>

                <div className='flex justify-between mb-2'>
                  <span className='font-medium'>Shipping</span>
                  <span>৳{shippingRates[shippingMethod]}</span>
                </div>
                <div className='flex justify-between font-bold text-lg'>
                  <span>Total</span>
                  <span>৳{calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              onClick={handleSubmit}
              className='bg-[#F16334] py-3 rounded w-full text-white'
            >
              অর্ডার কনফার্ম করুন
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
