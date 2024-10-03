import { Box, Avatar, Typography } from '@mui/material';
import React from 'react'

export default function Menu_footer({path,name}:{path:string,name:string}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        mt: "2px",
        height:"content",
      }}
    >
      <Avatar
        src={path}
        alt="Restaurant"
        sx={{ width: 40, height: 40, mr: 1, mt: "1px" }}
      />
      <Typography
        sx={{ fontWeight: "bold", fontSize: "0.75em" }}
        variant="body2"
      >
        {name}
      </Typography>
    </Box>
  );
}

