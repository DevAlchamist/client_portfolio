import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CapabilitiesSlabs from '@/components/CapabilitiesSlabs';
import SelectedBlueprints from '@/components/SelectedBlueprints';
import MethodologySection from '@/components/MethodologySection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-buildrix-base text-buildrix-ivory">
      <Navbar className="fixed left-0 right-0 top-0 z-[100]" />
      <div className="flex min-h-0 flex-1 flex-col pt-[4.5rem]">
        <HeroSection />
        <CapabilitiesSlabs />
        <SelectedBlueprints />
        <MethodologySection />
        <ReviewsSection />
        <ContactSection />
        <Footer className="mt-auto" />
      </div>
    </main>
  );
}
