import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import {
    Button,
    Typography,
  } from "@mui/material";

const BUTTONS = [
    {
      name: "LinkedIn Profile",
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/tylerfann/",
    },
    {
      name: "GitHub Portfolio",
      icon: <GitHubIcon />,
      href: "https://github.com/tylerfann",
    },
    {
      name: "View Resume",
      icon: <DescriptionIcon />,
      href: "/tyler-fann-resume.pdf",
    },
  ];

const ContactMe = () => {
  return (
    <>
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Connect With Me
      </Typography>
      {BUTTONS.map(({ name, icon, href }) => {
        return (
          <Button
            key={name}
            rel="noopener noreferrer"
            target="_blank"
            href={href}
            startIcon={icon}
            variant="outlined"
          >
            {name}
          </Button>
        );
      })}
    </>
  );
};

export default ContactMe;
