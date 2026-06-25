import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SolutionOverview from '@/components/SolutionOverview';
import BusinessValue from '@/components/BusinessValue';
import UserJourney from '@/components/UserJourney';
import Architecture from '@/components/Architecture';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SolutionOverview />
        <BusinessValue />
        <UserJourney />
        <Architecture />
      </main>
      <Footer />
    </>
  );
}
