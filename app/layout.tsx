import Navbar from './components/Navbar';
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
