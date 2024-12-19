
'use client';
// resopnsive
import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/", active: true },
    { name: "Menu", href: "/Manu" },
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="w-full bg-[#fff] fixed top-0 px-4 sm:px-6 lg:px-[15.62%] py-4 lg:py-7">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica z-10"
        >
          <div className='flex items-center'>
            <Image src="/foodieIcon.png" alt="foodie" width={30} height={30} className='mr-3'/>
            <span className="text-[#F03328]">Foo</span>
            <span className="text-[#FF9E0C]">die</span>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`
          fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
          lg:static lg:flex-row lg:bg-transparent lg:gap-[32px]
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}
        `}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-[16px] underline leading-6 ${item.active ? "text-[#F03328] font-bold" : "text-[#000]"
                  } font-inter hover:text-[#F03328] transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/" className="hover:text-[#FF9F0D] transition-colors">
            <Image src="/search.png" alt="search" width={24} height={24} />
          </Link>
          <Link href="/" className="hover:text-[#FF9F0D] transition-colors">
            <Image src="/user.png" alt="user" width={24} height={24} />
          </Link>
          {/* <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/tote.png" alt="cart" width={24} height={24} />
          </Link> */}
        </div>
      </nav>
    </header>
  )
}