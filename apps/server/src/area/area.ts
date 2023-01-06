import { UserT, User } from "../models/user";
import { googleListen } from "./google/listen";
const NodeCache = require("node-cache");
export const myCache = new NodeCache({ stdTTL: 100, checkperiod: 12000 });

// import { githubListen } from "./github/listen";
// import { discordListen } from "./discord/listen";
// import { spotifyListen } from "./spotify/listen";
// import { twitchListen } from "./twitch/listen";
// import { microsoftListen } from "./microsoft/listen";

interface ModuleT {
  readonly google: string;
  readonly github: string;
  readonly discord: string;
  readonly spotify: string;
  readonly twitch: string;
  readonly microsoft: string;
}

let ModuleName: ModuleT = {
  google: "google",
  github: "github",
  discord: "discord",
  spotify: "spotify",
  twitch: "twitch",
  microsoft: "microsoft"
};

export const startEngine = (user: UserT) => {
  if (!user.areaList) return;

  user.areaList.forEach(async function (value: any) {
    if (value == null) return;
    switch (value.module) {
      case ModuleName.google:
        await User.findOne({ id: user.id }).then((response: any) => {
          let cnt = 0;
          // @ts-ignore
          let nbr = 0;

          response.providers.forEach(function (value: any) {
            if (value == ModuleName.google) nbr = cnt;
            cnt += 1;
          });
          googleListen(response.accessToken[nbr], value.action, value.reaction, user._id);
        });
        break;
      case ModuleName.github:
        await User.findOne({ id: user.id }).then((response: any) => {
          let cnt = 0;
          // @ts-ignore
          let nbr = 0;

          response.providers.forEach(function (value: any) {
            if (value == ModuleName.github) nbr = cnt;
            cnt += 1;
          });
          // githubListen(response.accessToken[nbr], value.action, value.reaction);
        });
        break;
      case ModuleName.discord:
        await User.findOne({ id: user.id }).then((response: any) => {
          let cnt = 0;
          // @ts-ignore
          let nbr = 0;

          response.providers.forEach(function (value: any) {
            if (value == ModuleName.discord) nbr = cnt;
            cnt += 1;
          });
          // discordListen(response.accessToken[nbr], value.action, value.reaction);
        });
        break;
      case ModuleName.spotify:
        await User.findOne({ id: user.id }).then((response: any) => {
          let cnt = 0;
          // @ts-ignore
          let nbr = 0;

          response.providers.forEach(function (value: any) {
            if (value == ModuleName.spotify) nbr = cnt;
            cnt += 1;
          });
          // spotifyListen(response.accessToken[nbr], value.action, value.reaction);
        });
        break;
      case ModuleName.twitch:
        await User.findOne({ id: user.id }).then((response: any) => {
          let cnt = 0;
          // @ts-ignore
          let nbr = 0;

          response.providers.forEach(function (value: any) {
            if (value == ModuleName.twitch) nbr = cnt;
            cnt += 1;
          });
          // twitchListen(response.accessToken[nbr], value.action, value.reaction);
        });
        break;
      case ModuleName.microsoft:
        await User.findOne({ id: user.id }).then((response: any) => {
          let cnt = 0;
          // @ts-ignore
          let nbr = 0;

          response.providers.forEach(function (value: any) {
            if (value == ModuleName.microsoft) nbr = cnt;
            cnt += 1;
          });
          // microsoftListen(response.accessToken[nbr], value.action, value.reaction);
        });
        break;
    }
  });
};

export const area = async () => {
  if (myCache.has("userId")) {
    const user = await User.findById({ _id: myCache.get("userId") });
    startEngine(user);
  }
};
