'use client';

import { usePathname } from 'next/navigation';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noLayoutRoutes = ['/Navigation'];

  const shouldUseLayout = !noLayoutRoutes.includes(pathname);

  if (!shouldUseLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}