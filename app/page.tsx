"use client";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileLayout from "./new-components/home-page/MobileLayout";
import DesktopLayout from "./new-components/home-page/DesktopLayout";

const Home = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
};

export default Home;
