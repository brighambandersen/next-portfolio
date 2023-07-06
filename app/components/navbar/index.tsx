import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { pages } from '../../data';
import styles from './navbar.module.css';

function Navbar() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarItems}>
        {pages.map((page) => (
          <li
            key={page.name}
            className={currentPath === page.path ? styles.active : ''}
          >
            <Link href={page.path}>
              <div>
                <div>{page.icon}</div>
                <div>{page.name}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
// {/* //   {pages.map((page) => (
// //     <Link key={page.name} href={page.path}>
// //       <div>
// //         <div>{page.icon}</div>
// //         <div>{page.name}</div>
// //       </div>
// //     </Link>
// //   ))} */}

export default Navbar;
