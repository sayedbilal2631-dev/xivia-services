"use client"
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
  styled
} from "@mui/material";
import { useState } from "react";

const ServicesSlider = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '200px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  borderRadius: '4px',
  zIndex: theme.zIndex.modal,
  padding: theme.spacing(1),
}));

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "#herosection" },
    { 
      name: "Services",
      path: "#services",
      subItems: [
        { name: "Web Development", path: "#webdev" },
        { name: "Mobile Apps", path: "#mobileapps" },
        { name: "UI/UX Design", path: "#uiux" },
        { name: "Digital Marketing", path: "#marketing" }
      ]
    },
    { name: "About us", path: "#aboutus" },
    { name: "Contact us", path: "#contactus" }
  ];
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  // --- Mobile ---
  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', scale:3 }}>
        <Box component={'img'} src={'/images/logo.png'} height={54} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <Box key={index}>
            <ListItem 
              button 
              component="a"
              href={item.path}
              onClick={() => {
                if (!item.subItems) setMobileOpen(false);
              }}
              sx={{ justifyContent: 'space-between' }}
            >
              <Box>{item.name}</Box>
              {item.subItems && (
                mobileServicesOpen ? <ExpandLess /> : <ExpandMore />
              )}
            </ListItem>
            {item.subItems && (
              <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem 
                      button 
                      key={subIndex} 
                      component="a"
                      href={subItem.path}
                      onClick={() => setMobileOpen(false)}
                      sx={{ pl: 4 }}
                    >
                      <Typography>{subItem.name}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))} 
      </List>
    </Box>
  );

  return (
    <>
      {/* Navbar */}
      <Paper sx={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: 'space-between', 
        p: 2,
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.appBar
      }}>
        <Box component={'img'} src={'/images/logo.png'} height={54} sx={{ 
          scale: 3,
          [theme.breakpoints.down('md')]: { scale: 2.5 },
          ml:'100px'
        }}/>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        ) : (
          <List
            sx={{
              display: "flex",
              listStyle: "none",
              alignItems: 'center',
              p: 0,
              m: 0,
              gap: '20px',
              position: 'relative'
            }}
          >
            {navItems.map((item, index) => (
              <Box 
                key={index} 
                component={'a'} 
                href={item.path} 
                sx={{ position: 'relative', textDecoration: 'none', color: 'inherit' }}
              >
                <ListItem
                  sx={{
                    whiteSpace: "nowrap",p: 0,width: 'auto',cursor: 'pointer',
                    '&:hover': { color: theme.palette.primary.main }
                  }}
                  onMouseEnter={item.subItems ? () => setServicesOpen(true) : undefined}
                  onMouseLeave={item.subItems ? () => setServicesOpen(false) : undefined}
                  onClick={item.subItems ? toggleServices : undefined}
                >
                  {item.name}
                  {item.subItems && (
                    servicesOpen ? <ExpandLess sx={{ ml: 0.5 }} /> : <ExpandMore sx={{ ml: 0.5 }} />
                  )}
                </ListItem>
                
                {/* Dropdown */}
                {item.subItems && servicesOpen && (
                  <ServicesSlider
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <List>
                      {item.subItems.map((subItem, subIndex) => (
                        <ListItem 
                          key={subIndex} 
                          component="a"
                          href={subItem.path}
                          sx={{
                            py: 1,
                            px: 2,
                            textDecoration: 'none',
                            color: 'inherit',
                            '&:hover': { backgroundColor: theme.palette.action.hover }
                          }}
                        >
                          {subItem.name}
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
      
      {/* Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
