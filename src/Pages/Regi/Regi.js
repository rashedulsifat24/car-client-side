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
import { NavLink, useHistory } from "react-router-dom";
import useFirebase from "./../../Hooks/useFirebase";

const Regi = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState({});
  const [rePassword, setRePassword] = useState({});
  const { registerUser, user, authError, loding } = useFirebase();

  //history
  const history = useHistory();

  //handel name
  const handelName = (e) => {
    const name = e.target.value;
    setName(name);
  };
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

  //handel re password
  const handelReTypePassword = (e) => {
    const rePassword = e.target.value;
    setRePassword(rePassword);
  };

  //handel regi form
  const handelRegiForm = (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      alert("your password dit not match");
      return;
    }
    registerUser(email, password, name, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 8 }}>Register</Typography>

          {!loding && (
            <form onSubmit={handelRegiForm}>
              <TextField
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                onChange={handelName}
                label="Your Name"
                variant="standard"
                type="text"
              />
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
              <TextField
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                onChange={handelReTypePassword}
                label="Re-type Your Password"
                variant="standard"
                type="password"
              />
              <Button
                type="submit"
                sx={{ width: "75%", mt: 3 }}
                variant="contained"
              >
                Register Now
              </Button>
              <Button variant="text" sx={{ mt: 2 }}>
                Already registerd ? <NavLink to="/login">Login</NavLink>
              </Button>
            </form>
          )}
          {loding && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">Account create successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <img style={{ width: "90%" }} src={login} /> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Regi;
