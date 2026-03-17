"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "@/app/firebase";

const Services = () => {
    const theme = useTheme();
    const [service, setServices] = useState([])

    const getDocuments = async () => {
        const serviceRef = query(collection(db, "services"));
        const docs = await getDocs(serviceRef);
        const allData = docs.docs.map((doc)=>doc.data())
        setServices(allData)
    };

    React.useEffect(() => {
        getDocuments()
    },[])
    return (
        <Container
            id='services'
            sx={{
                textAlign: 'center',
                my: { xs: 3, sm: 4, md: 6 },
                px: { xs: 1, sm: 3, md: 4, lg: 6, xl: 8 },
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

            {/* Services Section */}
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 2, sm: 3, md: 4 },
                mb: { xs: 2, sm: 3 }
            }}>
                {service.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            flex: '1 1',
                            minHeight: '250px',
                            maxHeight: '350px',
                            minWidth: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 22px)' },
                            maxWidth: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.333% - 22px)' },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            p: { xs: 1, sm: 3 },
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



        </Container>
    );
};

export default Services;