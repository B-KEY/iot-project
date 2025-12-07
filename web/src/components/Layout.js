import React, { Fragment } from "react";
import { Container, Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

//import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          bgcolor: "primary.dark",
          top: 0,
          justifyContent: "center",
          pt: 0.5,
          justifyItems: "center",
          position: "sticky",
          zIndex: 20,
        }}
      >
        <Typography
          variant="h4"
          color="white"
          sx={{
            p: 0.5,
          }}
        >
          IoT-sensors-hub-template
        </Typography>
      </Box>
      <Container sx={{ mb: 10 }} maxWidth={"lg"}>
        <Outlet />
      </Container>
      <Box
        sx={{
          bgcolor: "#262626",
          bottom: 0,
          color: "#666666",
          display: "flex",
          justifyContent: "flex-end",
          position: "fixed",
          textTransform: "uppercase",
          width: "100%",
          pr: 2,
        }}
      >
        <Typography variant="body" sx={{ p: 0.5 }}>
          FEIT-KMIKT {new Date().getFullYear()}
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Layout;
