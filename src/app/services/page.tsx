import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesPageHero from '@/components/services/ServicesPageHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata = {
  title: 'Services | Buildrix — Digital Architecture Studio',
  description:
    'Architectural precision in digital development: web platforms, landing pages, full stack, dashboards, and API integration.',
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-buildrix-base text-buildrix-ivory">
      <Navbar className="fixed left-0 right-0 top-0 z-[100]" />
      <div className="flex min-h-0 flex-1 flex-col pt-[4.5rem]">
        <ServicesPageHero />
        <ServicesGrid />
        <ServicesCTA />
        <Footer className="mt-auto" />
      </div>
    </main>
  );
}
