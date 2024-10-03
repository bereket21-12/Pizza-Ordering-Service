import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  Box,
  Divider,
  Button,
} from "@mui/material";
import Menu_footer from "./menu_footer";

interface PizzaMenuProps {
  image: string; // Image URL for the pizza
  title: string; // Pizza name/title
  toppings: string[]; // List of toppings
  price: number; // Price of the pizza
  restaurantName: string; // Restaurant name
  footerImage: string; // Footer image (optional)
  onOrder: () => void; // Action for order button
}

const PizzaMenu: React.FC<PizzaMenuProps> = ({
  image,
  title,
  toppings,
  price,
  restaurantName,
  footerImage,
  onOrder,
}) => {
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
          width: 300, // Ellipse width
          height: 300, // Ellipse height (to make it a dish-like circle)
          mx: "auto", // Center horizontally
          mt: 2, // Margin on top
          position: "relative", // Allows absolute positioning of the image
          backgroundColor: "#FFF8F1", // Dish background color
          borderRadius: "50%", // Makes it a circle
        }}
      >
        {/* Image on top of the ellipse (the pizza) */}
        <Box
          component="img"
          src={image} // Use the passed image prop
          alt={title} // Use the title prop for the alt text
          sx={{
            width: 250, // Adjust size of pizza image
            height: 250,
            position: "absolute", // Position inside the circle
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Adjust for centering
            borderRadius: "50%", // Make it a circle
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
          {title} {/* Use the passed title prop */}
        </Typography>

        {/* Dynamically generate toppings */}
        <Grid container spacing={1}>
          {toppings.map((topping, index) => (
            <Grid item key={index}>
              <Chip label={topping} variant="outlined" size="small" />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
            mt: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#059605",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            {price}
            <sup
              style={{
                fontWeight: "lighter",
                fontSize: "0.35em",
                color: "black",
              }}
            >
              Birr
            </sup>
          </Typography>
          <Button
          onClick={onOrder}
      variant="contained"
      sx={{
        backgroundColor: "#FFA500",
        fontWeight: "bold",
        fontSize: "1.2rem",
        color: "white",
        "&:hover": {
          backgroundColor: "#FF8C00",
        },
        borderRadius: 2,
      }}
    >
     Order
    </Button>
        </Box>

        <Divider />

        <Menu_footer path={footerImage} name={restaurantName} />
      </CardContent>
    </Card>
  );
};

export default PizzaMenu;
