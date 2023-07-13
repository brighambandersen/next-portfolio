import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { pages } from '../data';

function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav className='bg-primary'>
      <ul className=' flex flex-row'>
        {pages.map((page) => (
          <li
            key={page.name}
            className={
              currentPath === page.path
                ? 'bg-whiteGray text-primary font-bold'
                : 'hover:bg-primaryLight text-whiteGray'
            }
          >
            <Link
              href={page.path}
              className='flex justify-evenly items-center tracking-wider p-4'
            >
              <div>{page.icon}</div>
              <div className='pl-2 hidden sm:block'>{page.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
