import { Container, Stack } from "@mui/material";
import Headshot from "./Headshot";
import TitleText from "./TitleText";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

const MobileLayout = () => {
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

export default MobileLayout;
