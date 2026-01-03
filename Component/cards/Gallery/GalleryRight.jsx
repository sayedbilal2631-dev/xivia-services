"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Card, CardContent, Typography } from "@mui/material";



const GalleryRight = ({  projects, currentIndex }) => {
    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
                maxWidth: { xs: "100%", sm: "80%", md: "550px", lg: "600px", xl: "650px" },
                height: { xs: "250px", sm: "300px", md: "350px", lg: "400px", xl: "450px" },
                minHeight: { xs: "250px", sm: "300px" },
                px: { xs: 1, sm: 2 },
                mb: { xs: 8, md: 0 },
                order: { xs: 0, sm: 1 },
            }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={projects[currentIndex]}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: "100%", height: "100%", position: "relative" }}
                >
                    <motion.img
                        src={projects[currentIndex].Image}
                        alt={`Project ${currentIndex + 1}`}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "16px",
                            objectFit: "cover",
                            boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
                            position: "absolute",
                        }}
                        whileHover={{ scale: 1.02 }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay Card */}
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                <Card
                    sx={{
                        position: "absolute",
                        right: { xs: "50%", md: "-20px", lg: "-30px", xl: "-40px" },
                        bottom: { xs: "-150px", sm: "-15px", lg: "-20px", xl: "-25px" },
                        transform: { xs: "translateX(50%)", md: "none" },
                        width: { xs: "85%", sm: "75%", md: "320px", lg: "350px", xl: "380px" },
                        boxShadow: "0px 20px 50px rgba(0,0,0,0.4)",
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.95)",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    <CardContent sx={{ p: { xs: 1.5, sm: 2, md: 2.5 } }}>
                        <Typography sx={{ fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" }, color: "#3db8ff", mb: 0.5, fontWeight: "bold" }}>
                            {projects[currentIndex].client}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: 1.3, mb: 1, fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem", lg: "1.2rem", xl: "1.25rem" } }}>
                            {projects[currentIndex].title}
                        </Typography>
                        <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem", lg: "0.85rem" }, color: "text.secondary", mb: 1.5, lineHeight: 1.5 }}>
                            {projects[currentIndex].description}
                        </Typography>
                        <Box
                            component="a"
                            href={projects[currentIndex].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: "inline-block",
                                textDecoration: "none",
                                background: "#3db8ff",
                                color: "#fff",
                                fontWeight: "bold",
                                cursor: "pointer",
                                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.85rem", lg: "0.9rem" },
                                px: { xs: 1.5, sm: 2, md: 2.5 },
                                py: { xs: 0.5, sm: 1 },
                                borderRadius: "4px",
                                "&:hover": { background: "#1a97db" },
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            }}
                        >
                            View Site
                        </Box>
                    </CardContent>
                </Card>
            </motion.div>
        </Box>
    );
};

export default GalleryRight;
