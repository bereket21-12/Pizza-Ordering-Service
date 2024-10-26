import {
  Box,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        mt:2,
        p: 2,
        mb: 0,
        width: "100%",
        height: { xs: "auto", md: 150 },
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#CCB691",
      }}
    >
      {/* Links Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        <Link href={""}>Home</Link>
        <Link href={""}>Order</Link>
        <Link href={""}>About Us</Link>
      </Box>

      {/* Logo and Input Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            mb: 1,
          }}
        >
          <Image height={50} width={50} alt="icon" src={"/pizzaLogo.png"} />{" "}
          <Typography>Pizza</Typography>
        </Box>

        <FormControl
          sx={{
            width: { xs: "90%", sm: "80%", md: "45ch" },
          }}
          variant="filled"
        >
          <FilledInput
            id="filled-adornment-search"
            type="text"
            placeholder="Put your message"
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
              backgroundColor: "whitesmoke",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="send message"
                  sx={{
                    color: "#FFA500",
                    borderRadius: "50%",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "#FF8C00",
                    },
                  }}
                >
                  <TelegramIcon sx={{ fontSize: "2.3rem" }} />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </Box>
  );
}
