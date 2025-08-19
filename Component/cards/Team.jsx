"use client";
import { Box, Grid, Typography, Card, CardContent, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const teamMembers = [
  {
    name: "Mahedi Hassan",
    role: "Website Developer & CEO StarSoftai",
    description: "Right Now, I'm working at Upwork and Fiverr as Web Design & Developer.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop&crop=faces",
  },
  {
    name: "Md Rafi",
    role: "Apps Developer",
    description: "I’m Rafi, Coding passion drives my tech journey.",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=500&h=500&fit=crop&crop=faces",
  },
  {
    name: "Nayem Hossain",
    role: "Website Developer",
    description: "Right Now, I'm working at Upwork and Fiverr as Web Design & Developer.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=500&fit=crop&crop=faces",
  },
  {
    name: "Rakibul Hasan",
    role: "UI/UX Designer",
    description: "Right Now, I'm working at Upwork and Fiverr as Web Design & Developer.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&fit=crop&crop=faces",
  },
];

export default function TeamSection() {
  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="subtitle2" color="primary" sx={{ textTransform: "uppercase", mb: 1 }}>
        Creative Team
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        Experience & Our{" "}
        <Box
          component="a"
          sx={{ textDecoration: "underline", fontWeight: "light", textDecorationColor: "#1976d2" }}
        >
          Professionals Team
        </Box>
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {teamMembers.map((member, index) => (
          <Grid item  key={index}>
            <Card
              sx={{
                textAlign: "center",
                boxShadow: 3,
                borderRadius: 3,
                height: 450, 
                width:300,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                component="img"
                src={member.image}
                alt={member.name}
                sx={{
                  width: "100%",
                  height: 220, 
                  objectFit: "cover",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {member.description}
                </Typography>
                <Box>
                  <IconButton color="primary">
                    <Facebook />
                  </IconButton>
                  <IconButton sx={{ color: "#E4405F" }}>
                    <Instagram />
                  </IconButton>
                  <IconButton sx={{ color: "#1DA1F2" }}>
                    <Twitter />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
