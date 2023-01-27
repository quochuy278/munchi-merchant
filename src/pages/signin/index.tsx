import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppDispatch, useTypedSelector } from "../../store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { SignInService } from "../../services/services";
import { setUser, signin } from "../../store/auth-slice";
import Notification from "../../components/notification";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateSignInData } from "../../utils/validateInput";

const theme = createTheme();
const SignInPage = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)!;
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const validatedData = validateSignInData(email, password);
    console.log(validatedData);

    if (!validatedData.isValidated) {
      setError(true);
      setMessage(validatedData.message);
      return;
    } else {
      const signInData = {
        email: email,
        password: password,
      };
      try {
        const response = await SignInService(signInData);
        dispatch(setUser(response.data));
        console.log(response.data);
       
      } catch (error) {
        console.log(error);
      }
    }
    console.log(userInfo);
    // if (!userInfo[0]) {
    //   console.log("No user info");
    
    // } else {
    //   console.log(userInfo);
    //   dispatch(signin());
    //   navigate("/business");
    // }
  };
  const showNotification = () => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  };
  if (error) showNotification();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {error ? (
          <Box sx={{ marginTop: "20px" }}>
            <Notification message={message} isError={error} />
          </Box>
        ) : null}
      </Container>
    </ThemeProvider>
  );
};

export default SignInPage;
