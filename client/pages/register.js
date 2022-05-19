import { AccountCircle } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  FormGroup,
  InputAdornment,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormTextField from "../components/controls/TextField";
import instance from "../utils/interceptor";

const Register = () => {
  const methods = useForm();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = async (data) => {
    const response = await instance.post("/register", data);
    setOpen(true);
    if (response.data) {
      setMessage(response.data);
    } else {
      setMessage(response.error);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
          variant="filled"
          elevation={6}
        >
          {message.split("\n").map((line) => (
            <Typography variant="body1" key={line}>
              {line}
            </Typography>
          ))}
        </Alert>
      </Snackbar>
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
        <Typography
          variant="h4"
          sx={{
            mb: "1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={methods.handleSubmit(handleSubmit)}
          sx={{ width: "100%" }}
        >
          <FormGroup sx={{ mb: 2 }}>
            <FormTextField
              label="Name"
              name="name"
              rules={{ required: "Name is required" }}
              control={methods.control}
              error={methods.formState.errors}
              autoFocus
              autoComplete="off"
              onChange={(e) => {
                methods.setValue("name", e.target.value);
                methods.clearErrors("name");
              }}
              fullWidth
            />
          </FormGroup>
          <FormGroup sx={{ mb: 2 }}>
            <FormTextField
              label="Email"
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              }}
              control={methods.control}
              error={methods.formState.errors}
              autoFocus
              autoComplete="off"
              onChange={(e) => {
                methods.setValue("email", e.target.value);
                methods.clearErrors("email");
              }}
              fullWidth
            />
          </FormGroup>
          <FormGroup sx={{ mb: 2 }}>
            <FormTextField
              label="Password"
              name="password"
              type="password"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Too Short",
                },
              }}
              control={methods.control}
              error={methods.formState.errors}
              autoFocus
              autoComplete="off"
              onChange={(e) => {
                methods.setValue("password", e.target.value);
                methods.clearErrors("password");
              }}
              fullWidth
            />
          </FormGroup>
          <Button type="submit" variant="contained" disableElevation>
            Submit
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default Register;
