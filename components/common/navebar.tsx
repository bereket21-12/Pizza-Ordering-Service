"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import { Button, Menu, MenuItem, Typography, useMediaQuery } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import MenuIcon from '@mui/icons-material/Menu';
import nookies from 'nookies';

function stringToColor(string: string) {
  let hash = 0;
  let i;
  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name: string) {
  return {
    sx: { bgcolor: stringToColor(name) },
    children: `${name?.split(" ")[0][0]}`.toUpperCase(),
  };
}

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);
  const { data: session } = useSession();
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      nookies.destroy(null, "__Secure-next-auth.session-token", { path: "/", secure: true });
      nookies.destroy(null, "next-auth.session-token", { path: "/", secure: true });
      nookies.destroy(null, "__Host-next-auth.csrf-token", { path: "/", secure: true });
      nookies.destroy(null, "__Secure-next-auth.callback-url", { path: "/", secure: true });
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      signOut({ redirect: true, callbackUrl: "/login" });
      if (response.ok) {
        signOut({ redirect: true, callbackUrl: "/login" });
      } else {
        const data = await response.json();
        console.error(data.message); // Handle error
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  };

  const handleMobileMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        width: "100%",
        zIndex: 1,
        background: "transparent",
      }}
    >
      {/* Left side - Logo */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <Image
            width={40}
            height={40}
            src={"/emojione_pizza.png"}
            alt={"Pizza Logo"}
          />
        </IconButton>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#AF5901" }}
        >
          Pizza
        </Typography>
      </Box>

      {/* Center - Links for Desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Link href="/" passHref>
          <Button
            sx={{
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                color: "#FFA500",
              },
            }}
          >
            Home
          </Button>
        </Link>
                <Link href="/order_history" passHref>
          <Button
            sx={{
              color: "black",
              fontSize: { xs: "1rem", md: "1.2rem" },
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                color: "#FFA500",
              },
            }}
          >
            Order
          </Button>
        </Link>
        <Link href="/who-we-are" passHref>
          <Button
            sx={{
              color: "black",
              fontSize: { xs: "1rem", md: "1.2rem" },
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                color: "#FFA500",
              },
            }}
          >
            Who We Are
          </Button>
        </Link>
      </Box>

      {/* Right side - Avatar and Menu */}
      {session?.user ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile ? (
            <>
              <Link href="/" passHref>
                <Button
                  sx={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#FFA500",
                    },
                  }}
                >
                  Home
                </Button>
              </Link>
        <Link href="/order_history" passHref>
          <Button
            sx={{
              color: "black",
              fontSize: { xs: "1rem", md: "1.2rem" },
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                color: "#FFA500",
              },
            }}
          >
            Order
          </Button>
        </Link>
              <IconButton
                onClick={handleAvatarClick}
                sx={{ color: "black" }}
                aria-controls="profile-menu"
                aria-haspopup="true"
              >
                <Avatar {...stringAvatar(session?.user?.email as string)} />
              </IconButton>
            </>
          ) : (
            <IconButton
              onClick={handleAvatarClick}
              sx={{ color: "black" }}
              aria-controls="profile-menu"
              aria-haspopup="true"
            >
              <Avatar {...stringAvatar(session?.user?.email as string)} />
            </IconButton>
          )}
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: 1 }}
          >
            <Link href="/">
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            </Link>
            <Link href="/customer/order">
              <MenuItem onClick={handleMenuClose}>Order</MenuItem>
            </Link>
            <Link href="#">
              <MenuItem onClick={handleMenuClose}>About Us</MenuItem>
            </Link>
            <MenuItem
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile ? (
            <>
              <Link href="/" passHref>
                <Button
                  sx={{
                    color: "black",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#FFA500",
                    },
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link href="/order_history" passHref>
                <Button
                  sx={{
                    color: "black",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    fontWeight: "bold",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#FFA500",
                    },
                  }}
                >
                  Order
                </Button>
              </Link>
              <IconButton
                onClick={handleMobileMenuClick}
                sx={{ color: "black" }}
                aria-controls="mobile-menu"
                aria-haspopup="true"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="mobile-menu"
                anchorEl={mobileMenuAnchorEl}
                open={Boolean(mobileMenuAnchorEl)}
                onClose={handleMenuClose}
                sx={{ mt: 1 }}
              >
                <Link href="/customer/order">
                  <MenuItem onClick={handleMenuClose}>Order</MenuItem>
                </Link>
                <Link href="/registerrestaurant">
                  <MenuItem onClick={handleMenuClose}>Register Restaurant</MenuItem>
                </Link>
                <Link href="/signup">
                  <MenuItem onClick={handleMenuClose}>Register Self</MenuItem>
                </Link>
              </Menu>
            </>
          ) : (
            <Link href="" passHref>
              <Button
                variant="contained"
                onClick={handleAvatarClick}
                sx={{
                  backgroundColor: "#FFA500",
                  fontWeight: "bold",
                  fontSize: { xs: "0.7rem", md: "1.2rem" },
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#FF8C00",
                  },
                }}
              >
                Register
              </Button>
              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ mt: 1 }}
              >
                <Link href="/registerrestaurant">
                  <MenuItem onClick={handleMenuClose}>Register Restaurant</MenuItem>
                </Link>
                <Link href="/signup">
                  <MenuItem onClick={handleMenuClose}>Register Self</MenuItem>
                </Link>
              </Menu>
            </Link>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;