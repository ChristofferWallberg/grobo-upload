import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";
import { Footer } from "./Footer";
import { Upload } from "../utils/Upload";

export const Content: React.FC = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    // Uploaded file
    const file = e.target.files[0];
    // Changing file state
    setFile(file);
  };
  return (
    <Grid
      container
      direction="column"
      style={{
        minHeight: "95vh",
        width: "100%",
        margin: 0,
        boxShadow: "-1px 0px 0px 0px black, 1px 0px 0px 0px black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid item>
        <Typography variant="h1" align="center">
          Welcome to the Image Uploader
        </Typography>
        <Typography variant="h4" align="center">
          Please login to upload an image or view the images
        </Typography>
        <Upload handleFileChange={handleFileChange} />
      </Grid>
      <Grid item style={{ alignSelf: "flex-end" }}>
        <Footer />
      </Grid>
    </Grid>
  );
};
