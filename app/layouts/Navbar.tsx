'use client'
import Link from 'next/link'
import { useState } from 'react'
import { MegaMenu } from './MegaMenu'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700">Gaibandha</Link>
        <ul className="hidden md:flex gap-8 items-center">
          <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
          <li className="relative group">
            <button className="hover:text-blue-500">Upozila ▼</button>
            <MegaMenu />
          </li>
          <li><Link href="/services" className="hover:text-blue-500">Services</Link></li>
          <li><Link href="/contact" className="hover:text-blue-500">Contact Us</Link></li>
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </nav>
  )
}