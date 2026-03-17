"use client";
import { db } from "@/app/firebase";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const GalleryLeft = ({ onPrev, onNext }) => {
    const [galleryText, setGalleryText] = useState([]);

    useEffect(() => {
        const getGallery = async () => {
            try {
                const getRef = await collection(db, "gallery-text");
                const docs = await getDocs(getRef);
                const data = docs.docs.map((el) => ({
                    id: el.id,
                    ...el.data(),
                }));
                setGalleryText(data);
            } catch (error) {
                console.error("Error fetching gallery:", error);
            }
        };

        getGallery();
    }, []);

    return (
        <Box
            sx={{
                flex: 1,
                maxWidth: { xs: "100%", sm: "80%", md: "450px", lg: "500px", xl: "550px" },
                textAlign: { xs: "center", md: "left" },
                px: { xs: 1, sm: 2, md: 3 },
                py: { xs: 9, md: 0 },
                order: { xs: 1, sm: 0 },
            }}
        >
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
            {galleryText.map((item) => (
                <React.Fragment key={item.id}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            lineHeight: 1.2,
                            mt: 1,
                            mb: 2,
                            fontSize: { xs: "1.4rem", sm: "1.6rem", md: "2rem", lg: "2.3rem", xl: "2.5rem" },
                            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        }}
                    >
                        {item.title}{" "}
                    </Typography>
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.7)",
                            mb: { xs: 3, md: 4 },
                            lineHeight: 1.6,
                            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem", lg: "1rem" },
                        }}
                    >
                        {item.description}
                    </Typography>
                </React.Fragment>
            ))}

            {/* Arrows */}
            <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "center", md: "flex-start" }, mb: { xs: 2, md: 0 } }}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <IconButton
                        onClick={onPrev}
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
                        onClick={onNext}
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
    );
};

export default GalleryLeft;
