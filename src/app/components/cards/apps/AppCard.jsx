"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Stack,
  CardActionArea,
  Button,
} from "@mui/material";

const AppCard = ({ app }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: 3,
        boxShadow: 2,
        overflow: "hidden",
        "&:hover": { boxShadow: 5 },
      }}
    >
      {/* <CardActionArea 
        onClick={() => window.open(app.live, '_blank')}
        sx={{ display: "flex", width: "100%", flexDirection: { xs: "column", md: "row" } }}
      > */}
      {/* TEXT */}
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            {app.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {app.description}
          </Typography>

          {/* TECH */}
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {app.tech.map((t, i) => (
              <Chip key={i} label={t} size="small" />
            ))}
          </Stack>
          <Button
            variant="contained"
            size="small"
            onClick={() => window.open(app.live, "_blank")}
            sx={{
              alignSelf: "flex-start",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.85rem",
              px: 2.5,
              py: 0.8,
              borderRadius: "10px",
              background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
              boxShadow: "0 4px 14px rgba(79, 70, 229, 0.35)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #4338ca, #0891b2)",
                transform: "translateY(-2px) scale(1.03)",
                boxShadow: "0 6px 20px rgba(79, 70, 229, 0.45)",
              },

              "&:active": {
                transform: "scale(0.97)",
                boxShadow: "0 2px 8px rgba(79, 70, 229, 0.3)",
              },
            }}
          >
            View App →
          </Button>
        </Stack>
      </CardContent>

      {/* IMAGE */}
      <Box sx={{ flex: { xs: 1, md: "0 0 200px" }, height: { xs: 200, md: "auto" } }}>
        <CardMedia
          component="img"
          image={app.image}
          alt={app.name}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      {/* </CardActionArea> */}
    </Card>
  );

};

export default AppCard;