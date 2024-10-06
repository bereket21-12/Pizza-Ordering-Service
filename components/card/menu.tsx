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
  image: string;
  title: string;
  toppings: string[];
  price: number;
  restaurantName: string;
  footerImage: string;
  onOrder: () => void;
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
          src={image}
          alt={title}
          sx={{
            width: 250,
            height: 250,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
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
          {title}
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
