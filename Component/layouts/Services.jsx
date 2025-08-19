"use client";
import { Box, Typography, useTheme } from "@mui/material";

const Services = () => {
    const theme = useTheme();

    const services = [
        {
            id: 1,
            icon: '/download4.svg',
            text: 'Web Development',
            detail: 'Transform your ideas into stunning, high-performance websites tailored to your business needs. Our expert developers create responsive, scalable, and secure web applications using the latest technologies like React, Node.js, and Laravel.',
            bgcolor: '#FFD873'
        },
        {
            id: 2,
            icon: '/download5.svg',
            text: 'Mobile Development',
            detail: 'Reach your audience on the go with sleek, high-speed mobile apps for iOS and Android. We design intuitive, feature-rich applications that enhance engagement, streamline operations, and drive growth—whether for startups or enterprises.',
            bgcolor: '#FF9B73'
        },
        {
            id: 3,
            icon: '/download6.svg',
            text: 'UI/UX Design',
            detail: 'Captivate users with visually stunning and highly functional interfaces. Our design team crafts pixel-perfect, user-centric experiences that boost conversions, improve usability, and reflect your brand identity flawlessly.',
            bgcolor: '#0099FF'
        },
        {
            id: 1,
            icon: '/download.svg',
            text: 'Digital Marketing',
            detail: 'Grow your brand, attract leads, and dominate your market with data-driven digital marketing strategies. From social media to PPC, we optimize campaigns for maximum ROI and long-term success.',
            bgcolor: '#0097EB'
        },
        {
            id: 2,
            icon: '/download2.svg',
            text: 'Cloud Solutions',
            detail: 'Scale effortlessly with secure, reliable cloud infrastructure tailored to your business. We provide seamless migration, storage, and deployment solutions to enhance efficiency and reduce costs.',
            bgcolor: '#39D5D2'
        },
        {
            id: 3,
            icon: '/download3.svg',
            text: 'SEO Optimization',
            detail: 'Dominate search rankings and drive organic traffic with our expert SEO strategies. We optimize your website for visibility, performance, and higher conversions through proven techniques.',
            bgcolor: '#7AC143'
        },
    ];

 

    return (
        <Box
        id='services'
         sx={{
            textAlign: 'center',
            my: { xs: 3, sm: 4, md: 6 },
            px: {xs: 2,sm: 3,md: 4,lg: 6,xl: 8},
            maxWidth: '1800px',
            mx: 'auto'
        }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row'
                    },
                    alignItems: 'center',
                    mb: { xs: 1, sm: 2 },
                    fontSize: {
                        xs: '1.5rem',
                        sm: '1.75rem',
                        md: '2rem',
                        lg: '2.125rem'
                    }
                }}
            >
                That Is The{" "}
                <Box
                    component="span"
                    sx={{
                        textDecoration: 'underline',
                        textDecorationColor: '#00AEEF',
                        textDecorationThickness: { xs: '2px', sm: '3px' },
                        ml: { xs: 0, sm: 1 },
                        mt: { xs: 0.5, sm: 0 },
                        color: 'inherit'
                    }}
                >
                    Best Service
                </Box>
            </Typography>

            <Typography
                variant="body1"
                mb={{ xs: 3, sm: 4, md: 5 }}
                sx={{
                    fontSize: {
                        xs: '0.875rem',
                        sm: '1rem'
                    }
                }}
            >
                Determine The Service You Need
            </Typography>

            {/* Services Section - Flexbox Implementation */}
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: { xs: 2, sm: 3, md: 4 },
                mb: { xs: 2, sm: 3 }
            }}>
                {services.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            flex: '1 1',
                            minWidth: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 22px)' },
                            maxWidth: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 22px)' },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: { xs: 2, sm: 3 },
                            height: '100%',
                            borderRadius: '12px',
                            bgcolor: 'background.paper',
                            boxShadow: theme.shadows[2],
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: theme.shadows[6]
                            }
                        }}
                    >
                        <Box component={'img'}
                            sx={{
                                p: { xs: 1.5, sm: 2 },
                                borderRadius: '8px',
                                backgroundColor: item.bgcolor,
                                width: { xs: 64, sm: 72, md: 80 },
                                height: { xs: 64, sm: 72, md: 80 },
                                mb: { xs: 1.5, sm: 2 },
                                objectFit: 'contain'
                            }}
                            src={item.icon}
                            alt={item.text}
                        />
                        <Typography
                            variant="h6"
                            fontWeight={'bold'}
                            gutterBottom
                            sx={{
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.125rem',
                                    md: '1.25rem'
                                }
                            }}
                        >
                            {item.text}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: {
                                    xs: '0.8125rem',
                                    sm: '0.875rem',
                                    md: '0.9375rem'
                                },
                                textAlign: 'center'
                            }}
                        >
                            {item.detail}
                        </Typography>
                    </Box>
                ))}
            </Box>

          
           
        </Box>
    );
};

export default Services;