import { Button } from "@mui/material";
import { Discord } from "components/ui/appIcon/logo/Discord";
import { Flex, Text } from "rebass";
import { Github } from "components/ui/appIcon/logo/Github";
import { Google } from "components/ui/appIcon/logo/Google";
import { Grid } from "components/ui/grid";
import { Spotify } from "components/ui/appIcon/logo/Spotify";
import { Twitch } from "components/ui/appIcon/logo/Twitch";
import { Microsoft } from "components/ui/appIcon/logo/Microsoft";
import { useAuth } from "components/hooks/useAuth";
import React from "react";
import Router from "next/router";

interface CardLoginProps {
  icon: JSX.Element;
  provider: string;
}

const CardLogin: React.FC<CardLoginProps> = ({ icon, provider }) => {
  const { currentUser } = useAuth();

  return currentUser.providers?.find((prov) => prov == provider.toLocaleLowerCase()) ? (
    <Button
      variant="contained"
      sx={{ py: 4, display: "block", backgroundColor: "white", ":hover": { backgroundColor: "white" } }}
      onClick={() => Router.replace({ pathname: `/module/${provider.toLocaleLowerCase()}` })}
    >
      {icon}
      <Text as="p" color="black" fontWeight={900} fontSize={0} mt={2}>
        Accéder à {provider}
      </Text>
    </Button>
  ) : (
    <Button
      variant="contained"
      sx={{ py: 4, display: "block", backgroundColor: "white", ":hover": { backgroundColor: "white" } }}
      onClick={() => window.location.replace(`http://localhost:8080/auth/${provider.toLocaleLowerCase()}`)}
    >
      {icon}
      <Text as="p" color="black" fontWeight={900} fontSize={0} mt={2}>
        Se connecter avec {provider}
      </Text>
    </Button>
  );
};

const provider = [
  {
    icon: <Google width={30} />,
    provider: "Google"
  },
  {
    icon: <Github width={30} />,
    provider: "Github"
  },
  {
    icon: <Discord width={30} />,
    provider: "Discord"
  },
  {
    icon: <Spotify width={30} />,
    provider: "Spotify"
  },
  {
    icon: <Twitch width={30} />,
    provider: "Twitch"
  },
  {
    icon: <Microsoft width={30} />,
    provider: "Microsoft"
  }
];

export const Home = () => {
  return (
    <Flex width="100%" justifyContent="center" height="calc(100vh - 56px)" mt="56px" overflowY="scroll">
      <Flex justifyContent="center" width="80%" height="100%" alignItems="center">
        <Text as="h1">Choisissez un service pour débuter créer un area</Text>
        <Grid widthItems="300px" containerProps={{ width: "100%" }}>
          {provider.map((props, index) => (
            <CardLogin {...props} key={index} />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};
