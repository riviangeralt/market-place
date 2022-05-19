import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  FormGroup,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import FormTextField from "../components/controls/TextField";

const Login = () => {
  const methods = useForm();
  const handleSubmit = (e) => {
    console.log(e);
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
      <Typography
        variant="h4"
        sx={{
          mb: "1rem",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(handleSubmit)}
        sx={{ width: "100%" }}
      >
        <FormGroup sx={{ mb: 2 }}>
          <FormTextField
            label="Email"
            name="email"
            rules={{ required: "Email is required" }}
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
  );
};

export default Login;
