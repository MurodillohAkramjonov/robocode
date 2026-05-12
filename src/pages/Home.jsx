import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import About from '../sections/About';
import Activities from '../sections/Activities';
import WeeklyFormat from '../sections/WeeklyFormat';
import Results from '../sections/Results';
import Comparison from '../sections/Comparison';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';

/**
 * Landing page composition — section order is the user-visible flow.
 * Each section is self-contained and reads from `src/data/*`.
 */
const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Activities />
      <WeeklyFormat />
      <Results />
      <Comparison />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default Home;
