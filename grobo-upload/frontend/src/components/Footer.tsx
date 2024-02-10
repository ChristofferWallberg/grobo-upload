import React from "react";
import { Container, Link, Typography } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Container sx={{ position: "relative", bottom: 0 }}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Site created by "}
        <Link color="inherit" href="https://yourwebsite.com/">
          Your Name
        </Link>
        {"."}
      </Typography>
    </Container>
  );
};
