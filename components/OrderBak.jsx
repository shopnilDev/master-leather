'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CircleCheck, LockKeyhole, Play } from 'lucide-react'

export default function Order({ productData }) {
  const [quantities, setQuantities] = useState(
    productData.variants.reduce((acc, variant) => {
      acc[variant.id] = 0
      return acc
    }, {})
  )
  const [shippingMethod, setShippingMethod] = useState('inside')
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    mobile: '',
    address: ''
  })

  // Update quantity for a specific variant
  const handleQuantityChange = (variant, change) => {
    setQuantities(prev => ({
      ...prev,
      [variant]: Math.max(0, prev[variant] + change)
    }))
  }

  // Handle billing details input changes
  const handleBillingDetailsChange = e => {
    const { name, value } = e.target
    setBillingDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Calculate total price including shipping
  const subtotal = productData.variants.reduce((acc, variant) => {
    return acc + variant.price * quantities[variant.id]
  }, 0)
  const total = subtotal + productData.shippingRates[shippingMethod]

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    // Here need to add API process the order
    console.log('Order submitted:', {
      quantities,
      shippingMethod,
      billingDetails,
      total
    })
  }

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
            {productData.title}
          </h2>
        </div>

        <div data-aos='zoom-in-up'>
          <div className='space-y-2 md:space-y-4 mb-6 md:mb-10 font-[500] text-gray-600 text-sm'>
            {productData.notes.map((note, index) => (
              <div key={index} className='flex md:items-center gap-2'>
                <CircleCheck size={16} color='#ee4f4f' />
                <p>{note}</p>
              </div>
            ))}
          </div>
          <div className='mb-8 text-[#555555]'>
            <h3 className='mb-5 font-bold text-lg leading-6'>
              কালার সিলেক্ট করুনঃ
            </h3>
            <div className='gap-4 grid grid-cols-1 md:grid-cols-2'>
              {productData.variants.map(variant => (
                <div
                  key={variant.id}
                  className='border-gray-300 p-2 sm:p-4 border rounded-lg'
                >
                  <div className='flex items-center gap-2 sm:gap-4'>
                    <Image
                      src={variant.imageSrc}
                      alt={`${variant.name} Wallet`}
                      width={80}
                      height={80}
                      className='border-gray-200 border rounded-lg'
                    />
                    <div className='flex-1'>
                      <h4 className='font-semibold text-[12px] sm:text-[16px]'>
                        {variant.name}
                      </h4>
                      <div className='flex sm:flex-row flex-col md:justify-center md:items-center gap-2 sm:gap-4 mt-2'>
                        <div className='flex items-center'>
                          <button
                            type='button'
                            onClick={() => handleQuantityChange(variant.id, -1)}
                            className='flex justify-center items-center border-gray-300 bg-gray-50 hover:bg-gray-100 border border-r-0 rounded-l w-5 sm:w-8 h-5 sm:h-8 text-gray-600'
                          >
                            -
                          </button>
                          <input
                            type='number'
                            min='0'
                            value={quantities[variant.id]}
                            onChange={e =>
                              setQuantities(prev => ({
                                ...prev,
                                [variant.id]: Math.max(
                                  0,
                                  parseInt(e.target.value) || 0
                                )
                              }))
                            }
                            className='border-gray-300 border w-16 h-5 sm:h-8 text-center text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [appearance:textfield]'
                          />
                          <button
                            type='button'
                            onClick={() => handleQuantityChange(variant.id, 1)}
                            className='flex justify-center items-center border-gray-300 bg-gray-50 hover:bg-gray-100 border border-l-0 rounded-r w-5 sm:w-8 h-5 sm:h-8 text-gray-600'
                          >
                            +
                          </button>
                        </div>
                        <span className='font-semibold text-[10px]'>
                          ৳{variant.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='gap-6 grid md:grid-cols-2 text-[#333333]'>            
            <div>
              <h3 className='mb-5 font-semibold text-xl'>BILLING DETAILS</h3>
              <div className='space-y-4'>
                {[{ label: 'আপনার নাম', name: 'name', required: true },
                { label: 'মোবাইল নাম্বার', name: 'mobile', required: true, type: 'tel' },
                { label: 'ঠিকানা লিখুন', name: 'address', required: true }]
                  .map(({ label, name, required, type = 'text' }, index) => (
                    <div key={index}>
                      <label className='block mb-1 text-gray-600 text-sm'>
                        {label}
                        {required && (<span className='ml-1 text-[#E2260A] text-lg'>*</span>)}
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
                <div>
                  <p className='text-[13px]'>Country / Region</p>
                  <p className='font-bold text-[15px]'>Bangladesh</p>
                </div>                
                <div className='mt-4'>
                  <h4 className='mb-2 font-semibold text-xl'>SHIPPING</h4>
                  <div className='space-y-2 border divide-y'>
                    {Object.entries(productData.shippingRates).map(([key, rate]) => (
                      <label key={key} className='flex items-center gap-2 px-4 py-3 text-[15px]'>
                        <input
                          type='radio'
                          name='shipping'
                          value={key}
                          checked={shippingMethod === key}
                          onChange={() => setShippingMethod(key)}
                          className='border-gray-300 w-4 h-4 accent-[#F16334]'
                        />
                        <span>{key === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka'}</span>
                        <span className='ml-auto font-bold'>
                          ৳{rate.toFixed(2)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>            
            <div>
              <h3 className='mb-4 font-medium'>YOUR ORDER</h3>
              <div className='border-gray-200 p-4 border rounded'>
                <div className='flex justify-between mb-4 pb-4 border-b'>
                  <span className='font-medium text-sm'>Product</span>
                  <span className='font-medium text-sm'>Subtotal</span>
                </div>
                <div className='divide-y'>
                  {productData.variants.map(variant => (
                    <div
                      key={variant.id}
                      className='flex justify-between gap-3 py-2 text-sm'
                    >
                      <div className='flex gap-4'>
                        <Image
                          src={variant.imageSrc}
                          alt={variant.name}
                          width={40}
                          height={40}
                          className='rounded-md'
                        />
                        <p>{variant.name}</p>
                      </div>
                      <span className='font-semibold'>
                        ৳{(variant.price * quantities[variant.id]).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className='flex justify-between mt-4'>
                  <span className='font-bold'>Total</span>
                  <span className='font-bold text-xl'>
                    ৳{total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>          
          <div className='mt-6'>
            <button
              type='submit'
              className='bg-[#F16334] py-3 rounded w-full text-white'
            >
              Submit Order
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
