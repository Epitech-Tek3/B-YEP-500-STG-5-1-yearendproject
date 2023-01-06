"use strict";
const axios = require("axios");
require("dotenv").config();
// Configuration
const getDiscordClient = require("../services/discord");
const client = getDiscordClient();
/**
 * It makes a request to the Twitch API, and if the stream is live, it sends a
 * message to the Discord channel
 * @param {string} url - The URL of the Twitch API endpoint.
 * @param {string} access_token - The access token of the Twitch user.
 * @param {string} client_id - The client ID of your application.
 */
async function makeRequest(url, access_token, client_id) {
    const config = {
        method: "get",
        url: url,
        headers: { Authorization: "Bearer " + access_token, "Client-Id": client_id }
    };
    const res = await axios(config);
    const channel = client.channels.cache.get(process.env.DISCORD_CHANNEL);
    if (res.data.data[0].type == "live")
        channel.send(res.data.data[0].title);
}
module.exports = function () {
    makeRequest("https://api.twitch.tv/helix/users?id=125387632", "z2695l7wr5k339v3bhsovjtwmyw9bx", "ehdum2rn1klq2ttofjqpuea5e6ypn6");
};
//# sourceMappingURL=discord.js.map