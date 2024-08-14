import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import logo from "../../app/Logo.png"

const header = () => {



  return (
    <header className="text-gray-800 bg-slate-200 py-4 px-6 flex items-center justify-between">
  <div className="flex items-center">
    
    <Link href="/" className="flex items-center">
    <div className='flex space-x-4'>
        <Image src={logo} width={50} height={50} alt="GigNook">
        </Image>
        </div>
      {/* <img src="/logo.png" alt="Logo" className="h-8 mr-2" /> */}
      <span className="text-lg font-semibold">GigNook</span>
    </Link>
    
    <nav className="ml-8">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
  <div>
    {/* {!user ? ( */}
      <div className="flex items-center">
        <Link href="/login" className="mr-4 hover:text-gray-300">
          Log In
        </Link>
        <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Sign Up
        </Link>
      </div>
    {/* ) : ( */}
      {/* <div className="flex items-center">
        <span className="mr-4">Welcome, {user.name}!</span>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          Log Out
        </button>
      </div> */}
    {/* )} */}
  </div>
</header>
  )
}

export default header
