// CardApidata.styles.js
import { styled } from "@mui/material/styles";
import { Card, Typography, Button } from "@mui/material";

// 🔹 Custom Styled Components
export const CustomCard = styled(Card)({
  maxWidth: 400,
  margin: "20px auto",
  borderRadius: "20px",
  boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
  padding: "16px",
  background: "linear-gradient(145deg, #ffffff, #f3f3f3)",
});

export const TitleText = styled(Typography)({
  fontWeight: "bold",
  color: "#333",
  textAlign: "center",
});

export const BodyText = styled(Typography)({
  color: "#555",
  textAlign: "center",
  marginBottom: "16px",
});

export const CancelButton = styled(Button)({
  background: "linear-gradient(45deg, #ff4e50, #f44336)",
  color: "white",
  fontWeight: "bold",
  padding: "6px 24px",
  borderRadius: "30px",
  boxShadow: "0px 4px 10px rgba(244,67,54,0.4)",
  "&:hover": { background: "linear-gradient(45deg, #e53935, #d32f2f)" },
});

export const SubmitButton = styled(Button)({
  background: "linear-gradient(45deg, #43a047, #2e7d32)",
  color: "white",
  fontWeight: "bold",
  padding: "6px 24px",
  borderRadius: "30px",
  boxShadow: "0px 4px 10px rgba(46,125,50,0.4)",
  "&:hover": { background: "linear-gradient(45deg, #388e3c, #1b5e20)" },
});
