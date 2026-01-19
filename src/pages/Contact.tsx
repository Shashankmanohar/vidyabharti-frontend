import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

const Contact = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <PageHero title="Contact Us" subtitle="Get in touch for admissions and inquiries" breadcrumb="Contact" />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Contact;
