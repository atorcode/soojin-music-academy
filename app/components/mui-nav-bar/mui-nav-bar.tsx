import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

export const MuiNavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar component="nav">
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <LibraryMusicIcon />
        </IconButton>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Soojin Music Academy
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="stretch"
          justifyContent="stretch"
        >
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
  );
};
