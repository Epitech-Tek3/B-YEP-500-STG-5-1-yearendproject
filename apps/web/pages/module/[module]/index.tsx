import { actions } from "../constants";
import { Button } from "@mui/material";
import { Box, Flex, Text } from "rebass";
import { GetStaticPaths, GetStaticProps } from "next";
import { Grid } from "components/ui/grid";
import React from "react";
import Router from "next/router";

const ModulePage = ({ params }) => {
  const act = actions.filter((action) => action.name == params.module)[0];

  return (
    <Flex flexDirection="column" mt={64}>
      <Flex justifyContent="center" alignItems="center">
        <Box mt={5}>
          <Text as="h1" textAlign="center" mb={5}>
            Actions
          </Text>
          <Grid widthItems="300px">
            {act.actions.map((action, i) => (
              <Button
                variant="contained"
                key={i}
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
                onClick={() =>
                  Router.push({
                    pathname: `/module/${Router.query.module}/reactions`,
                    query: { ...Router.query, action: action.title }
                  })
                }
              >
                <Text as="p" fontSize={3}>
                  {action.title}
                </Text>
                <Text as="p" fontSize={2} mt={3}>
                  {action.description}
                </Text>
              </Button>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Flex>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ["github", "google", "discord", "microsoft", "twitch", "spotify"];

  return {
    paths: paths.map((path) => ({
      params: { module: path }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: { params } };
};

export default ModulePage;
