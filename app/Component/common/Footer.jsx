"use client";
import { Facebook, Twitter, Instagram, LocationOn, Phone, Email } from "@mui/icons-material";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase";

export default function Footer() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const fetchContact = async () => {
      const ref = collection(db, "contact");
      const snapshot = await getDocs(ref);

      const contactData = snapshot.docs.map(doc => ({
        ...doc.data(),
      }));

      setContact(...contactData);
    };

    fetchContact();
  }, []);
  const now = new Date();
  const year = `© Xivians ${now.getFullYear()} | All Rights Reserved`
  return (
    <>
      <Box id="contactus" component="footer" sx={{ width: "100%", pt: 6 }}>
        <Grid
          container
          sx={{
            bgcolor: "#0b2c50",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "20px",
            px: { xs: 2, md: 12 },
            p: 4,
          }}
        >
          {/* Logo and Description */}
          <Grid size={{ xs: 12, md: 3 }} maxWidth={300}>
            <Box sx={{ display: "flex" }}>
              <Box component="img" src="/images/footerLogo.png" height={84} alt="Xivians Logo" />
            </Box>
            <Typography
              variant="body2"
              sx={{ lineHeight: 1.8, }}
            >
              {contact.footerPara}
            </Typography>
          </Grid>


          {/* Links */}
          <Grid size={{ xs: 12, md: 3 }} >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              QUICK LINKS
            </Typography>
            <Box sx={{ height: "2px", bgcolor: "#fff", width: "40px", mb: 2 }} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#herosection" underline="hover" color="inherit">Home</Link>
              <Link href="#services" underline="hover" color="inherit">Services</Link>
              <Link href="#aboutus" underline="hover" color="inherit">About Us</Link>
            </Box>
          </Grid>

          {/* Get in Touch */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              GET IN TOUCH
            </Typography>
            <Box sx={{ height: "2px", bgcolor: "#fff", width: "40px", mb: 2 }} />
            <Link
              href="https://www.google.com/maps?q=Old+city+Street,+USA+1212+New+York+-+3500"
              target="_blank"
              rel="noopener"
              underline="none"
              sx={{ display: "flex", alignItems: "center", mb: 1 }}
            >
              <LocationOn fontSize="small" sx={{ mr: 1, color: "#fff" }} />
              <Typography variant="body2">{contact.address || "Tahsil Matta Swat"}</Typography>
            </Link>
            <Link href="tel:1234567891000" underline="none" sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone fontSize="small" sx={{ mr: 1, color: "#fff" }} />
              <Typography variant="body2">{contact.phone}</Typography>
            </Link>
            <Link href="mailto:infoname@mail.com" underline="none" sx={{ display: "flex", alignItems: "center" }}>
              <Email fontSize="small" sx={{ mr: 1, color: "#fff" }} />
              <Typography variant="body2">{contact.email}</Typography>
            </Link>
          </Grid>
        </Grid>

      </Box>
      {/* Bottom Section */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          p: 2,
          px: { xs: 2, md: 12 },
          color: "#000",
        }}
      >
        <Typography variant="body2">{year}</Typography>
        <Box>
          <IconButton color="inherit" href="#"><Facebook /></IconButton>
          <IconButton color="inherit" href="#"><Twitter /></IconButton>
          <IconButton color="inherit" href="#"><Instagram /></IconButton>
        </Box>
      </Box>
    </>
  );
}
