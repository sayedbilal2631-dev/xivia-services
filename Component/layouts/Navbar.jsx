"use client";
import { Menu, ExpandMore, ExpandLess } from "@mui/icons-material";
import {
  Box,
  Typography,
  List,
  ListItem,
  Paper,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  Divider,
  Collapse,
  styled,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";

// Styled component for the dropdown menu
const ServicesSlider = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  minWidth: "220px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[8],
  borderRadius: theme.shape.borderRadius,
  zIndex: theme.zIndex.modal + 1,
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
}));

// Styled component for the main navigation link
const NavLink = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  textDecoration: "none",
  color: theme.palette.text.primary,
  padding: theme.spacing(1, 0),
  cursor: "pointer",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  display: "flex",
  alignItems: "center",
}));

const Navbar = () => {
  const theme = useTheme();
  // Fix flicker by preventing SSR mismatch
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Optional: ensure component only renders after hydration
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // avoids mismatch between SSR/CSR

  const navItems = [
    { name: "Home", path: "#herosection", isCta: false },
    { name: "Services", path: "#services", isCta: false, },
    { name: "About Us", path: "#aboutus", isCta: false },
    { name: "Contact Us", path: "#contactus", isCta: true },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const handleServiceMouseEnter = (hasSubItems) => {
    if (hasSubItems) setServicesOpen(true);
  };

  const handleServiceMouseLeave = () => {
    setServicesOpen(false);
  };

  // Drawer for mobile
  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ p: 2, display: "flex", justifyContent: "center", scale: 3 }}>
        <Box component={"img"} src={"/images/logo.png"} height={54} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Box key={item.name}>
            <ListItem
              component="a"
              href={item.path}
              onClick={(e) => {
                if (item.subItems) {
                  e.preventDefault();
                  toggleMobileServices();
                } else {
                  setMobileOpen(false);
                }
              }}
              sx={{
                justifyContent: "space-between",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Typography
                fontWeight={600}
                color={item.isCta ? "primary.main" : "text.primary"}
              >
                {item.name}
              </Typography>
              {item.subItems &&
                (mobileServicesOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {item.subItems && (
              <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      button
                      key={subItem.name}
                      component="a"
                      href={subItem.path}
                      onClick={() => setMobileOpen(false)}
                      sx={{
                        pl: 4,
                        "&:hover": { backgroundColor: theme.palette.action.hover },
                      }}
                    >
                      <Typography variant="body2">{subItem.name}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
            <Divider variant="middle" />
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 8, lg: 12 },
          position: "sticky",
          top: 0,
          backgroundColor: theme.palette.background.paper + "E6",
          backdropFilter: "blur(5px)",
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "center", scale: 3 }}>
          <Box component={"img"} src={"/images/logo.png"} height={54} />
        </Box>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            size="large"
          >
            <Menu />
          </IconButton>
        ) : (
          <List
            sx={{
              display: "flex",
              alignItems: "center",
              p: 0,
              m: 0,
              gap: "30px",
              position: "relative",
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.name}
                onMouseEnter={() => handleServiceMouseEnter(!!item.subItems)}
                onMouseLeave={handleServiceMouseLeave}
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {item.isCta ? (
                  <Button
                    variant="contained"
                    color="primary"
                    href={item.path}
                    sx={{ borderRadius: 50, px: 3, fontWeight: 700 }}
                  >
                    {item.name}
                  </Button>
                ) : (
                  <NavLink
                    component="a"
                    href={item.path}
                    onClick={
                      item.subItems ? (e) => e.preventDefault() : undefined
                    }
                  >
                    {item.name}
                    {item.subItems &&
                      (servicesOpen ? (
                        <ExpandLess sx={{ ml: 0.5, fontSize: "1.2rem" }} />
                      ) : (
                        <ExpandMore sx={{ ml: 0.5, fontSize: "1.2rem" }} />
                      ))}
                  </NavLink>
                )}

                {item.subItems && servicesOpen && (
                  <ServicesSlider>
                    <List disablePadding>
                      {item.subItems.map((subItem) => (
                        <ListItem
                          key={subItem.name}
                          component="a"
                          href={subItem.path}
                          onClick={handleServiceMouseLeave}
                          sx={{
                            p: 1.5,
                            textDecoration: "none",
                            color: theme.palette.text.primary,
                            transition: "background-color 0.2s",
                            "&:hover": {
                              backgroundColor: theme.palette.primary.light,
                              color: theme.palette.primary.contrastText,
                            },
                            borderRadius: "4px",
                          }}
                        >
                          <Typography variant="body1" fontWeight={500}>
                            {subItem.name}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </ServicesSlider>
                )}
              </Box>
            ))}
          </List>
        )}
      </Paper>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
