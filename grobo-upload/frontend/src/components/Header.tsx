import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Link,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          PaperProps={{
            sx: { width: "20%" },
          }}
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
        >
          <List>
            <ListItemButton>
              <ListItemText primary="Upload Image" />
            </ListItemButton>
            <ListItemButton component="a" href="/images">
              <ListItemText primary="Show Images" />
            </ListItemButton>
          </List>
        </Drawer>
        <Button color="inherit" href="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};
