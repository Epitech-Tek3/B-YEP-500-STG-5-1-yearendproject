import { API_ROUTE } from "components/utils/constants";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { AuthProvider } from "@contexts/AuthContext";
import { Box, Text } from "rebass";
import React from "react";
import Router from "next/router";
import Link from "next/link";

const MyApp = ({ Component, pageProps, err }) => {
  return (
    <>
      <AuthProvider>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                color="black"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                onClick={() => Router.replace("/")}
              >
                Area
              </Typography>
              <Link href="/history" passHref>
                <Text as="a" color="black" fontSize={1} mr={3} sx={{ textDecoration: "none" }}>
                  Historique
                </Text>
              </Link>
              <Button
                color="inherit"
                sx={{ color: "black", textTransform: "unset" }}
                onClick={async () => {
                  localStorage.removeItem("user");
                  await fetch(`${API_ROUTE}/auth/logout`, {
                    method: "post",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json"
                    },
                    credentials: "include"
                  });
                  Router.replace("/");
                }}
              >
                Se déconnecter
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Component {...pageProps} err={err} />
      </AuthProvider>
    </>
  );
};

export default MyApp;
