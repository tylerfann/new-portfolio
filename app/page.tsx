"use client";
import {
  Button,
  Container,
  Typography,
  Box,
  Stack,
  Card,
  CardHeader,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

import { useTheme } from "@mui/material/styles";
import Headshot from "./new-components/home-page/Headshot";
import TitleText from "./new-components/home-page/TitleText";
import AboutMe from "./new-components/home-page/AboutMe";
import ContactMe from "./new-components/home-page/ContactMe";

const Home = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container
      sx={{
        mt: 5,
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Stack spacing={2}>
        <Headshot />
        <TitleText />
        <AboutMe />
        <ContactMe />
      </Stack>
    </Container>
  );
};

export default Home;
