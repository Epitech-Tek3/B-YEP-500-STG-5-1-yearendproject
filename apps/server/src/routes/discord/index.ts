import { getDiscordClient } from "../../services/discord";
import { Router, Request, Response } from "express";
import { User } from "../../models/user";

const router = Router();
const client = getDiscordClient();

/* This is a way to listen for events from the discord client. */
client.on("ready", async () => {
  console.log(
    `Bot is ready. (${client.guilds.cache.size} Guilds - ${client.channels.cache.size} Channels - ${client.users.cache.size} Users)`
  );
});

/* This is a route that will be called when the user clicks the "on" button on the discord service. */
router.post("/discord/on", async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.cookies.__session); // To-do get service on or off

    if (user) {
      res.status(200).send({ user: user });
    } else res.status(200).send({ error: "unauthenticated" });
  } catch (e) {
    res.end("error");
  }
});

/* This is a route that will be called when the user clicks the "off" button on the
discord service. */
router.post("/discord/off", async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.cookies.__session); // To-do get service on or off

    if (user) {
      res.status(200).send({ user: user });
    } else res.status(200).send({ error: "unauthenticated" });
  } catch (e) {
    res.end("error");
  }
});

router.post("/discord/status", async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.cookies.__session); // To-do get service status

    if (user) {
      res.status(200).send({ user: user });
    } else res.status(200).send({ error: "unauthenticated" });
  } catch (e) {
    res.end("error");
  }
});

module.exports = router;
