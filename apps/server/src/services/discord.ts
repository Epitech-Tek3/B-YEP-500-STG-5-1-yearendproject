import { User } from "../models/user";

const { Client, Intents } = require("discord.js");
const config = require("../config/discord.config");

require("dotenv").config();

export const getDiscordClient = () => {
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
  });
  client.config = config;
  client.on("error", console.error);
  client.on("warn", console.warn);

  // TODO - !setTrack https://youtube.com/
  /* This is a function that is called when a message is created. */
  client.on("messageCreate", async (message: any) => {
    const mess = message.content.split(" ");

    const exist = await User.findOne({});

    console.log(mess);

    if (!exist) return;
    console.log("coucouse");

    console.log(exist);
    // @ts-ignore
    if (exist == true) {
      /* This is checking if the first word in the message is `!setTrack`. */
      if (mess[0] == "!setTrack") {
        // To-do set commande for youtube

        // if (true) {
        /* This is getting the channel from the client. */
        const channel = client.channels.cache.get(process.env.DISCORD_CHANNEL_TRACK);
        channel.send("Track added for " + message.author.username);
        channel.send(mess[1]);
        // }
      }
    }
  });

  client.login(config.token);

  return client;
};
