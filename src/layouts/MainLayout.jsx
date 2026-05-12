import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';
import FloatingCTA from '../components/FloatingCTA';
import BackgroundFX from '../components/BackgroundFX';

/**
 * Root layout: navbar + content + footer.
 * Hosts page-wide floating helpers (scroll progress, back-to-top, FAB).
 * Keeps `pages/*` declarative — they only render section content.
 */
const MainLayout = ({ children }) => {
  return (
    <>
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
      <BackToTop />
      <FloatingCTA />
    </>
  );
};

export default MainLayout;
