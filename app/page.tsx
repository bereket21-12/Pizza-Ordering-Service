'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Landing from "@/components/landing";
import PizzaMenu from "@/components/card/menu";
import { Box, CircularProgress } from "@mui/material";
import SliderView from "@/components/card/featured_pizza";
import TopRestaurant from "@/components/card/top_restaurant";
import Contact from "@/components/contact";
import Heading from "@/components/ui/heading";
import Footer from "@/components/footer";
import Navbar from "@/components/common/navebar";
import { handleGetAllPizzas } from "@/actions";
import { useSession } from "next-auth/react";



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

  const router = useRouter();
const { data: session } = useSession();
  useEffect(() => {
    async function fetchPizzas() {
      const { success, pizzas } = await handleGetAllPizzas();
      if (success && pizzas) {
        const formattedPizzas = pizzas.map((pizza: any) => ({
          ...pizza,
          toppings: Array.isArray(pizza.toppings) ? pizza.toppings : pizza.toppings.split(','),
        }));
        setPizzas(formattedPizzas);
      }
      setLoading(false);
    }
    fetchPizzas();
    console.log("your session", session?.user.email);
  }, [session]);
const direct = (id:number) => {

  if (session?.user) {
    
    router.push(`/customer/order?id=${id}`);
  }
      router.push("/login")
    
}

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#FFF8F1" }}>
        <Landing />
        <TopRestaurant />
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
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', height: '50vh ,pr:240' }}>
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
        <Footer />
        <Contact />
      </Box>
    </>
  );
}
