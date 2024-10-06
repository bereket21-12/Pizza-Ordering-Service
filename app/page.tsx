"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Landing from "@/components/landing";
import PizzaMenu from "@/components/card/menu";
import { Box, CircularProgress, Typography } from "@mui/material";
import SliderView from "@/components/card/featured_pizza";
import TopRestaurant from "@/components/card/top_restaurant";
import Contact from "@/components/contact";
import Heading from "@/components/ui/heading";
import Footer from "@/components/footer";
import Navbar from "@/components/common/navebar";
import { handleGetAllPizzas, searchPizza, getRestaurant } from "@/actions";
import { useSession } from "next-auth/react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  interface Pizza {
    id: number;
    imgurl: string;
    name: string;
    toppings: string[];
    price: number;
    restaurant: {
      name: string;
      imgUrl: string;
      restaurantId: number;
    };
  }

  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
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

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const router = useRouter();
  const { data: session } = useSession();

  const fetchRestaurants = async () => {
    try {
      const response = await getRestaurant();
      setRestaurants(response);
      console.log("Restaturants", response);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };
  const fetchPizzas = async (query: string = "") => {
    setLoading(true);
    try {
      const response = query
        ? await searchPizza(query.toLowerCase())
        : await handleGetAllPizzas();
      let pizzasData: Pizza[] = [];
      if (Array.isArray(response)) {
        pizzasData = response.map((pizza: any) => ({
          id: pizza.id,
          imgurl: pizza.imgurl,
          name: pizza.name,
          toppings: pizza.toppings ? pizza.toppings.split(",") : [],
          price: pizza.price,
          restaurant: {
            name: pizza.restaurantName,
            imgUrl: pizza.restaurantImgUrl,
            restaurantId: pizza.restaurantId,
          },
        }));
      } else if (response.success && response.pizzas) {
        pizzasData = response.pizzas.map((pizza: any) => ({
          ...pizza,
          restaurant: {
            name: pizza.restaurant.name,
            imgUrl: pizza.restaurant.imgUrl,
            restaurantId: pizza.restaurant.restaurantId,
          },
        }));
      }

      const formattedPizzas = pizzasData.map((pizza: any) => ({
        ...pizza,
        toppings: Array.isArray(pizza.toppings)
          ? pizza.toppings
          : pizza.toppings.split(","),
      }));
      setPizzas(formattedPizzas);
    } catch (error) {
      console.error("Failed to fetch pizzas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPizzas();
    fetchRestaurants();
  }, [session]);

  useEffect(() => {
    const debounceFetch = setTimeout(() => {
      fetchPizzas(searchQuery);
    }, 500);
    return () => clearTimeout(debounceFetch);
  }, [searchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const direct = (id: number) => {
    if (session?.user) {
      return router.push(`/customer/order?id=${id}`);
    }
    router.push("/login");
  };

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#FFF8F1" }}>
        <Landing
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />

        <TopRestaurant restaurants={restaurants} />
        <SliderView />
        <Heading heading={"Popular Pizzas"} />
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
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                height: "50vh",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            pizzas &&
            pizzas.length > 0 &&
            pizzas.map((pizza) => (
              <PizzaMenu
                key={pizza.id}
                image={pizza.imgurl}
                title={pizza.name}
                toppings={pizza.toppings}
                price={pizza.price}
                restaurantName={pizza.restaurant.name}
                footerImage={pizza.restaurant.imgUrl}
                onOrder={() => direct(pizza.id)}
              />
            ))
          )}
        </Box>
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
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              backgroundColor: "#FFF8F1",
            }}
          >
            Fasting Pizza
          </Typography>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                height: "50vh",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            pizzas &&
            pizzas.length > 0 && (
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
                {pizzas.map((pizza) => (
                  <SwiperSlide key={pizza.id}>
                    <PizzaMenu
                      image={pizza.imgurl}
                      title={pizza.name}
                      toppings={pizza.toppings}
                      price={pizza.price}
                      restaurantName={pizza.restaurant.name}
                      footerImage={pizza.restaurant.imgUrl}
                      onOrder={() => direct(pizza.id)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )
          )}
        </Box>
        <Footer />
        <Contact />
      </Box>
    </>
  );
}
