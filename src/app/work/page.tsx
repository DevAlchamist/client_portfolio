import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioPageHero from '@/components/work/PortfolioPageHero';
import PortfolioGrid from '@/components/work/PortfolioGrid';

export const metadata = {
  title: 'Portfolio | Buildrix — Selected Projects',
  description:
    'Selected projects showcasing precision engineering, architectural clarity, and professional reliability.',
};

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-buildrix-base text-buildrix-ivory">
      <Navbar className="fixed left-0 right-0 top-0 z-[100]" />
      <div className="flex min-h-0 flex-1 flex-col pt-[4.5rem]">
        <PortfolioPageHero />
        <PortfolioGrid />
        <Footer className="mt-auto" />
      </div>
    </main>
  );
}
