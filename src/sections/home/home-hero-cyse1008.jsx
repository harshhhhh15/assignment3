import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

// Custom Button Component
function CustomButton() {
  const [count, setCount] = useState(0);

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => setCount(count + 1)}
      sx={{ mt: 2, fontWeight: "bold", fontSize: "1rem", padding: "10px 20px" }}
    >
      Click Me {count}
    </Button>
  );
}

// Main Component
export function HomeHeroCYSE1008() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)", // Gradient background
        color: "white",
        padding: 4,
        borderRadius: 3,
        textAlign: "center",
        maxWidth: 450,
        margin: "auto",
        mt: 4,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow
      }}
    >
      <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: "bold" }}>
        Harsh Store
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "1.1rem", mb: 2 }}>
        Welcome to the best store for all your needs!
      </Typography>

      {/* Custom Button Component */}
      <CustomButton />
    </Box>
  );
}
