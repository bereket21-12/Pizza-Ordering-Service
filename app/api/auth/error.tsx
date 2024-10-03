'use client'
import { useRouter } from "next/router";
import { Box, Typography, Button } from "@mui/material";

export default function AuthErrorPage() {
  const router = useRouter();
  const { error } = router.query;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" sx={{ color: "red", mb: 2 }}>
        Authentication Error
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {error ? `Error: ${error}` : "An unexpected error occurred."}
      </Typography>
      <Button variant="contained" onClick={() => router.push("/")}>
        Back to Home
      </Button>
    </Box>
  );
}
