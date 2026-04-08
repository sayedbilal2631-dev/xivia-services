"use client";

import { collection, getDocs } from "firebase/firestore";
import { Box, Typography} from "@mui/material";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import { db } from "../../../firebase";
import Slider from "react-slick";
import AppCard from "./AppCard"; 

const AppLayout = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        const fetchApps = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "apps"));

                const appsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setApps(appsData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApps();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                background: "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
                py: { xs: 8, md: 12 },
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: -40,
                    left: -60,
                    width: 220,
                    height: 220,
                    bgcolor: "rgba(14,165,233,0.16)",
                    borderRadius: "50%",
                    filter: "blur(60px)",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    bottom: -60,
                    right: -40,
                    width: 240,
                    height: 240,
                    bgcolor: "rgba(59,130,246,0.14)",
                    borderRadius: "50%",
                    filter: "blur(70px)",
                }}
            />
            <Box
                sx={{
                    position: "relative",
                    maxWidth: 1200,
                    mx: "auto",
                    px: { xs: 2, md: 4 },
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        mb: { xs: 5, md: 8 },
                        mx: "auto",
                        maxWidth: 780,
                    }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: "#0ea5e9",
                            letterSpacing: 2,
                            fontWeight: 700,
                            mb: 1,
                            display: "inline-block",
                        }}
                    >
                        Featured Apps
                    </Typography>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontWeight: 800,
                            color: "#0f172a",
                            mb: 2,
                            fontSize: {
                                xs: "2rem",
                                sm: "2.5rem",
                                md: "3rem",
                            },
                            lineHeight: 1.05,
                        }}
                    >
                        Recent launches that showcase our digital excellence.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#475569",
                            fontSize: {
                                xs: "0.95rem",
                                sm: "1rem",
                                md: "1.05rem",
                            },
                            lineHeight: 1.8,
                        }}
                    >
                        Explore the newest applications designed to engage users, accelerate growth, and elevate your online brand.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: "relative",
                        px: { xs: 0, sm: 1 },
                        "& .slick-dots": {
                            bottom: -28,
                        },
                        "& .slick-dots li button:before": {
                            color: "#94a3b8",
                            fontSize: "10px",
                        },
                        "& .slick-dots li.slick-active button:before": {
                            color: "#0ea5e9",
                            opacity: 1,
                        },
                        "& .slick-slide": {
                            px: { xs: 0.5, sm: 1 },
                        },
                    }}
                >
                    <Slider {...settings}>
                        {apps.map((app) => (
                            <Box
                                key={app.id}
                                sx={{
                                    px: 1,
                                    py: 2,
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <AppCard
                                    app={app}
                                />
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>
        </Box>
    );
};

export default AppLayout;