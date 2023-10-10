import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../services/firebase";

import { FcGoogle } from "react-icons/fc";
import { useRef } from "react";
import { useState } from "react";

const provider = new GoogleAuthProvider();

const defaultTheme = createTheme();

export const Login = () => {
  const [user, setUser] = useState({});

  // untuk dapet value dari input
  const emailRef = useRef();
  const passRef = useRef();

  onAuthStateChanged(auth, (userLogin) => {
    console.log(userLogin);
    setUser(userLogin);
  });

  const onRegister = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      );
      emailRef.current.value = "";
      passRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };

  const onLogin = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      );
      emailRef.current.value = "";
      passRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Typography component="h1">Sign in</Typography>
          <Typography component="h6">{user && user?.email}</Typography>
          <Box
            component="form"
            // noValidate
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
              inputRef={emailRef}
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
              inputRef={passRef}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              onClick={onRegister}
              sx={{ mt: 3, mb: 1.5 }}
            >
              Sign Up
            </Button>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              onClick={onLogin}
              sx={{ mb: 1.5 }}
            >
              Sign In
            </Button>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              onClick={() => signOut(auth)}
              sx={{ mb: 1.5 }}
            >
              Sign Out
            </Button>
            <Button
              // type="submit"
              fullWidth
              variant="outlined"
              onClick={() => signInWithPopup(auth, provider)}
              sx={{
                display: "flex",
                mb: 1.5,
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <FcGoogle />
              <Typography sx={{ ml: 1 }}>Sign in with google</Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
