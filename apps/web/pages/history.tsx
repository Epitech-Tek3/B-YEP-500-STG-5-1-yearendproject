import { Button, IconButton, Tooltip } from "@mui/material";
import { Discord } from "components/ui/appIcon/logo/Discord";
import { Github } from "components/ui/appIcon/logo/Github";
import { Google } from "components/ui/appIcon/logo/Google";
import { Microsoft } from "components/ui/appIcon/logo/Microsoft";
import { Spotify } from "components/ui/appIcon/logo/Spotify";
import { Twitch } from "components/ui/appIcon/logo/Twitch";
import { Grid } from "components/ui/grid";
import { API_ROUTE } from "components/utils/constants";
import React, { useState } from "react";
import { Box, Flex, Text } from "rebass";
import TimeAgo from "javascript-time-ago";
import fr from "javascript-time-ago/locale/fr.json";
import Cancel from "@mui/icons-material/Cancel";
import { useAuth } from "components/hooks/useAuth";

TimeAgo.addDefaultLocale(fr);

const timeAgo = new TimeAgo("fr-FR");

export const Logo = ({ module }) => {
  return module == "google" ? (
    <Google width={30} />
  ) : module == "discord" ? (
    <Discord width={30} />
  ) : module == "twitch" ? (
    <Twitch width={30} />
  ) : module == "spotify" ? (
    <Spotify width={30} />
  ) : module == "github" ? (
    <Github width={30} />
  ) : (
    <Microsoft width={30} />
  );
};

const HistoryPage = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const [hover, setHover] = useState(-1);

  const handleDelete = async (i: number) => {
    const user = (
      await (
        await fetch(`${API_ROUTE}/area/deleteArea`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({ occurence: i }),
          credentials: "include"
        })
      ).json()
    ).user;
    setCurrentUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <Flex mt={7} width="100%" justifyContent="center" height="calc(100vh - 64px - 256px)">
      <Flex width="80%">
        <Box width="100%">
          <Text as="h1" textAlign="center" mb={5}>
            Historique de vos Area
          </Text>
          {currentUser.areaList?.length ? (
            <Grid widthItems="300px" containerProps={{ width: "100%" }}>
              {currentUser.areaList?.map((hist, i) => (
                <Button
                  variant="contained"
                  disableTouchRipple
                  key={hist.action + i}
                  sx={{
                    p: 3,
                    position: "relative",
                    display: "block",
                    color: "black",
                    textTransform: "unset",
                    backgroundColor: "white",
                    ":hover": { backgroundColor: "white" }
                  }}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(-1)}
                >
                  {i == hover && (
                    <Box sx={{ position: "absolute", right: 15, top: 15 }}>
                      <Tooltip title="Supprimer l'area">
                        <IconButton onClick={async () => handleDelete(i)}>
                          <Cancel sx={{ fill: "grey" }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                  <Flex
                    size={40}
                    mx="auto"
                    mb={3}
                    sx={{ borderRadius: "50%", p: 2, boxShadow: "3px 5px 5px lightGrey" }}
                  >
                    <Logo module={hist.module} />
                  </Flex>
                  <Text as="p" mt={4}>
                    <Text as="span" fontWeight={900} sx={{ textTransform: "capitalize" }}>
                      action:
                    </Text>{" "}
                    {hist.action}
                  </Text>
                  <Text as="p" mt={3}>
                    <Text as="span" fontWeight={900} sx={{ textTransform: "capitalize" }}>
                      réaction:
                    </Text>{" "}
                    {hist.reaction}
                  </Text>
                  <Flex>
                    <Flex flexGrow={1} />
                    <Text as="p" fontSize={0} color="grey" mt={3}>
                      {timeAgo.format(new Date(hist.created))}
                    </Text>
                  </Flex>
                </Button>
              ))}
            </Grid>
          ) : (
            <Text as="p" textAlign="center" mx="auto">
              Aucun area de créé
            </Text>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default HistoryPage;
