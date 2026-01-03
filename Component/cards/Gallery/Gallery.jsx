"use client";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import GalleryRight from "./GalleryRight";
import GalleryLeft from "./GalleryLeft";
import { db } from "@/app/firebase"; 


const Gallery = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const fetchProjects = async () => {
    const galleryCol = collection(db, "gallery");
    const snapshot = await getDocs(galleryCol);
    const data = snapshot.docs.map(doc => doc.data());
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleNext = () => setCurrentIndex(prev => (projects.length ? (prev === projects.length - 1 ? 0 : prev + 1) : 0));
  const handlePrev = () => setCurrentIndex(prev => (projects.length ? (prev === 0 ? projects.length - 1 : prev - 1) : 0));

  useEffect(() => {
    if (!projects.length) return;
    const timer = setTimeout(handleNext, 10000);
    return () => clearTimeout(timer);
  }, [currentIndex, projects]);

  if (!projects.length) return null; 

  const images = projects.map(p => p.link); 

  return (
    <Box
      id="gallery"
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row" },
        background: `url('https://www.transparenttextures.com/patterns/dark-matter.png'), linear-gradient(120deg, #031027, #051a3a)`,
        backgroundSize: "cover",
        p: { xs: 1, sm: 3, md: 4, lg: 6, xl: 8 },
        color: "#fff",
        gap: { xs: 3, md: 6 },
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <GalleryLeft onPrev={handlePrev} onNext={handleNext} />
      <GalleryRight  projects={projects} currentIndex={currentIndex} />
    </Box>
  );
};

export default Gallery;
