"use client";
import Pizza_dis from "@/components/card/pizza_info";
import Related from "@/components/card/relatedpizza";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Heading from "@/components/ui/heading";
import { Box, CircularProgress } from "@mui/material";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { handleOrderForm } from "@/actions/adminAction";
import { useActionStateCompat } from "@strozw/use-action-state-compat";
import { orderPizzaById } from "@/actions/userAction";
import toast from "react-hot-toast";
import { Modal, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const defaualtImage = ["/Image (1).png"];
let uniqueArray = Array.from(new Set(defaualtImage));

type OrderInfo = {
  checkedToppings: string[];
  quantity: number;
  restaurantId: number;
  userId: number;
  price: number;
  pizzaId: number;
  name: string;
  imgurl: string[];
};

function Page() {
  const [state, dispatch, isPending] = useActionStateCompat(
    handleOrderForm,
    null
  );
  const { data: session } = useSession();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pizzaImages] = useState(defaualtImage);
  const [pizzaDetails, setPizzaDetails] = useState<any>(null);
  const [orderInfo, setOrderInfo] = useState<OrderInfo>({
    checkedToppings: [],
    quantity: 0,
    restaurantId: 0,
    userId: 0,
    price: 0,
    pizzaId: 0,
    name: "",
    imgurl: [],
  });

  const searchParams = useSearchParams();
  const pizzaid = searchParams.get("id");
  useEffect(() => {
    const userId = session?.user?.id || 1;
    async function fetchData() {
      const detail = await orderPizzaById(Number(pizzaid));
      if (detail) {
        setPizzaDetails(detail);
        setOrderInfo((prev) => ({
          ...prev,
          checkedToppings: [],
          quantity: 1,
          restaurantId: detail.restaurantId,
          userId: userId,
          price: detail.price,
          pizzaId: Number(pizzaid),
          name: detail.name,
        }));
      }
      if (detail?.imgurl) {
        defaualtImage.push(detail.imgurl);
        uniqueArray = Array.from(new Set(defaualtImage));
      }
    }

    fetchData();
  }, [session?.user?.id]);

  useEffect(() => {
    if (state?.success) {
      setShowSuccessModal(true);
    } else if (state?.error) {
      toast.error("Order failed");
    }
  }, [state]);

  const handleDishClick = (index: number) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 900);
    }
  };

  const handleUpdate = (update: {
    checkedToppings: string[];
    quantity: number;
  }) => {
    setOrderInfo((prev) => ({
      ...prev,
      checkedToppings: update.checkedToppings,
      quantity: update.quantity,
    }));
  };

  const orderPizza = () => {
    const { checkedToppings, quantity, restaurantId, userId, price, pizzaId } =
      orderInfo;
    console.log(orderInfo);
    const formData = new FormData();
    formData.append("checkedToppings", JSON.stringify(checkedToppings));
    formData.append("quantity", quantity.toString());
    formData.append("restaurantId", restaurantId.toString());
    formData.append("userId", userId.toString());
    formData.append("price", price.toString());
    formData.append("pizzaId", pizzaId.toString());
    dispatch(formData);
  };

  if (isPending) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          height: "50vh ,pr:240",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Suspense
      fallback={
        <Box sx={{ pt: 20, display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      }
    >
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 2, md: 9 },
            height: { xs: "auto", md: 400 },
            gap: 7,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 300, md: 430 },
              height: { xs: 300, md: 430 },
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: { xs: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                width: { xs: 250, md: 330 },
                height: { xs: 250, md: 330 },
                backgroundColor: "#EA810033",
                borderRadius: "50%",
                position: "absolute",
                zIndex: 0,
              }}
            />

            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition:
                  "transform 0.9s ease-in-out, opacity 0.6s ease-in-out",
                transform: isAnimating
                  ? "translateX(-100%) rotate(-180deg)"
                  : "translateX(0) rotate(0)",
                zIndex: 1,
                opacity: isAnimating ? 0 : 1,
              }}
            >
              <Box
                component="img"
                src={pizzaImages[currentIndex]}
                alt="Pizza"
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition:
                  "transform 0.9s ease-in-out, opacity 0.6s ease-in-out",
                transform: isAnimating
                  ? "translateX(0) rotate(180deg)"
                  : "translateX(100%) rotate(0)",
                zIndex: 2,
                opacity: isAnimating ? 1 : 0,
              }}
            >
              <Box
                component="img"
                src={pizzaImages[(currentIndex + 1) % pizzaImages.length]}
                alt="Pizza"
                sx={{
                  width: { xs: 150, md: 150 },
                  height: { xs: 150, md: 150 },
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              pr: { xs: 0, md: 5 },
              overflow: "hidden",
            }}
          >
            {uniqueArray.map((image, index) => (
              <Box
                key={index}
                sx={{ transform: "scale(0.8)", cursor: "pointer" }}
                onClick={() => handleDishClick(index)}
              >
                <Box
                  sx={{
                    width: 180,
                    height: 180,
                    backgroundColor: "#EA810033",
                    borderRadius: "50%",
                    position: "relative",
                    mx: "auto",
                    mt: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt="Pizza"
                    sx={{
                      width: 150,
                      height: 150,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>

          <Pizza_dis
            name={pizzaDetails?.name}
            price={parseFloat(pizzaDetails?.price)}
            topping={pizzaDetails?.toppings}
            restaurantId={pizzaDetails?.restaurantId}
            onUpdate={handleUpdate}
            onOrder={orderPizza}
          />
        </Box>

        <Heading heading={"Related"} />
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            // justifyContent: "flex-start",
            gap: 2,
            p: 5,
          }}
        > */}
        <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <SwiperSlide key={index}>
              <Related key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </Box> */}
        <Modal
          open={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { sx: "450px", md: "600px" },
              height: "400px",
              backgroundColor: "white",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                width: 160,
                height: 160,
                backgroundColor: "#05C6051A",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "green",
                }}
              >
                <CheckCircleIcon sx={{ fontSize: "8rem" }} />
              </Box>
            </Box>

            <Typography
              variant="h4"
              sx={{
                color: "green",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Your order has been successfully completed!
            </Typography>
          </Box>
        </Modal>

        <Footer />
        <Contact />
      </Box>
    </Suspense>
  );
}

export default Page;
