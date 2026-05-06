import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutPrinciples from '@/components/about/AboutPrinciples';
import AboutCapabilities from '@/components/about/AboutCapabilities';
import AboutCommissions from '@/components/about/AboutCommissions';
import AboutStudioCTA from '@/components/about/AboutStudioCTA';

export const metadata = {
  title: 'About | Buildrix — Precision-Led Design Studio',
  description:
    'Architectural principles, enduring systems, and selected commissions. A precision-led studio building digital infrastructure for longevity.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-buildrix-base text-buildrix-ivory">
      <Navbar className="fixed left-0 right-0 top-0 z-[100]" />
      <div className="flex min-h-0 flex-1 flex-col pt-[4.5rem]">
        <AboutHero />
        <AboutPrinciples />
        <AboutCapabilities />
        <AboutCommissions />
        <AboutStudioCTA />
        <Footer className="mt-auto border-t border-buildrix-steel/15" />
      </div>
    </main>
  );
}
