
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import Title from "../Title/Title";

const HeroSection = () => {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"), {
    noSsr: true,
  });
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"), {
    noSsr: true,
  });


  return (
    <Box
      id="herosection"
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "500px", sm: "550px", md: "650px" },
        backgroundImage: "url('/images/herosection.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        gap: 2,
        px: { xs: 1, sm: 6, md: 6 },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", }}>
        
      <Title />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mt: 1
        }}
      >
        <Button variant="contained" size={isSmallScreen ? "medium" : "large"}>
          START YOUR PROJECT TODAY
        </Button>

        <Button
          variant="outlined"
          size={isSmallScreen ? "medium" : "large"}
          sx={{ color: "white", borderColor: "white" }}
        >
          <Box component="a" href="#gallery">
            EXPLORE OUR WORK →
          </Box>
        </Button>
      </Box>
    </Box>
    </Box >
  );
};

export default HeroSection;
