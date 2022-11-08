import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography ,Link, Container} from "@mui/material";
import React from "react";
import MainContent from "../../components/container/MainContent";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    const dispatch = useDispatch()
     const navigate = useNavigate();
     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
       
       const data = new FormData(event.currentTarget);
      //  console.log({
      //    email: data.get("email"),
      //    password: data.get("password"),
      //  });
       dispatch(login())
          navigate("/dashboard", { replace: true });
     };
  return (
    <MainContent>
      <Container component="main" maxWidth="xs">
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
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </MainContent>
  );
};

export default AuthPage;
