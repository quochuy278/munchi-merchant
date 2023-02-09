import { Preferences } from "@capacitor/preferences";
import { zodResolver } from "@hookform/resolvers/zod";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TypeOf } from "zod";
import Notification from "../../components/notification";
import { AppDispatch, RootState } from "../../store";
import { setAuthenticated } from "../../store/auth-slice";
import { signInUser } from "../../store/services-slice";
import { displayError } from "../../utils/displayError";
import { signInSchema } from "../../utils/validateInput";

type SignInInput = TypeOf<typeof signInSchema>;
const theme = createTheme();
const SignInPage = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);
  const { isLoading, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    resetField,
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
  });
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/business", { replace: true });
    }
  }, [isAuthenticated]);

  const onHandleSubmit: SubmitHandler<SignInInput> = async (values) => {
    try {
      dispatch(signInUser({ email: values.email, password: values.password }));
    } catch (error) {
      const errorMsg = displayError(error);
      setShowError(true);
      setError(true);
      setMessage(errorMsg);
    }
  };
  setTimeout(() => {
    setShowError(false);
  }, 5000);
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
            onSubmit={handleSubmit(onHandleSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              type="email"
              {...register("email")}
              error={!!errors["email"]}
              helperText={errors["email"] ? errors["email"].message : ""}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              {...register("password")}
              autoComplete="current-password"
              error={!!errors["password"]}
              helperText={errors["password"] ? errors["password"].message : ""}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loadingPosition="center"
              {...(isLoading ? { loading: true } : { loading: false })}
            >
              Sign In
            </LoadingButton>
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
        {showError ? (
          <Box sx={{ marginTop: "20px" }}>
            <Notification message={message} isError={error} />
          </Box>
        ) : null}
      </Container>
    </ThemeProvider>
  );
};

export default SignInPage;
