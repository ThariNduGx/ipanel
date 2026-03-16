import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartSidebar } from './CartSidebar';

interface PageShellProps {
  children: ReactNode;
  /** Skip scroll-to-top padding used by floating Navbar (default true) */
  withNavPad?: boolean;
}

export function PageShell({ children, withNavPad = true }: PageShellProps) {
  return (
    <>
      <Navbar />
      <CartSidebar />
      <div className={withNavPad ? 'pt-0' : ''}>
        {children}
      </div>
      <Footer />
    </>
  );
}
