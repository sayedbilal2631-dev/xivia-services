"use client";
import { Grid, Typography, Card, CardContent, IconButton, Box, } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "@/app/firebase";
import Image from "next/image";

export default function TeamSection() {
  const [team, setTeam] = useState([]);

  const getTeam = async () => {
    const q = query(collection(db, "team-member"));
    const data = await getDocs(q);
    const team = data.docs.map((member) => ({ id: member.id, ...member.data() }));
    setTeam(team);
  };

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      <Typography
        variant="subtitle2"
        color="primary"
        sx={{ textTransform: "uppercase", mb: 1 }}
      >
        Creative Team
      </Typography>

      <Typography variant="h4" fontWeight="bold">
        Experience & Our{" "}
        <Box
          component="a"
          sx={{
            textDecoration: "underline",
            fontWeight: "light",
            textDecorationColor: "#1976d2",
          }}
        >
          Professionals Team
        </Box>
      </Typography>

      <Box
        justifyContent="center"
        sx={{
          mt: 4,
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {team.map((member) => (
          <Grid key={member.id}>
            <Card
              sx={{
                textAlign: "center",
                boxShadow: 3,
                borderRadius: 3,
                height: 450,
                width: 300,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Image
                src={
                  member.image ||
                  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=500&fit=crop&crop=faces"
                }
                alt={member.name}
                width={300}
                height={220}
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
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
                  {member.socialLinks?.facebook && (
                    <IconButton
                      component="a"
                      href={member.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                    >
                      <Facebook />
                    </IconButton>
                  )}

                  {member.socialLinks?.linkedin && (
                    <IconButton
                      component="a"
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "#E4405F" }}
                    >
                      <Instagram />
                    </IconButton> )}
               
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
