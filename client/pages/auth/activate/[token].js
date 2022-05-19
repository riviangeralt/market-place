import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import instance from "../../../utils/interceptor";
import jwt from "jsonwebtoken";
import { Button, Stack, Typography } from "@mui/material";

const Activate = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { token } = router.query;
  useEffect(() => {
    if (token) {
      const decoded = jwt.decode(token);
      setName(decoded?.name);
    }
  }, [token]);
  const handleSubmit = async () => {
    console.log(token);
    try {
      const response = await instance.post("/activate", token);
      setMessage(response.data);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data);
    }
  };
  return (
    <Stack
      sx={{
        width: "50%",
        margin: "0 auto",
        padding: "16px",
        height: "calc(100vh - 100px) !important",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" sx={{ mb: "1rem" }}>
        <strong>
          <i> G'day {name}.</i>
        </strong>{" "}
        Ready to activate your account?
      </Typography>
      <Button
        variant="contained"
        disableElevation
        onClick={handleSubmit}
        fullWidth
      >
        Activate
      </Button>
    </Stack>
  );
};

export default Activate;
