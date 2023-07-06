import Navbar from './components/navbar';
import './globals.css';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default RootLayout;
