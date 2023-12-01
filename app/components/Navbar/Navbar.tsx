// components/Navbar.tsx
import React from 'react'
import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="icon">🌟</span> Your Logo
      </div>
      <div
        className="nav-links"
        style={{ justifyContent: 'space-between', width: 'full' }}
      >
        <p style={{ marginRight: '15px' }}>
          <Link href="/login">Login</Link>
        </p>
        <p style={{ marginRight: '15px' }}>
          <Link href="/register">Register</Link>
        </p>
        <p style={{ marginRight: '15px' }}>
          <Link href="/dashboard">Dashboard</Link>
        </p>
        <p style={{ marginRight: '15px' }}>
          <Link href="/blog">blog</Link>
        </p>
        <p style={{ marginRight: '15px' }}>
          <Link href="">Logout</Link>
        </p>
      </div>
    </nav>
  )
}

export default Navbar
