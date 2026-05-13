import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';
import BookingModal from './components/BookingModal';
import { ThemeProvider } from './context/ThemeContext';
import { BookingProvider } from './context/BookingContext';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), isMobile ? 600 : 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      <BookingProvider>
        <MotionConfig reducedMotion={isMobile ? 'always' : 'user'}>
          <LoadingScreen visible={loading} />
          <BookingModal />
          <MainLayout>
            <Home />
          </MainLayout>
        </MotionConfig>
      </BookingProvider>
    </ThemeProvider>
  );
};

export default App;
