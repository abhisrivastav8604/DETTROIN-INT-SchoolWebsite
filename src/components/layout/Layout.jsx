import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
