// import Button from "@/components/Button";
// import { homeButtons } from "@/utils/homeButtons";

// const Home = () => {
//   return (
//     <div>
//       <div className="flex flex-col items-center">
//         <h1 className="text-[50px]">
//           <span className="text-blue-800">Tyler Fann</span>
//           <span className="text-gray-500"> | </span>
//           <span className="text-blue-500">Front End Engineer</span>
//         </h1>
//         <h2 className="text-[35px] text-gray-500">
//           6+ years of professional experience
//         </h2>
//         <h3 className="text-[20px] mt-2 px-3 py-1 bg-gray-900 rounded-lg">
//           <span className="text-[#e34c26] pr-1">
//             HTML <i className="fa-brands fa-html5"></i>
//           </span>{" "}
//           <span className="text-[#264de4]  pr-1">
//             CSS <i className="fa-brands fa-css3-alt"></i>
//           </span>
//           <span className="text-[#f0db4f]  pr-1">
//             JavaScript <i className="fa-brands fa-js"></i>
//           </span>
//           <span className="text-[#61DBFB]  pr-1">
//             React <i className="fa-brands fa-react"></i>
//           </span>
//           <span className="text-white">and more</span>
//         </h3>
//       </div>
//       <div className="flex justify-center m-10">
//         {homeButtons.map((item) => (
//           <Button {...item} key={item.text} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

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
} from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

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

export default function Home() {
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
        <Image
          src="/profile-pic.png"
          alt="Headshot picture"
          width={125}
          height={125}
          style={{ alignSelf: "center" }}
        />
        <Typography
          variant="h1"
          sx={{
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          Tyler Fann
        </Typography>
        <Typography
          sx={{
            fontSize: 26,
          }}
        >
          Front End Engineer
        </Typography>
        <Typography
          sx={{
            fontSize: 18,
          }}
        >
          Building seamless digital experiences with a passion for clean code
          and impactful design.
        </Typography>
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
              Software engineer with 6+ years of experience building and
              enhancing web applications using React, TypeScript, and other
              modern technologies. After briefly pursuing a personal aspiration
              outside of technology, I’ve decided to return to software
              engineering with renewed passion and perspective on teamwork and
              service.
            </Typography>
          </CardContent>
        </Card>
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
      </Stack>
    </Container>
  );
}
