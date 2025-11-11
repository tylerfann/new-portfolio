import { Typography } from "@mui/material";

const TitleText = () => {
  return (
    <>
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
        Building seamless digital experiences with a passion for clean code and
        impactful design.
      </Typography>
    </>
  );
};

export default TitleText;
