"use client";
import {
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import HandymanIcon from "@mui/icons-material/Handyman";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import Link from "next/link";

const ICONS = {
  Home: <HomeIcon />,
  Experience: <WorkHistoryIcon />,
  Skills: <HandymanIcon />,
  Contact: <EmailIcon />,
};

const LINKS = [
  {
    name: "Home",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    name: "Experience",
    icon: <WorkHistoryIcon />,
    href: "/experience",
  },
  {
    name: "Skills",
    icon: <HandymanIcon />,
    href: "/skills",
  },
  {
    name: "Contact",
    icon: <EmailIcon />,
    href: "/contact",
  },
];

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
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 250 }}>
            <List>
              {LINKS.map(({ name, icon, href }) => (
                <ListItem key={name} disablePadding>
                  <ListItemButton
                    onClick={() => setDrawerOpen(false)}
                    LinkComponent={Link}
                    href={href}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
