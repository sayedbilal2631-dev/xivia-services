"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";



const format = (num) =>
  num && num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num;

const AppCard= ({ app }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: 3,
        boxShadow: 2,
        "&:hover": { boxShadow: 5 },
      }}
    >
      {/* TEXT */}
      <CardContent sx={{ flex: 1 }}>
        <Stack spacing={2}>
          <Typography variant="h6" fontWeight={600}>
            {app.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {app.description}
          </Typography>

          {/* METRICS */}
          <Stack direction="row" spacing={2}>
            {app.users && (
              <Stack direction="row" spacing={0.5} alignItems="center">
                <PeopleIcon fontSize="small" />
                <Typography variant="caption">
                  {format(app.users)}
                </Typography>
              </Stack>
            )}

            {app.rating && (
              <Stack direction="row" spacing={0.5} alignItems="center">
                <StarIcon fontSize="small" />
                <Typography variant="caption">
                  {app.rating}
                </Typography>
              </Stack>
            )}
          </Stack>

          {/* TECH */}
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {app.tech.map((t, i) => (
              <Chip key={i} label={t} size="small" />
            ))}
          </Stack>

          {/* BUTTON */}
          {app.live && (
            <Button
              variant="contained"
              size="small"
              href={app.live}
              target="_blank"
            >
              View App
            </Button>
          )}
        </Stack>
      </CardContent>

      {/* IMAGE */}
      <Box sx={{ width: { xs: "100%", md: 200 } }}>
        <CardMedia
          component="img"
          image={app.image}
          alt={app.name}
          sx={{ height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Card>
  );
};

export default AppCard;