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

const AboutMe = () => {
  return (
    <>
      <Card variant="outlined">
        <CardHeader
          title="About Me"
          sx={{
            "& .MuiCardHeader-title": {
              fontWeight: "bold",
            },
          }}
        />
        <CardContent
          sx={{
            textAlign: "left",
          }}
        >
          <Typography>
            Software engineer with 6+ years of experience building and enhancing
            web applications using React, TypeScript, and other modern
            technologies. After briefly pursuing a personal aspiration outside
            of technology, I’ve decided to return to software engineering with
            renewed passion and perspective on teamwork and service.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default AboutMe;
