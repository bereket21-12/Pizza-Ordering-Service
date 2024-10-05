"use client";

import { useState ,useEffect} from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useRouter, usePathname } from "next/navigation";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useSession, signOut } from "next-auth/react";
import { useAbility } from "@/provider/AbilityContext";
import nookies from 'nookies';

const drawerWidth = 240;
function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name?.split(" ")[0][0]}`.toUpperCase(),
  };
}

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const ability = useAbility();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter(); // Get the current route
  const { data: session } = useSession();

  const pathname = usePathname();
 
  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
 
  useEffect(()=>{

  },[session])
  
  // Close the Menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleLogout = async () => {
    try {
      signOut({ redirect: true, callbackUrl: "/login" });
   nookies.destroy(null, "__Secure-next-auth.session-token", { path: "/",secure: true });
    nookies.destroy(null, "next-auth.session-token", { path: "/", secure: true });
    nookies.destroy(null, "__Host-next-auth.csrf-token", { path: "/", secure: true });
    nookies.destroy(null, "__Secure-next-auth.callback-url", { path: "/", secure: true });

    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  };

  const menuItems = [
      { subject:'order',action:'read', text: "Orders", path: "/admin/manage_order", icon: <InventoryOutlinedIcon /> },
      { subject:'order',action:'create', text:"Add Menu", path: "/admin/menu", icon: <LocalPizzaOutlinedIcon /> },
      {subject:'role',action:'create', text: "Role", path: "/admin/role", icon: <PersonOutlineOutlinedIcon /> },
      {subject:'user',action:'create',
        text: "User",
        path: "/admin/adduser",
        icon: <AccountCircleOutlinedIcon />,
      },
    ];
  const isActive = (path: string) => pathname === path;
  return (
    <Box sx={{ display: "flex" }}>
      {/* Top AppBar with toggle button */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${open ? drawerWidth : 0}px)` },
          ml: { sm: `${open ? drawerWidth : 0}px` },
        }}
      >
        <Toolbar
          sx={{ backgroundColor: "white", justifyContent: "space-between" }}
        >
          {/* Left Side - Drawer Toggle Button and Title */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              sx={{ color: "black", mr: 2 }}
              edge="start"
              onClick={toggleDrawer}
              
            >
              {!open && <MenuIcon />}
            </IconButton>
            <Typography sx={{ color: "black" }} variant="h6" noWrap>
              {pathname}
            </Typography>
          </Box>

          {/* Right Side - Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {session?.user ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={handleAvatarClick}
            sx={{ color: "black" }}
            aria-controls="profile-menu"
            aria-haspopup="true"
          >
            <Avatar {...stringAvatar(session?.user?.email as string)} />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: 1 }}
          >
         
            <MenuItem
              onClick={() => {
             
                handleLogout();
                
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      ):
            <IconButton sx={{ color: "black" }}>
              <AccountCircleOutlinedIcon />
            </IconButton>}
            <IconButton sx={{ color: "black" }}>
              <NotificationAddOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="persistent"
        open={open}
        onClose={toggleDrawer}
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            transition: "width 0.3s", // Smooth open/close
          },
        }}
      >
        {/* Sidebar Content */}
        <Toolbar
          sx={{
            backgroundColor: "#FF81000D",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center", // Vertically center the content
              justifyContent: "space-between", // Push text to left and icon to right
              width: 234, // Ensure it spans full width
              backgroundColor: "#F3F3F340",
              pt: 3,
              pb: 4,
              pl: 2,
            }}
          >
            {/* Pizza Text on the left */}
            <Typography sx={{ fontWeight: "", fontSize: "1.5rem" }}>
              PIZZA
            </Typography>

            {/* IconButton on the right */}
            <IconButton color="inherit" onClick={toggleDrawer} sx={{ ml: 5 }}>
              {open ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              width={60}
              height={60}
              src="/emojione_pizza.png"
              alt="Pizza Logo"
            />
          </IconButton>
        </Toolbar>

        {/* List with Icons */}
<List>
  {menuItems.map((item, index) => (
    ability.can('read', item.subject) && (
      <ListItem
        key={index}
        onClick={() => router.push(item.path)}
        sx={{
          "&::after": {
            content: '""',
            position: "absolute",
            left: "7px",
            top: "6px",
            bottom: "6px",
            width: "5px",
            backgroundColor: isActive(item.path) ? "#FF8100" : "transparent", // Orange color for the line
          },
          cursor: "pointer",
          position: "relative",
          backgroundColor: isActive(item.path)
            ? "#FF810066"
            : "transparent",
          color: isActive(item.path) ? "#FF8100" : "inherit",
          "&:hover": {
            backgroundColor: "#FF810066",
            color: "#FF8100",
          },
        }}
      >
        <ListItemIcon
          sx={{
            color: isActive(item.path) ? "#FF810066" : "inherit",
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItem>
    )
  ))}
</List>
        <Box
          sx={{
            display: "flex",
            pr: 15,
            pt: 4,
            flexDirection: "row",
            borderTopStyle: "solid",
            borderTopWidth: "1px",
            borderTopColor: "rgba(0, 0, 0, 0.2)",
            alignContent: "center",
            justifyContent: "space-around",
            width: 240,
          }}
        >
          <IconButton sx={{ color: "red" }} onClick={handleLogout}>
            <LoginOutlinedIcon />
          <Typography sx={{ color: "red", fontSize: "1.2rem" }}>
            Logout
          </Typography>
          </IconButton>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 2,
          p:2,
          transition: "margin-left 0.3s",
          ml: open ? `${11}px` : 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
