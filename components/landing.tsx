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

interface LandingProps {
  searchQuery: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Landing({ searchQuery, handleSearchChange }: LandingProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
        paddingTop: 4,
        position: "relative",
        overflow: "hidden",
        alignItems: "center",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFC993 76%, #FFF8F1 100%)",
      }}
    >
      <Box
        sx={{
          flex: 1,
          paddingLeft: { xs: 2, md: 12 },
          width: { xs: "50%", md: "90%" },
          zIndex: 2,
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
              fontSize: { xs: "2.5rem", sm: "4.5rem", md: "6rem" },
              mb: 1,
            }}
            variant="h3"
          >
            Order Us
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" },
            mb: 2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          architecto placeat obcaecati! Culpa aliquid possimus quaerat
          reiciendis necessitatibus.
        </Typography>
        <FormControl
          sx={{
            m: 1,
            width: { xs: "100%", sm: "90%", md: "45ch" },
            color: "white",
          }}
          variant="filled"
        >
          <FilledInput
            id="filled-adornment-search"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
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

      <Box
        sx={{
          position: "relative",
          width: { xs: "50%", md: "90%" },
          height: "70vh",
          right: "-30%",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: "70%", md: "90%" },
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <Image
            src={"/leave.png"}
            layout="fill"
            objectFit="contain"
            alt="leave"
            style={{
              transform: "scale(1.1)",
              transformOrigin: "center",
              zIndex: 1,
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 2,
          }}
        >
          <Image
            src={"/Image (1).png"}
            layout="fill"
            objectFit="contain"
            alt="pizza"
            style={{
              transform: "scale(1.2)",
              transformOrigin: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Landing;
