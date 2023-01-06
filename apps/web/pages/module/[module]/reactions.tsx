import { API_ROUTE } from "components/utils/constants";
import { Box, Flex, Text } from "rebass";
import { Button } from "@mui/material";
import { Grid } from "components/ui/grid";
import { Logo } from "@pages/history";
import { reactions } from "../constants";
import React from "react";
import Router from "next/router";

const ModulePage = () => {
  return (
    <Flex flexDirection="column" mt={64}>
      <Flex justifyContent="center" alignItems="center">
        <Flex flexDirection="column" mt={5} width="100%">
          <Text as="h1" textAlign="center" mb={5}>
            Réactions
          </Text>
          <Grid widthItems="250px" containerProps={{ mx: "auto", width: "80%" }}>
            {reactions.map((react, i) => (
              <Box key={i + "service"}>
                <Flex size={40} mx="auto" mb={3} sx={{ borderRadius: "50%", p: 2, boxShadow: "3px 5px 5px lightGrey" }}>
                  <Logo module={react.name} />
                </Flex>
                {react.reactions.map((react, i) => (
                  <Button
                    variant="contained"
                    key={i + "react-button"}
                    disableTouchRipple
                    sx={{
                      p: 3,
                      mb: 1,
                      position: "relative",
                      display: "block",
                      color: "black",
                      textTransform: "unset",
                      backgroundColor: "white",
                      ":hover": { backgroundColor: "white" }
                    }}
                    onClick={async () => {
                      Router.push({
                        pathname: `/module/${Router.query.module}/reactions`,
                        query: { ...Router.query, react: react.title }
                      });
                      localStorage.setItem(
                        "user",
                        JSON.stringify(
                          (
                            await (
                              await fetch(`${API_ROUTE}/area/createArea`, {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  Accept: "application/json"
                                },
                                credentials: "include",
                                body: JSON.stringify({
                                  module: Router.query.module,
                                  action: Router.query.action,
                                  reaction: react.title
                                })
                              })
                            ).json()
                          ).user
                        )
                      );
                      window.location.replace("/?e=area-created");
                    }}
                  >
                    <Text as="p" fontSize={2}>
                      {react.title}
                    </Text>
                    <Text as="p" fontSize={1} mt={3} color="grey">
                      {react.description}
                    </Text>
                  </Button>
                ))}
              </Box>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ModulePage;
