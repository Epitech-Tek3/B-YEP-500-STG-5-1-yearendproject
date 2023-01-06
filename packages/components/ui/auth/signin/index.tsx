import React, { useState } from "react";
import { Box, Flex, Text } from "rebass";
import Button from "@mui/material/Button";
import { Google } from "components/ui/appIcon/logo/Google";
import { Input } from "@rebass/forms";
import { useForm } from "react-hook-form";
import { API_ROUTE } from "../../../utils/constants";
import Router from "next/router";

export const Signin = ({ onChange }: any) => {
  const [error, setError] = useState(undefined);
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data: any) => {
    const res = await (
      await fetch(`${API_ROUTE}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data),
        credentials: "include"
      })
    ).json();

    if (res?.error) return setError(res.error);
    Router.reload();
  };

  return (
    <Flex justifyContent="center" width="100vw" height="100vh">
      <Flex flexDirection="column" justifyContent="center" alignItems="center" width="400px">
        <Button
          variant="contained"
          sx={{ width: "100%", p: 2, backgroundColor: "white", ":hover": { backgroundColor: "white" } }}
          // @ts-ignore
          onClick={() => window.location.replace("http://localhost:8080/auth/google")}
        >
          <Google width={20} height={20} />
          <Text as="p" ml={2} color="black" fontWeight={900}>
            Se connecter avec Google
          </Text>
        </Button>
        <Text as="p" fontSize={2} mt={3} fontWeight={700}>
          OU
        </Text>
        {error && (
          <Text as="span" color="red" mt={3} textAlign="left" width="100%">
            {error}
          </Text>
        )}
        <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
          <Box
            mt={3}
            width="100%"
            sx={{
              "& > input": {
                borderRadius: 4,
                border: "none",
                boxShadow:
                  "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                bg: "white",
                p: 3,
                width: "100%"
              }
            }}
          >
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="Adresse email"
              ref={register}
              required
              onChange={() => setError(undefined)}
            />
            <Input
              name="password"
              id="password"
              type="password"
              placeholder="Mot de passe"
              ref={register}
              mt={3}
              required
              onChange={() => setError(undefined)}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "100%", mt: 2, backgroundColor: "orange", ":hover": { backgroundColor: "orange" } }}
            >
              Se connecter
            </Button>
          </Box>
          <Flex mt={3}>
            <Text as="span" display="block">
              Vous n&apos;avez pas de compte ?&nbsp;
            </Text>
            <Text as="span" display="block" color="orange" sx={{ cursor: "pointer" }} onClick={onChange}>
              Inscrivez-vous
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
