// NavbarItem.tsx
import Link from 'next/link';
import React from 'react';

interface NavbarItemProps {
  name: string;
  link: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ name, link }) => {
  return (
    <Link href={link}>
      <li className="navbar-item">{name}</li>
    </Link>
  );
};

export default NavbarItem;
