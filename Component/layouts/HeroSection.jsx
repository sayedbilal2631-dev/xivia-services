"use client"
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

const HeroSection = () => {
    const [fade, setFade] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [para, setPara] = useState(true);
    const handlePara = () => {
        setPara(() => para === true ? false : true);
    }
    setTimeout(() => {
        handlePara();
    }, 4000)
    useEffect(() => {
        setFade(true);
        const timeout = setTimeout(() => setFade(false), 300);
        return () => clearTimeout(timeout);
    }, [para]);
    return (
        <Box
            id='herosection'
            sx={{
                position: 'relative',
                width: '100%',
                height: {
                    xs: '550px',
                    sm: '600px',
                    md: '650px',
                },
                backgroundImage: "url('/images/herosection.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                gap: 2,
                px: {
                    xs: 2,
                    sm: 4,
                    md: 6,
                },
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography
                    variant={isSmallScreen ? "h3" : "h2"}
                    sx={{
                        fontWeight: "bold",
                        lineHeight: 1.2,
                        mb: 2,
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        opacity: fade ? 0 : 1,
                        transition: "opacity 0.4s ease-in-out",
                    }}
                >
                    {para
                        ? "Transform Your Digital Presence"
                        : "Where Innovation Meets Exceptional Results"}
                </Typography>

                {/* Subheading */}
                <Typography
                    variant={isSmallScreen ? "h5" : "h4"}
                    sx={{
                        fontWeight: 600,
                        mb: 1,
                        textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                        transition: "all 0.4s ease-in-out",
                    }}
                >
                    Plugging Great Ideas {!isSmallScreen && <br />} Into Your Brand
                </Typography>

                {/* Paragraph */}
                <Typography
                    variant={isSmallScreen ? "body2" : "body1"}
                    sx={{
                        mb: 3,
                        maxWidth: "800px",
                        textShadow: "0 1px 1px rgba(0,0,0,0.1)",
                        opacity: fade ? 0 : 1,
                        transition: "opacity 0.4s ease-in-out",
                    }}
                >
                    {para
                        ? "We craft digital experiences that drive growth and captivate audiences"
                        : "Specialists in turning visionary concepts into high-performing digital solutions"}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    gap: 2,
                    justifyContent: 'center'
                }}>
                    <Button
                        variant="contained"
                        size={isSmallScreen ? 'medium' : 'large'}
                        sx={{
                            width: {
                                xs: '100%',
                                sm: 'auto'
                            },
                            bgcolor: 'primary.main',
                            '&:hover': {
                                bgcolor: 'primary.dark',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        START YOUR PROJECT TODAY
                    </Button>
                    <Button
                        variant="outlined"
                        size={isSmallScreen ? 'medium' : 'large'}
                        sx={{
                            color: 'white',
                            borderColor: 'white',
                            width: {
                                xs: '100%',
                                sm: 'auto'
                            },
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderColor: 'white',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 8px rgba(255,255,255,0.1)'
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <Box component={'a'} href='#gallery'>EXPLORE OUR WORK →</Box>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;