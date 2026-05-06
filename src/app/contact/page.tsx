import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactPageContent from '@/components/contact/ContactPageContent';

export const metadata = {
  title: 'Contact | Buildrix — Start Your Project',
  description:
    'Tell us what you want to build. High-precision development and architectural software design. Typical response within 24 business hours.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-buildrix-base text-buildrix-ivory">
      <Navbar className="fixed left-0 right-0 top-0 z-[100]" />
      <div className="flex min-h-0 flex-1 flex-col pt-[4.5rem]">
        <ContactPageContent />
        <Footer className="mt-auto border-t border-buildrix-steel/15" />
      </div>
    </main>
  );
}
