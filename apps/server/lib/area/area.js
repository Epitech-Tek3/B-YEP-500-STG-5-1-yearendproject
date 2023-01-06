"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.area = exports.startEngine = exports.myCache = void 0;
const user_1 = require("../models/user");
const listen_1 = require("./google/listen");
const NodeCache = require("node-cache");
exports.myCache = new NodeCache({ stdTTL: 100, checkperiod: 12000 });
let ModuleName = {
    google: "google",
    github: "github",
    discord: "discord",
    spotify: "spotify",
    twitch: "twitch",
    microsoft: "microsoft"
};
const startEngine = (user) => {
    if (!user.areaList)
        return;
    user.areaList.forEach(async function (value) {
        if (value == null)
            return;
        switch (value.module) {
            case ModuleName.google:
                await user_1.User.findOne({ id: user.id }).then((response) => {
                    let cnt = 0;
                    // @ts-ignore
                    let nbr = 0;
                    response.providers.forEach(function (value) {
                        if (value == ModuleName.google)
                            nbr = cnt;
                        cnt += 1;
                    });
                    (0, listen_1.googleListen)(response.accessToken[nbr], value.action, value.reaction, user._id);
                });
                break;
            case ModuleName.github:
                await user_1.User.findOne({ id: user.id }).then((response) => {
                    let cnt = 0;
                    // @ts-ignore
                    let nbr = 0;
                    response.providers.forEach(function (value) {
                        if (value == ModuleName.github)
                            nbr = cnt;
                        cnt += 1;
                    });
                    // githubListen(response.accessToken[nbr], value.action, value.reaction);
                });
                break;
            case ModuleName.discord:
                await user_1.User.findOne({ id: user.id }).then((response) => {
                    let cnt = 0;
                    // @ts-ignore
                    let nbr = 0;
                    response.providers.forEach(function (value) {
                        if (value == ModuleName.discord)
                            nbr = cnt;
                        cnt += 1;
                    });
                    // discordListen(response.accessToken[nbr], value.action, value.reaction);
                });
                break;
            case ModuleName.spotify:
                await user_1.User.findOne({ id: user.id }).then((response) => {
                    let cnt = 0;
                    // @ts-ignore
                    let nbr = 0;
                    response.providers.forEach(function (value) {
                        if (value == ModuleName.spotify)
                            nbr = cnt;
                        cnt += 1;
                    });
                    // spotifyListen(response.accessToken[nbr], value.action, value.reaction);
                });
                break;
            case ModuleName.twitch:
                await user_1.User.findOne({ id: user.id }).then((response) => {
                    let cnt = 0;
                    // @ts-ignore
                    let nbr = 0;
                    response.providers.forEach(function (value) {
                        if (value == ModuleName.twitch)
                            nbr = cnt;
                        cnt += 1;
                    });
                    // twitchListen(response.accessToken[nbr], value.action, value.reaction);
                });
                break;
            case ModuleName.microsoft:
                await user_1.User.findOne({ id: user.id }).then((response) => {
                    let cnt = 0;
                    // @ts-ignore
                    let nbr = 0;
                    response.providers.forEach(function (value) {
                        if (value == ModuleName.microsoft)
                            nbr = cnt;
                        cnt += 1;
                    });
                    // microsoftListen(response.accessToken[nbr], value.action, value.reaction);
                });
                break;
        }
    });
};
exports.startEngine = startEngine;
const area = async () => {
    if (exports.myCache.has("userId")) {
        const user = await user_1.User.findById({ _id: exports.myCache.get("userId") });
        (0, exports.startEngine)(user);
    }
};
exports.area = area;
//# sourceMappingURL=area.js.map