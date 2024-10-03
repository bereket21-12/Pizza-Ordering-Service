import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Contact() {
  return (
    <Box
      sx={{
        p: 5,
        m: 0,
        width: "100%",
        height: { xs: 150, md: 100 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Use column on mobile
        backgroundColor: "black",
        justifyContent: { xs: "center", md: "space-between" }, // Center all contents horizontally
        alignItems: "center", // Center items vertically
      }}
    >
      {/* Left Side: Text */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
          gap: 2,
          mb: { xs: 2, md: 0 },
          textAlign: "center", // Center text on mobile
        }}
      >
        <Typography sx={{ color: "white" }}>
          &copy;2024 Pizza All Rights Reserved
        </Typography>
        <Typography sx={{ color: "white" }}>Terms & Conditions</Typography>
      </Box>

      {/* Right Side: Social Icons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          justifyContent: { xs: "center", md: "flex-end" }, // Center icons on mobile, right on desktop
        }}
      >
        <IconButton>
          <FacebookIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <LinkedInIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <XIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <YouTubeIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
