import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/resume'>Resume</Link>
      </li>
      <li>
        <Link href='/projects'>Projects</Link>
      </li>
      <li>
        <Link href='/designs'>Designs</Link>
      </li>
      <li>
        <Link href='/contact'>Contact</Link>
      </li>
    </ul>
  );
}

export default Navbar;
