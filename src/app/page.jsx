"use client";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import AppLayout from "./components/cards/apps/AppLayout";
// Dynamically import all heavy components
const Aboutus = dynamic(() => import("./components/cards/Aboutus"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>,
});

const Gallery = dynamic(() => import("./components/cards/Gallery/Gallery"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>,
});

const Team = dynamic(() => import("./components/cards/Team"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>,
});

const TestimonialCarousel = dynamic(() => import("./components/cards/Textimonial"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>,
});

const Footer = dynamic(() => import("./components/common/Footer"), {
  loading: () => <div className="h-48 bg-gray-800 animate-pulse"></div>,
});

const HeroSection = dynamic(() => import("./components/layouts/HeroSection"));
const Services = dynamic(() => import("./components/layouts/Services"));
const Navbar = dynamic(() => import("./components/layouts/Navbar"));

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box maxWidth={'1600px'} mx={'auto'} >
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
<AppLayout />
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
    </Box>
  );
}