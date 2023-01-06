import React, { useState } from "react";
import { Box, Flex, Text } from "rebass";
import Button from "@mui/material/Button";
import { Google } from "components/ui/appIcon/logo/Google";
import { Input } from "@rebass/forms";
import { API_ROUTE } from "../../../utils/constants";
import { useForm } from "react-hook-form";
import Router from "next/router";

export const Signup = ({ onChange }: any) => {
  const [error, setError] = useState(undefined);
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await (
        await fetch(`${API_ROUTE}/auth/signup`, {
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
    } catch (e: any) {
      setError(e.error);
    }
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
            S&apos;inscrire connecter avec Google
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
              type="email"
              placeholder="Adresse email"
              required
              ref={register}
              onChange={() => setError(undefined)}
            />
            <Input
              name="password"
              type="password"
              placeholder="Mot de passe"
              mt={3}
              required
              ref={register}
              onChange={() => setError(undefined)}
            />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirmer mot de passe"
              mt={3}
              required
              ref={register}
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
        </Box>
        <Flex mt={3}>
          <Text as="span" display="block">
            Vous avez déjà un compte ?&nbsp;
          </Text>
          <Text as="span" display="block" color="orange" sx={{ cursor: "pointer" }} onClick={onChange}>
            Connectez-vous
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
