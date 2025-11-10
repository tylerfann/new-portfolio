"use client";
import {
  Button,
  Container,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import HandymanIcon from "@mui/icons-material/Handyman";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";

const ICONS = {
  Home: <HomeIcon />,
  Experience: <WorkHistoryIcon />,
  Skills: <HandymanIcon />,
  Contact: <EmailIcon />,
};
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Avatar>TF</Avatar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 250 }}>
            <List>
              {["Home", "Experience", "Skills", "Contact"].map(
                (text, index) => (
                  <>
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{ICONS[text]}</ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </>
                )
              )}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
