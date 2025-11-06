import React, { memo } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeaderBar from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <HeaderBar />
      {/* <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Outlet />
      </Box> */}
      <Footer />
    </Box>
  );
}

export default memo(Layout);
