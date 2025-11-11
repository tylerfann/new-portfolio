import { Container, Stack } from "@mui/material";
import Headshot from "./Headshot";
import TitleText from "./TitleText";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

const DesktopLayout = () => {
  return (
    <Container
      sx={{
        mt: 5,
        textAlign: "center",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Stack flex={1} spacing={2}>
          <Headshot />
          <TitleText />
        </Stack>
        <Stack flex={1} spacing={2}>
          <AboutMe />
          <ContactMe />
        </Stack>
      </Stack>
    </Container>
  );
};

export default DesktopLayout;
