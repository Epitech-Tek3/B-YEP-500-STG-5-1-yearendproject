"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleListen = void 0;
const axios_1 = require("axios");
const node_fetch_1 = require("node-fetch");
const user_1 = require("../../../models/user");
const googleListen = async (accessToken, action, reaction, id) => {
    // console.log("google -> accessToken: " + accessToken);
    // console.log("aciton: " + action);
    // console.log("reaciton: " + reaction);
    var _a, _b, _c, _d;
    try {
        if (action == "Like musique / vidéo") {
            const data = (await axios_1.default.get(`https://youtube.googleapis.com/youtube/v3/videos?myRating=like&maxResults=1&key=${process.env.API_KEY}&access_token=${accessToken}`)).data.items[0];
            const user = await user_1.User.findById(id);
            if (!((_b = (_a = user === null || user === void 0 ? void 0 : user.actions[user.actions.length - 1]) === null || _a === void 0 ? void 0 : _a.google) === null || _b === void 0 ? void 0 : _b.like)) {
                return await user_1.User.updateOne({ _id: id }, { actions: [{ google: { like: data.id } }] });
            }
            if (((_d = (_c = user === null || user === void 0 ? void 0 : user.actions[user.actions.length - 1]) === null || _c === void 0 ? void 0 : _c.google) === null || _d === void 0 ? void 0 : _d.like) !== data.id) {
                await user_1.User.updateOne({ _id: id }, {
                    actions: [...user.actions, { google: { like: data.id } }]
                });
                switch (reaction) {
                    case "Ajoute à la track list":
                        console.log("Ajoute à la track list");
                        const device_id = await (0, node_fetch_1.default)("https://api.spotify.com/v1/me/following", {
                            method: "put",
                            body: JSON.stringify({
                                type: "artist",
                                ids: "2UwqpfQtNuhBwviIC0f2ie"
                            }),
                            headers: {
                                Authorization: "Bearer " + user.accessToken[user.providers.indexOf("spotify")]
                            }
                        });
                        console.log(await device_id.json());
                        await (0, node_fetch_1.default)("https://api.spotify.com/v1/me/player/pause?device_id=c8smsqbejk2v3d6jrhlwykjrk", {
                            method: "put",
                            headers: {
                                Authorization: accessToken
                            }
                        });
                        break;
                    case "Joue une vidéo YouTube aléatoire":
                        await (0, node_fetch_1.default)(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&key=${process.env.API_KEY}&access_token=${accessToken}`, {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            },
                            body: JSON.stringify({
                                snippet: {
                                    title: "my area's playlist"
                                }
                            })
                        });
                        break;
                    case "Ajoute un evenement sur le calendrier":
                        console.log("Ajoute un evenement sur le calendrier");
                        break;
                    case "Ajoute à un tracklist discord":
                        console.log("Ajoute à un tracklist discord");
                        break;
                    case "Inscription a un module":
                        console.log("Inscription a un module");
                        break;
                }
                return;
            }
        }
    }
    catch (e) {
        // @ts-ignore
        console.error(e);
    }
    if (action == "Dislike musique / vidéo") {
        return;
    }
};
exports.googleListen = googleListen;
//# sourceMappingURL=index.js.map