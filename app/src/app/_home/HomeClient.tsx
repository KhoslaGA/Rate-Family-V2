'use client';

import EditorialHero from '@/components/editorial/EditorialHero';
import ThreeTierStrip from '@/components/editorial/ThreeTierStrip';
import LifeFunnel from '@/components/editorial/LifeFunnel';
import LearnModule from '@/components/editorial/LearnModule';
import CompareModule from '@/components/editorial/CompareModule';
import TrustPanel from '@/components/editorial/TrustPanel';
import HowWeMakeMoney from '@/components/editorial/HowWeMakeMoney';

export default function HomeClient() {
  return (
    <>
      <EditorialHero />
      <ThreeTierStrip />
      <LifeFunnel />
      <LearnModule />
      <CompareModule />
      <TrustPanel />
      <HowWeMakeMoney />
    </>
  );
}
