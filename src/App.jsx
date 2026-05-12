import { useEffect, useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';

/**
 * App root.
 * - Shows the LoadingScreen briefly on first mount.
 * - Wraps the home page in MainLayout (navbar / footer / floating helpers).
 *
 * Future routing: drop in react-router or Next file routing here.
 */
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingScreen visible={loading} />
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
};

export default App;
