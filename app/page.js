import Aboutus from "@/Component/cards/Aboutus";
import Gallery from "@/Component/cards/Gallery";
import Team from "@/Component/cards/Team";
import TestimonialCarousel from "@/Component/cards/Textimonial";
import Footer from "@/Component/common/Footer";
import HeroSection from "@/Component/layouts/HeroSection";
import Navbar from "@/Component/layouts/Navbar";
import Services from "@/Component/layouts/Services";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Gallery />
      <Aboutus />
      <TestimonialCarousel />
      <Team />
      <Footer />
    </>
  );
}
