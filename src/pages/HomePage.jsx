import { Hero } from '../components/home/Hero';
import { BeliefStrip } from '../components/home/BeliefStrip';
import { FoundingStory } from '../components/home/FoundingStory';
import { PillarsGrid } from '../components/home/PillarsGrid';
import { Testimonials } from '../components/home/Testimonials';
import { NewsPreview } from '../components/home/NewsPreview';
import { AdmissionCTA } from '../components/home/AdmissionCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <BeliefStrip />
      <FoundingStory />
      <PillarsGrid />
      <Testimonials />
      <NewsPreview />
      <AdmissionCTA />
    </>
  );
}
