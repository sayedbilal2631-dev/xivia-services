"use client";
import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    IconButton,
    Card,
    CardContent,
    useTheme,
    useMediaQuery
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion, AnimatePresence } from "framer-motion";

const projectImages = [
    "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=400",
];

const projects = [
    {
        title: "Fintech Mobile App",
        description: "Redesigned banking experience with 40% faster transactions",
        category: "Mobile Development",
        client: "Global Bank Inc."
    },
    {
        title: "E-commerce Platform",
        description: "Scalable solution handling 10,000+ daily transactions",
        category: "Web Development",
        client: "UrbanStyle Retail"
    },
    {
        title: "Healthcare Dashboard",
        description: "Real-time patient monitoring system with AI analytics",
        category: "SaaS Solution",
        client: "MediCare Systems"
    }
];

const Gallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleNext = () => {
        setCurrentImageIndex((prev) =>
            prev === projectImages.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrev = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? projectImages.length - 1 : prev - 1
        );
    };

    return (
        <Box
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
            {/* Left Section */}
            <Box sx={{
                flex: 1,
                maxWidth: { xs: "100%", sm: "80%", md: "450px", lg: "500px", xl: "550px" },
                textAlign: { xs: "center", md: "left" },
                px: { xs: 1, sm: 2, md: 3 },
                py: { xs: 9, md: 0 },
                order: { xs: 1, sm: 0 }
            }}>
                <Typography
                    sx={{
                        color: "#3db8ff",
                        fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" },
                        textTransform: "uppercase",
                        letterSpacing: 1,
                    }}
                >
                    Our Portfolio
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        lineHeight: 1.2,
                        mt: 1,
                        mb: 2,
                        fontSize: {
                            xs: "1.4rem",
                            sm: "1.6rem",
                            md: "2rem",
                            lg: "2.3rem",
                            xl: "2.5rem"
                        },
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                >
                    Transforming Visions Into{" "}
                    <Box component="span" sx={{ color: "#3db8ff" }}>
                        Digital Success
                    </Box>
                </Typography>
                <Typography
                    sx={{
                        color: "rgba(255,255,255,0.7)",
                        mb: { xs: 3, md: 4 },
                        lineHeight: 1.6,
                        fontSize: {
                            xs: "0.8rem",
                            sm: "0.85rem",
                            md: "0.9rem",
                            lg: "1rem"
                        },
                    }}
                >
                    Explore our award-winning projects that have helped clients achieve
                    measurable results and exceptional user experiences across industries.
                </Typography>

                {/* Arrows */}
                <Box sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: { xs: "center", md: "flex-start" },
                    mb: { xs: 2, md: 0 }
                }}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                background: "rgba(255,255,255,0.1)",
                                border: "2px solid rgba(255,255,255,0.2)",
                                color: "#fff",
                                "&:hover": { background: "#1a97db" },
                                width: { xs: 36, sm: 40, md: 44, lg: 48 },
                                height: { xs: 36, sm: 40, md: 44, lg: 48 },
                            }}
                        >
                            <ChevronLeftIcon fontSize="small" />
                        </IconButton>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <IconButton
                            onClick={handleNext}
                            sx={{
                                background: "rgba(255,255,255,0.1)",
                                border: "2px solid rgba(255,255,255,0.2)",
                                color: "#fff",
                                "&:hover": { background: "#1a97db" },
                                width: { xs: 36, sm: 40, md: 44, lg: 48 },
                                height: { xs: 36, sm: 40, md: 44, lg: 48 },
                            }}
                        >
                            <ChevronRightIcon fontSize="small" />
                        </IconButton>
                    </motion.div>
                </Box>
            </Box>

            {/* Right Section */}
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
                    order: { xs: 0, sm: 1 }
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={projectImages[currentImageIndex]}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "relative"
                        }}
                    >
                        <motion.img
                            src={projectImages[currentImageIndex]}
                            alt={`Project ${currentImageIndex + 1}`}
                            style={{
                                width: "100%",
                                minHeight: { xs: "250px", sm: "300px" },
                                height: { xs: "250px", sm: "300px", md: "350px", lg: "400px", xl: "450px" },
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
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Card
                        sx={{
                            position: "absolute",
                            right: { xs: "50%", md: "-20px", lg: "-30px", xl: "-40px" },
                            bottom: { xs: "-150px", sm: "-15px", lg: "-20px", xl: "-25px" },
                            transform: { xs: "translateX(50%)", md: "none" },
                            width: {
                                xs: "85%",
                                sm: "75%",
                                md: "320px",
                                lg: "350px",
                                xl: "380px"
                            },
                            boxShadow: "0px 20px 50px rgba(0,0,0,0.4)",
                            borderRadius: "12px",
                            background: "rgba(255,255,255,0.95)",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <CardContent sx={{
                            p: {
                                xs: 1.5,
                                sm: 2,
                                md: 2.5
                            }
                        }}>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "0.75rem",
                                        sm: "0.8rem",
                                        md: "0.85rem"
                                    },
                                    color: "#3db8ff",
                                    mb: 0.5,
                                    fontWeight: "bold"
                                }}
                            >
                                {projects[currentImageIndex].client}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    lineHeight: 1.3,
                                    mb: 1,
                                    fontSize: {
                                        xs: "0.9rem",
                                        sm: "1rem",
                                        md: "1.1rem",
                                        lg: "1.2rem",
                                        xl: "1.25rem"
                                    },
                                }}
                            >
                                {projects[currentImageIndex].title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "0.7rem",
                                        sm: "0.75rem",
                                        md: "0.8rem",
                                        lg: "0.85rem"
                                    },
                                    color: "text.secondary",
                                    mb: 1.5,
                                    lineHeight: 1.5,
                                }}
                            >
                                {projects[currentImageIndex].description}
                            </Typography>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        background: "#3db8ff",
                                        textTransform: "none",
                                        fontWeight: "bold",
                                        fontSize: {
                                            xs: "0.7rem",
                                            sm: "0.8rem",
                                            md: "0.85rem",
                                            lg: "0.9rem"
                                        },
                                        px: { xs: 1.5, sm: 2, md: 2.5 },
                                        py: { xs: 0.5, sm: 1 },
                                        "&:hover": { background: "#1a97db" },
                                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                                    }}
                                >
                                    View Case Study
                                </Button>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </Box>
        </Box>
    );
};

export default Gallery;