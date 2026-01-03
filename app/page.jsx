"use client";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

// Dynamically import all heavy components
const Aboutus = dynamic(() => import("@/Component/cards/Aboutus"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>,
});

const Gallery = dynamic(() => import("@/Component/cards/Gallery/Gallery"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>,
});

const Team = dynamic(() => import("@/Component/cards/Team"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>,
});

const TestimonialCarousel = dynamic(() => import("@/Component/cards/Textimonial"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>,
});

const Footer = dynamic(() => import("@/Component/common/Footer"), {
  loading: () => <div className="h-48 bg-gray-800 animate-pulse"></div>,
});

const HeroSection = dynamic(() => import("@/Component/layouts/HeroSection"));
const Services = dynamic(() => import("@/Component/layouts/Services"));
const Navbar = dynamic(() => import("@/Component/layouts/Navbar"));

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Navbar />

      {/* Hero Section - Keep immediate load */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <HeroSection />
      </motion.div>

      {/* Services */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Services />
      </motion.div>

      {/* Gallery */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Gallery />
      </motion.div>

      {/* About Us */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Aboutus />
      </motion.div>

      {/* Testimonial Carousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <TestimonialCarousel />
      </motion.div>

      {/* Team */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Team />
      </motion.div>

      {/* Footer */}
      <Footer />
    </>
  );
}