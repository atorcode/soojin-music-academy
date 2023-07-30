// styles
import styles from "./footer.module.scss";

// components
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export const Footer = () => {
  return (
    <AppBar
      position="static"
      component="footer"
      sx={{
        height: "200px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Toolbar color="inherit">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1">For Business Inquiries</Typography>
            <Typography variant="body2">soojin58@hotmail.com</Typography>
            <Typography variant="body2" gutterBottom>
              (253) 335-6420
            </Typography>
            <Typography variant="body2" gutterBottom>
              &copy; 2023 Soojin Music Academy. All rights reserved.
            </Typography>
            <Typography variant="body2">
              Made with &#x1F496; by atorcode
            </Typography>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
