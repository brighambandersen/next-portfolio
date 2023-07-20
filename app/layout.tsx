import Navbar from './components/Navbar';
import './globals.css';
import Head from 'next/head';
import { BASE_WEBSITE_TITLE } from './data';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{BASE_WEBSITE_TITLE}</title>
      </Head>
      <body className='bg-whiteGray'>
        <Navbar />
        {children}
      </body>
    </>
  );
}

export default RootLayout;
