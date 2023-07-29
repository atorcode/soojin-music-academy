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
  Box,
} from "@mui/material";

export const NavBar = () => {
  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <AppBar position="static">
        <Toolbar component="nav">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <LibraryMusicIcon />
          </IconButton>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            Soojin Music Academy
          </Typography>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};
