// styles
import styles from "./nav-bar.module.scss";

// icons
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

// components
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Stack,
} from "@mui/material";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar component="nav">
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-around",
            gap: "2rem",
          }}
        >
          <Button
            size="large"
            color="inherit"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <LibraryMusicIcon />
            <Typography variant="h6" component="span">
              Soojin Music Academy
            </Typography>
          </Button>

          <Stack direction="row" spacing={2}>
            <Button color="inherit" size="large">
              Home
            </Button>
            <Button color="inherit" size="large">
              About
            </Button>
            <Button color="inherit" size="large">
              FAQ
            </Button>
            <Button color="inherit" size="large">
              Contact
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
