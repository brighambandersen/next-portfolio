import Link from 'next/link';
import React from 'react';
import { pages } from '../data';

function Navbar() {
  return (
    <nav>
      {/* <ul> */}
      {pages.map((page) => (
        <Link key={page.name} href={page.path}>
          <div>
            <div>{page.icon}</div>
            <div>{page.name}</div>
          </div>
        </Link>
      ))}
      {/* <li>
          <Link href='/'></Link>
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
      </ul> */}
    </nav>
  );
}

export default Navbar;
