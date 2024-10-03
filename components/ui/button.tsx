import React from "react";
import { Button } from "@mui/material";

export default function Yellow_Button({ action }: { action: string }) {
  return (
    <Button
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
      {action}
    </Button>
  );
}
