import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Avatar from "@mui/material/Avatar";

export default function TopRestaurant() {

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
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            backgroundColor: "#FFF8F1",
          }} // Responsive font size
        >
          Top Restaurants
        </Typography>
      </Box>
      <Card
        sx={{
          margin: 2,
          padding: 2,
          display: "flex",
          flexDirection: "row",
          gap: 2,
          width: 500,
          height: 150,
          borderRadius: 3,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
              <Avatar alt="Remy Sharp" src="/avater2.jpeg" />

              <Typography sx={{ fontSize: "1 rem" }}>Asmare Pizza</Typography>
            </Box>
            <Typography sx={{ fontSize: "0.85rem" }}>
              Lorem ipsum laboriosam voluptatem? Earum commodi voluptas modi.
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            p: 5,
            display: "flex",
            flexDirection: "row",
            gap: 2,
            backgroundColor: "whitesmoke",
          }}
        >
          <AssignmentIcon
            sx={{ fontSize: "3rem", alignSelf: "center", color: "#FFA500" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "0.75rem", color: "gray" }}>
              Number of order
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "2rem", color: "#FFA500" }}
            >
              2k
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
}
