"use client";
import { motion } from "framer-motion";
import Aboutus from "@/Component/cards/Aboutus";
import Gallery from "@/Component/cards/Gallery";
import Team from "@/Component/cards/Team";
import TestimonialCarousel from "@/Component/cards/Textimonial";
import Footer from "@/Component/common/Footer";
import HeroSection from "@/Component/layouts/HeroSection";
import Navbar from "@/Component/layouts/Navbar";
import Services from "@/Component/layouts/Services";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
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
