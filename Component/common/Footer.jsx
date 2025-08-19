"use client";

import { Box, Container, Grid, Typography, TextField, Button, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LocationOn, Phone, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box id="contactus" component="footer" sx={{ width: '100%', pt: 6, }}>

      <Grid container sx={{ bgcolor: "#0b2c50", color: "#fff", display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', px: { xs: 2, md: 12 }, p: 4 }}>
        {/* Logo and Description */}
        <Grid item xs={12} md={3} maxWidth={200}>
          <Typography variant="h6" fontWeight="bold">
            StarSoftai
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, lineHeight: 1.8, }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text.
          </Typography>
        </Grid>

        {/* Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            QUICK LINK
          </Typography>
          <Box sx={{ height: "2px", bgcolor: "primary.main", width: "40px", mb: 2 }} />
          <Box sx={{ display: "flex", gap: 1 }}>
            <Link href="#herosection" underline="hover" color="inherit">Home</Link>
            <Link href="#services" underline="hover" color="inherit">Services</Link>
            {/* <Link href="#" underline="hover" color="inherit"></Link> */}
            <Link href="#aboutus" underline="hover" color="inherit">About Us</Link>
          </Box>
        </Grid>

        {/* Get in Touch */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            GET IN TOUCH
          </Typography>
          <Box sx={{ height: "2px", bgcolor: "primary.main", width: "40px", mb: 2 }} />
          <Link href="https://www.google.com/maps?q=Old+city+Street,+USA+1212+New+York+-+3500"
            target="_blank"
            rel="noopener"  underline="none"
            sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOn fontSize="small" sx={{ mr: 1, color: "primary.main" }} />
            <Typography variant="body2">Old city Street, USA 1212 New York - 3500</Typography>
          </Link>
          <Link href="tel:1234567891000" underline="none" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Phone fontSize="small" sx={{ mr: 1, color: "primary.main" }} />
            <Typography variant="body2">123 456 7891000</Typography>
          </Link>
          <Link href="mailto:infoname@mail.com" underline="none" sx={{ display: "flex", alignItems: "center" }}>
            <Email fontSize="small" sx={{ mr: 1, color: "primary.main" }} />
            <Typography variant="body2">infoname@mail.com</Typography>
          </Link>
        </Grid>

      </Grid>

      {/* Bottom Logos */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          p: 2,
          px: { xs: 2, md: 8 },
        }}
      >
        <Typography variant="body2">© StarSoftai 2023 | All Rights Reserved</Typography>
        <Box>
          <IconButton color="inherit" href="#"><Facebook /></IconButton>
          <IconButton color="inherit" href="#"><Twitter /></IconButton>
          <IconButton color="inherit" href="#"><Instagram /></IconButton>
        </Box>
      </Box>

    </Box>
  );
}
