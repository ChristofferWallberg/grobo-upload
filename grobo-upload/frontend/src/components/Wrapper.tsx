import React from "react";
import { Grid } from "@mui/material";
import { Header } from "./Header";
import { createTheme } from "@mui/material/styles";

interface WrapperProps {
  children: React.ReactNode;
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (portrait phones)
      sm: 600, // Small devices (landscape phones)
      md: 960, // Medium devices (tablets)
      lg: 1280, // Large devices (desktops)
      xl: 1920, // Extra large devices (large desktops)
    },
  },
});

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Grid
      container
      direction="column"
      style={{
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <Grid item>
        <Header />
      </Grid>
      <Grid
        item
        sx={{
          flex: 1,
          width: "50%",
          display: "flex",
          justifyContent: "center",
          [theme.breakpoints.up("xs")]: {
            width: "100%",
            margin: 0,
          },
          [theme.breakpoints.up("md")]: {
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
          },
          [theme.breakpoints.up("lg")]: {
            width: "50%",
          },
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};
