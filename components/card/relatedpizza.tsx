import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  Box,
} from "@mui/material";


function Related() {
  return (
    <Card
      sx={{
        maxWidth: 350,
        width: "100%",
        mx: "auto",
        mt: 1,
        borderRadius: 5,
      }}
    >
      {/* Ellipse-shaped background with image on top */}
      <Box
        sx={{
          width: 300, 
          height: 300, 
          mx: "auto", 
          mt: 2, 
          position: "relative", 
          backgroundColor: "#FFF8F1", 
          borderRadius: "50%", 
        }}
      >
        {/* Image on top of the ellipse (the pizza) */}
        <Box
          component="img"
          src="/Image (1).png" 
          alt="Pizza"
          sx={{
            width: 250, 
            height: 250,
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)", 
          }}
        />
      </Box>

      <CardContent>
        <Typography
          sx={{
            fontWeight: "bold",
            mb: 1,
            alignSelf: "flex-start",
          }}
        >
          Margherita Pizza
        </Typography>

        <Grid container spacing={1}>
          <Grid item>
            <Chip label="Tomato" variant="outlined" size="small" />
          </Grid>
          <Grid item>
            <Chip label="Cheese" variant="outlined" size="small" />
          </Grid>
          <Grid item>
            <Chip label="Basil" variant="outlined" size="small" />
          </Grid>
        </Grid>




      </CardContent>
    </Card>
  );
}

export default Related;
