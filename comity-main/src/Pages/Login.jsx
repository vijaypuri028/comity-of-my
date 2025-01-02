import {
  Box,
  Button,
  FormControl,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  lightNavyBg,
  navyLogoColor,
  navyLogoHoverColor,
} from "../Common/constants";
import { useNavigate } from "react-router-dom";
import { adminRoute, signupRoute } from "../Common/routes";
import Footer from "../Components/utils/Footer";
import useApi from "../Hooks/useApi";
import { apiAuthUrl } from "../services/api.url";
import { KEY_ACCESS_TOKEN, setItem } from "../utils/localStorageManager";

const Login = () => {
  const navigate = useNavigate();

  const getLoginService = useApi(apiAuthUrl.login);

  const [loginMail, setLoginMail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await getLoginService.call({
        email: loginMail,
        password: password,
        });
        const { response, error } = res;
        console.log(response);

        if (response?.result?.authToken) {
        setItem(KEY_ACCESS_TOKEN, response.result.authToken);
        navigate(adminRoute.path);
        } else {
        console.log(error);
        }
    } catch (err) {
            console.log("Login failed", err.message);
    }
};

  const goToSignup = () => {
    navigate(signupRoute.path);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: lightNavyBg,
          display: "flex",
          flexDirection: "column",
          paddingBlock: {
            xs: 2,
            sm: 4,
            md: 6,
          },
          alignItems: "center",
        }}
      >
        <FormControl
          sx={{
            background: "white",
            width: {
              xs: "90%",
              sm: "60%",
              md: "40%",
            },
            paddingInline: {
              xs: 2,
              sm: 5,
            },
            mt: '70px',
            display: "flex",
            flexDirection: "column",
            gap: 5,
            paddingBlock: 5,
            border: `2px solid ${navyLogoColor}`,
            "& > div": {
              background: "white",
            },
            "& > button": {
              maxWidth: 150,
              marginInline: "auto",
              background: navyLogoColor,
              textTransform: "none",
              ":hover": {
                background: navyLogoHoverColor,
              },
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: navyLogoColor,
              textAlign: "center",
            }}
          >
            Login
          </Typography>
          <TextField
            label="Email"
            type="email"
            onChange={(e) => setLoginMail(e.target.value)}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />

          <Button
            type="submit"
            size="large"
            variant="contained"
            onClick={handleLoginSubmit}
          >
            Login
          </Button>
        </FormControl>

        {/* <Typography
          sx={{
            pt: 2,
            color: "gray",
            "& > a": {
              pl: 1,
              cursor: "pointer",
            },
          }}
        >
          Don't have an account?
          <Link onClick={goToSignup}>Signup</Link>
        </Typography> */}
      </Box>

      <Footer />
    </>
  );
};

export default Login;
