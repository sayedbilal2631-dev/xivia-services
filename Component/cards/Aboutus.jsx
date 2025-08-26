import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useState } from "react";
export default function Aboutus() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Box
    id='aboutus'
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, 
        alignItems: "center",
        gap: { xs: 6, md: 8 },
      }}
    >
      {/* Left Side – Image & Decorations */}
      <Box flex={1} width="100%">
        <Box sx={{ position: "relative" }}>
          {/* Black rectangle background */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: -10, md: -20 },
              right: { xs: -10, md: -20 },
              width: { xs: "50%", md: "40%" },
              height: { xs: "40%", md: "60%" },
              backgroundColor: "#000",
              borderRadius: 2,
              zIndex: 0,
            }}
          />

          {/* dots - top right */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: -20, md: -40 },
              right: { xs: -20, md: -40 },
              width: 60,
              height: 80,
              backgroundImage:
                "radial-gradient(#0d6efd 1px, transparent 1px)",
              backgroundSize: "6px 6px",
              zIndex: 1,
            }}
          />

          {/* dots - bottom left */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: -10, md: -20 },
              left: { xs: -10, md: -20 },
              width: 60,
              height: 80,
              backgroundImage:
                "radial-gradient(#0d6efd 1px, transparent 1px)",
              backgroundSize: "6px 6px",
              zIndex: 1,
            }}
          />

          {/* blue border bottom-left */}
          <Box
            sx={{
              position: "relative",
              display: "inline-block",
              zIndex: 2,
              borderLeft: "4px solid #0d6efd",
              borderBottom: "4px solid #0d6efd",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src="/images/pexels-photo-5256526.webp"
              alt="Team collaborating"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 2,
              }}
            />
            <PlayCircleOutlineIcon
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: { xs: 40, sm: 48, md: 64 },
                color: "#fff",
                cursor: "pointer",
              }}
            />
          </Box>

          {/* Stats Card */}
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              py: 2,
              px: { xs: 2, md: 4 },
              borderRadius: 2,
              position: "absolute",
              bottom: { xs: -50, md: -40 },
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: "95%", sm: "80%" },
              backgroundColor: "#fff",
              zIndex: 3,
              flexDirection: "row", 
              alignItems: "center",
              gap: { xs: 2, sm: 0 },
            }}
          >
            {[
              { number: "200+", label: "Team member" },
              { number: "900+", label: "Client review" },
              { number: "20+", label: "Complete project" },
            ].map((stat) => (
              <Box key={stat.label} sx={{ textAlign: "center", flex: 1 }}>
                <Typography  color="primary" sx={{fontWeight:'bold'}}>
                  {stat.number}
                </Typography>
                <Typography variant="body2" textAlign={'center'}>{stat.label}</Typography>
              </Box>
            ))}
          </Paper>
        </Box>
      </Box>

      {/* Right Side – Text */}
      <Box flex={1} width="100%">
        <Typography variant="overline" color="primary" gutterBottom>
          ABOUT US
        </Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Why{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Choose Us?
          </Box>
        </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 3,
          color: "text.secondary",
          lineHeight: 1.8,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Our team is here to give you personalized support within the hour
        available 24/7. In accordance with our commitment to providing superior
        and professional service. Join daily live webinars, watch our tutorials,
        or browse through our knowledge base.
        {expanded && (
          <>
            {" "}
            We also provide one-on-one consultation sessions tailored to your
            business needs. Our experts ensure you stay ahead with the latest
            tools, strategies, and updates. With our global network, you can
            connect with specialists anytime, anywhere, and take your growth to
            the next level.
          </>
        )}
      </Typography>

      <Box textAlign={{ xs: "center", md: "left" }}>
        <Button
          onClick={handleToggle}
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#0d6efd",
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#0056b3" },
          }}
        >
          {expanded ? "Read Less" : "Read More"}
        </Button>
      </Box>
        </Box>
      </Box>
  );
}
