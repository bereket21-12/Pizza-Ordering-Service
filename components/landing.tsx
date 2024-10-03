import {
  Box,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

function Landing() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
        paddingTop: 4,
        position: "relative",
        overflow: "hidden", // Prevents horizontal scrolling
        alignItems: "center", // Vertically center content
        background: "linear-gradient(180deg, #FFFFFF 0%, #FFC993 76%, #FFF8F1 100%)",
        
      }}
    >
      {/* Left side: Text and Search Bar */}
      <Box
        sx={{
          flex: 1,
          paddingLeft: { xs: 2, md: 12 },
           width: { xs: "50%", md: "90%" },
          zIndex: 2, // Text above image
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(90.23deg, #FF8100 -2.97%, #FFBE71 93.66%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "3.5rem", sm: "4.5rem", md: "6rem" }, // Adjusted font sizes
              mb: 1, // Added bottom margin
            }}
            variant="h3"
          >
            Order Us
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" }, // Adjusted font sizes
            mb: 2, // Added bottom margin
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          architecto placeat obcaecati! Culpa aliquid possimus quaerat
          reiciendis necessitatibus.
        </Typography>
        <FormControl
          sx={{
            m: 1,
            width: { xs: "100%", sm: "80%", md: "45ch" },
            color: "white",
          }}
          variant="filled"
        >
          <FilledInput
            id="filled-adornment-search"
            type="text"
            placeholder="Search"
            sx={{
              borderRadius: "25px",
              paddingRight: "10px",
              "&:before": {
                borderBottom: "none",
              },
              "&:after": {
                borderBottom: "none",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              backgroundColor: "white",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search"
                  sx={{
                    backgroundColor: "#FFA500",
                    color: "white",
                    borderRadius: "50%",
                    padding: "8px",
                    "&:hover": {
                      backgroundColor: "#FF8C00",
                    },
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      {/* Right side: Overlapping Images */}
      <Box
        sx={{
          position: "relative", // Relative for responsive positioning
          width: { xs: "50%", md: "90%" }, // Adjusted for mobile screens
          height: "70vh", // Full height
          right: "-30%",
          zIndex: 1, // Ensure image is behind the text
        }}
      >
        {/* Leaf Image */}
        <Box
          sx={{
            position: "absolute",
            width: { xs: "50%", md: "90%" },
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <Image
            src={"/leave.png"}
            layout="fill" // Fill the container
            objectFit="contain" // Keep image aspect ratio
            alt="leave"
            style={{
              transform: "scale(1.1)", // Slightly reduce scale
              transformOrigin: "center", // Scale from the center
              zIndex: 1, // Ensure it's below the pizza
            }}
          />
        </Box>

        {/* Pizza Image */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 2, // Ensure pizza is above leaf
          }}
        >
          <Image
            src={"/Image (1).png"}
            layout="fill" // Fill the container
            objectFit="contain" // Keep image aspect ratio
            alt="pizza"
            style={{
              transform: "scale(1.2)", // Scale up the pizza image
              transformOrigin: "center", // Scale from the center
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Landing;
