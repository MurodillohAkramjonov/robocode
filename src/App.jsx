import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';

// Mobileda (< 1024px) barcha Framer Motion animatsiyalarini o'chirish
const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mobileda loading ekranini qisqartirish
    const t = setTimeout(() => setLoading(false), isMobile ? 600 : 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion={isMobile ? 'always' : 'user'}>
        <LoadingScreen visible={loading} />
        <MainLayout>
          <Home />
        </MainLayout>
      </MotionConfig>
    </ThemeProvider>
  );
};

export default App;
