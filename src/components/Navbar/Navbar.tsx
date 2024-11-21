// Navbar.tsx
import Image from 'next/image';
import React from 'react';
import OrderButton from '../Buttons/OrderButton';
import { FaCoffee } from 'react-icons/fa';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
          className="navbar-logo"
        >
          <Image src="/images/logo/1.png" alt="Logo" width={50} height={50} />
          CoffeeLover
        </div>

        <nav className="navbar-links">
          <Link href="/" className="navbar-link">
            Home
          </Link>
          <Link href="/services" className="navbar-link">
            Services
          </Link>
          <Link href="/testimonials" className="navbar-link">
            Testimonials
          </Link>
          <Link href="/contact" className="navbar-link">
            Contact
          </Link>
        </nav>

        <div data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
          <OrderButton icon={FaCoffee} label="Order" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
