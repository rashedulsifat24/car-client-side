import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
// import { TextField } from "@mui/material/TextField";
import useFirebase from "./../../../Hooks/useFirebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //location and history
  const location = useLocation();
  const history = useHistory();

  //from useAuth
  const { user, loding, authError, signInwithEmail, logInWithGoogle } =
    useFirebase();

  //handel email
  const handelEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  //handel password
  const handelPassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  //handel login form
  const handelLoginForm = (e) => {
    e.preventDefault();
    signInwithEmail(email, password, location, history);
  };
  //handel login with google
  const handelLoginWithGoogle = () => {
    logInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 8 }}>Login</Typography>
          {!loding && (
            <form onSubmit={handelLoginForm}>
              <TextField
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                onChange={handelEmail}
                label="Your Email"
                variant="standard"
                type="email"
              />
              <TextField
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                onChange={handelPassword}
                label="Your Password"
                variant="standard"
                type="password"
              />
              <Button
                type="submit"
                sx={{ width: "75%", mt: 3 }}
                variant="contained"
              >
                Login
              </Button>
              <Button variant="text" sx={{ mt: 2 }}>
                New user ? <NavLink to="/regi">Register now</NavLink>
              </Button>
            </form>
          )}
          <p>----------------------------</p>
          <Button onClick={handelLoginWithGoogle} variant="contained">
            logIn With Google
          </Button>

          {loding && <CircularProgress />}
          {authError && <Alert severity="error">{authError}</Alert>}
          {user?.email && <Alert severity="success">login successfully!</Alert>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
