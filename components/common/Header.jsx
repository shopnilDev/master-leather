import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Header () {
  return (
    <header className='bg-white shadow'>
      <nav className='mx-auto px-6 py-3 container'>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-gray-800 text-xl'>
            <Link href={'/'}>Master Leather</Link>
          </div>
          <div className='md:flex space-x-4 hidden'>
            <Link href={'/'} className='text-gray-800 hover:text-gray-600'>
              Home
            </Link>
            <Link
              href={'/'}
              className='text-gray-800 hover:text-gray-600'
            >
              Products
            </Link>
            {/* <Link
              href='#categories'
              className='text-gray-800 hover:text-gray-600'
            >
              Categories
            </Link> */}
            {/* <Link href='#about' className='text-gray-800 hover:text-gray-600'>
              About
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  )
}
