"use client";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import React, { useState } from "react";

interface PizzaDisProps {
  name: string;
  topping: string[];
  price: number;
  restaurantId: number;
  onUpdate: (update: { checkedToppings: string[]; quantity: number }) => void;
  onOrder: (orderDetails: {
    name: string;
    checkedToppings: string[];
    quantity: number;
    price: number;
    restaurantId: number;
  }) => void;
}

function Pizza_dis({
  name,
  topping,
  price,
  restaurantId,
  onUpdate,
  onOrder,
}: PizzaDisProps) {
  const [checkedToppings, setCheckedToppings] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const handleCheckboxChange = (topping: string) => {
    setCheckedToppings((prev) =>
      prev.includes(topping)
        ? prev.filter((t) => t !== topping)
        : [...prev, topping]
    );
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      onUpdate({ checkedToppings, quantity: newQuantity });
    }
  };

  React.useEffect(() => {
    onUpdate({ checkedToppings, quantity });
  }, [checkedToppings, quantity, onUpdate]);

  function handleOrder(): void {
    onOrder({
      name,
      checkedToppings,
      quantity,
      price: price * quantity,
      restaurantId,
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: { xs: "100%", md: "50%" },
        gap: 2,
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3rem" },
            textAlign: "center",
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
            mt: 2,
          }}
        >
          {Array.isArray(topping) &&
            topping.map((t: any) => (
              <FormControlLabel
                key={t.toppingId}
                control={
                  <Checkbox
                    checked={checkedToppings.includes(t.topping.id)}
                    onChange={() => handleCheckboxChange(t.topping.id)}
                    sx={{
                      "& .MuiSvgIcon-root": { color: "#FFA500" },
                      "&.Mui-checked .MuiSvgIcon-root": { color: "#FFA500" },
                    }}
                  />
                }
                label={t.topping.name}
              />
            ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mt: 2,
        }}
      >
        <Button
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: "bold",
            borderColor: "#FFA500",
            color: "black",
          }}
          variant="outlined"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </Button>
        <Typography sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}>
          {quantity}
        </Typography>
        <Button
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: "bold",
            borderColor: "#FFA500",
            color: "black",
          }}
          variant="outlined"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </Button>
        <Typography
          sx={{
            color: "#059605",
            fontWeight: "bold",
            fontSize: { xs: "1rem", md: "2rem" },
          }}
        >
          {price * quantity}
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
      </Box>
      <Button
        sx={{
          backgroundColor: "#FFA500",
          color: "white",
          fontSize: { xs: "1rem", md: "1.2rem" },
          mt: 2,
        }}
        onClick={handleOrder}
        variant="contained"
        endIcon={<CallMadeIcon />}
      >
        Order
      </Button>
    </Box>
  );
}

export default Pizza_dis;
