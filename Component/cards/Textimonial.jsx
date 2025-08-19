"use client";

import dynamic from "next/dynamic";
import { Box, Typography, Card, Avatar, Rating, useTheme, useMediaQuery } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
const testimonials = [
  {
    name: "Emily Rodriguez",
    position: "Marketing Director, TechStart",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Our website traffic increased by 200% after working with this team. Their strategic approach and attention to detail transformed our online presence beyond expectations."
  },
  {
    name: "James Chen",
    position: "CEO, Finova Solutions",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "The mobile app they developed helped us acquire 50,000+ new users in just 3 months. Their technical expertise and creative solutions are truly exceptional."
  },
  {
    name: "Sarah Johnson",
    position: "E-commerce Manager, UrbanStyle",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 4,
    text: "Our conversion rates improved by 35% after their UI/UX redesign. They understand exactly how to create experiences that convert visitors into customers."
  },
  {
    name: "Michael Thompson",
    position: "CTO, HealthTrack Systems",
    image: "https://i.pravatar.cc/150?img=7",
    rating: 5,
    text: "Their cloud solution reduced our operational costs by 40% while improving system reliability. We've found a long-term technology partner."
  }
];


const TestimonialCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: !isMobile, 
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0a2a49",
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 0 },
        ".slick-dots": {
          bottom: { xs: -30, sm: -30 }
        },
        ".slick-dots li button:before": { 
          color: "white",
          fontSize: { xs: "8px", sm: "10px" }
        },
        ".slick-dots li.slick-active button:before": { 
          color: "white",
          opacity: 1
        },
        ".slick-slide": {
          px: { xs: 0.5, sm: 1 }
        }
      }}
    >
      <Typography
        variant="subtitle1"
        color="white"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: "0.75rem", sm: "0.875rem" }
        }}
      >
        CLIENT TESTIMONIALS
      </Typography>
      <Typography
        variant="h4"
        align="center"
        sx={{ 
          fontWeight: "bold", 
          color: "white", 
          mb: 4,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
          px: { xs: 1, sm: 0 }
        }}
      >
        What Our <span style={{ color: "#00BFFF" }}>Clients Say</span>
      </Typography>

      <Box sx={{ 
        maxWidth: "1100px", 
        mx: "auto",
        px: { xs: 1, sm: 2 }
      }}>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <Box key={index}> 
              <Card
                sx={{
                  p: { xs: 2, sm: 3 },
                  borderRadius: 2,
                  minHeight: { xs: 180, sm: 200 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar 
                      src={item.image} 
                      alt={item.name} 
                      sx={{ 
                        width: { xs: 40, sm: 48 }, 
                        height: { xs: 40, sm: 48 } 
                      }} 
                    />
                    <Box sx={{ ml: 2 }}>
                      <Typography 
                        fontWeight="bold"
                        fontSize={{ xs: "0.875rem", sm: "1rem" }}
                      >
                        {item.name}
                      </Typography>
                      <Rating 
                        value={item.rating} 
                        readOnly 
                        size={isMobile ? "small" : "medium"} 
                      />
                    </Box>
                  </Box>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: "0.8125rem", sm: "0.875rem" }
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;