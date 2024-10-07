import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Avatar from "@mui/material/Avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

type Restaurant = {
  id: number;
  name: string;
  imgUrl: string;
  User: {
    name: string | null;
  }[];
  _count: {
    orders: number;
  };
};

type TopRestaurantProps = {
  restaurants: Restaurant[];
};

export default function TopRestaurant({ restaurants }: TopRestaurantProps) {
  return (
    <>
      <Box
        sx={{
          pl: { xs: 2, md: 10 },
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FFC993 76%, #FFF8F1   100%)",
        }}
      >
        <Typography
          variant="h3"
          align="left"
          sx={{
            mb: 3,
            ml: 2,
            mt: 5,
            color: "gray",
            fontSize: { xs: "1rem", md: "2.5rem" },
            backgroundColor: "#FFF8F1",
          }}
        >
          Top Restaurants
        </Typography>
      </Box>
      <Swiper
        spaceBetween={40}
        pagination={{ clickable: true }}
        style={{ paddingLeft: 50 }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {restaurants.map((restaurant) => (
          <SwiperSlide key={restaurant.id}>
            <Card
              sx={{
                margin: 1,
                padding: 1,
                display: "flex",
                flexDirection: "row",
                gap: 1,
                width: "90%",
                height: "auto",
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                    <Avatar alt={restaurant.name} src={restaurant.imgUrl} />
                    <Typography sx={{ fontSize: "0.9rem" }}>
                      {restaurant.name}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "0.75rem" }}>
                    Managed by {restaurant.User[0]?.name}
                  </Typography>
                </CardContent>
              </Box>
              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  backgroundColor: "whitesmoke",
                }}
              >
                <AssignmentIcon
                  sx={{
                    fontSize: "2rem",
                    alignSelf: "center",
                    color: "#FFA500",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "0.65rem", color: "gray" }}>
                    Number of orders
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      color: "#FFA500",
                    }}
                  >
                    {restaurant._count.orders}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
