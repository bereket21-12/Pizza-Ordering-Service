"use client";
import OrderHIstory from "@/components/card/pizza_dish";
import { getOrdersByUser } from "@/actions/userAction";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Box, CircularProgress, Typography } from "@mui/material";
const OrderHistoryPage = () => {
  const { data: session } = useSession();
  interface Pizza {
    name: string;
    toppings: string[];
    price: number;
    status: string;
    imgurl: string;
  }

  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPizzas() {
      const userId = Number(session?.user?.id);
      if (!userId) {
        setLoading(false);
        return <Typography variant="h6">No orders found</Typography>;
      }
      const orders = await getOrdersByUser(userId);
      console.log(orders);
      if (orders && orders.userOrders && orders.userOrders.length > 0) {
        const formattedPizzas = orders.userOrders.map((order: any) => ({
          ...order.Pizza,
          toppings: Array.isArray(order.toppings)
            ? order.toppings
            : order.toppings.split(","),
          status: order.status,
        }));
        setPizzas(formattedPizzas);
      }
      setLoading(false);
    }

    fetchPizzas();
  }, [session]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          height: "100vh ",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: "2px",
        p: 5,
      }}
    >
      {pizzas.map((pizza, index) => (
        <OrderHIstory
          key={index}
          image={pizza.imgurl}
          title={pizza.name}
          toppings={pizza.toppings}
          price={pizza.price}
          status={pizza.status}
        />
      ))}
    </Box>
  );
};

export default OrderHistoryPage;
