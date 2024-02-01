import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function ServerError() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography gutterBottom variant="h3" color="secondary">
            {state.error.title}
          </Typography>
          <Divider />
          <Typography variant="body1">
            {state.error.detail || "Internal server error"}{" "}
          </Typography>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          Server Error
        </Typography>
      )}

      <Typography gutterBottom variant="h5">
        Server error
      </Typography>
      <Button onClick={() => navigate("./catalog")}>
        Go back to the Store
      </Button>
    </Container>
  );
}
