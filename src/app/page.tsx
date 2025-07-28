import Hero from '@/components/Hero';
import WhatICraft from '@/components/WhatICraft';
import WhyChooseUsScroll from '@/components/WhyChooseUsScroll';
import MeetTheDevelopers from '@/components/MeetTheDevelopers';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <main className="bg-[#0F111A] text-white overflow-x-hidden">
      <CustomCursor />
      <SmoothScroll>
        <Hero />
        <WhatICraft />
        <Projects />
        <WhyChooseUsScroll />
        <MeetTheDevelopers />
        <Contact />

        {/* Footer */}
        <footer className="py-8 text-center text-[#A0AEC0] text-sm border-t border-[#1A1C26]">
          <p>Built with Next.js, Tailwind CSS, Framer Motion | SEO Optimized | Fully Responsive</p>
          <p className="mt-2">© 2025 - Crafted with code and caffeine ☕</p>
        </footer>
      </SmoothScroll>
    </main>
  );
}