"use client";
import React from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../../app/globals.css";
import { Autoplay, Pagination } from "swiper/modules";

const SliderView = () => {
  return (
    <>
      <Box sx={{ pl: { xs: 2, md: 10 }, backgroundColor: "#FFF8F1" }}>
        {" "}
        <Typography
          variant="h3"
          align="left"
          sx={{
            mb: 3,
            ml: 2,
            mt: 5,
            color: "gray",
            fontSize: { xs: "1.5rem", md: "2.5rem" },
          }}
        >
          Featured Pizza
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: 550, sm: 800, md: 1100 },
          // ml: { xs: 4, sm: 6, md: 12 },
          mx: "auto",
          borderRadius: 6,
          backgroundColor: "#FFF8F1",
        }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}" style="background-color: ${
                className.includes("swiper-pagination-bullet-active")
                  ? "#FFA500"
                  : "gray"
              };"></span>`,
          }}
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#1c465c",
                borderRadius: 6,
                height: { xs: 250, md: 300 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  padding: { xs: 2, md: 6 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "1.25rem",
                    color: "white",
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                >
                  Make your first order and get
                  <span style={{ color: "#FFA500", fontWeight: "bold" }}>
                    {" "}
                    50% off
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.75rem", md: "1rem" },
                  }}
                >
                  Lorem ipsum Lorem ipsum dolor sit amet consectetur <br />
                  dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFA500",
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    color: "white",
                    width: { xs: 150, md: 200 },
                    "&:hover": {
                      backgroundColor: "#FF8C00",
                    },
                    borderRadius: 2,
                  }}
                >
                  Order Now
                </Button>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardMedia
                  component="img"
                  sx={{
                    maxHeight: { xs: 150, md: 250 },
                    maxWidth: "100%",
                    objectFit: "cover",
                    pl: 0,
                  }}
                  image="/bg_pizza.png"
                  alt="pizza"
                />
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#2d2f30",
                borderRadius: 6,
                height: { xs: 250, md: 300 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  padding: { xs: 2, md: 6 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "1.25rem",
                    color: "white",
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                >
                  Make your first order and get
                  <span style={{ color: "#FFA500", fontWeight: "bold" }}>
                    {" "}
                    50% off
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.75rem", md: "1rem" },
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum
                  <br /> dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFA500",
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    color: "white",
                    width: { xs: 150, md: 200 },
                    "&:hover": {
                      backgroundColor: "#FF8C00",
                    },
                    borderRadius: 2,
                  }}
                >
                  Order Now
                </Button>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardMedia
                  component="img"
                  sx={{
                    maxHeight: { xs: 150, md: 250 },
                    maxWidth: "100%",
                    objectFit: "cover",
                    pl: 0,
                  }}
                  image="/bg_pizza.png"
                  alt="pizza"
                />
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default SliderView;
