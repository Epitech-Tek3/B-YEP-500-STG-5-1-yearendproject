import { Router, Request, Response } from "express";
import passport = require("passport");
import { User } from "../../models/user";
import { makeKey } from "../../utils/functions";
import * as bcrypt from "bcryptjs";
import { myCache } from "../../area/area";

const router = Router();

/* This route is used to get the user's data from the database. */
router.post("/auth/getUser", async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.cookies.__session);

    if (user) {
      res.status(200).send({ user: user });
    } else res.status(200).send({ error: "unauthenticated" });
  } catch (e) {
    res.end("error");
  }
});

/* This is a route that will handle the logout. */
router.post("/auth/logout", (_req: Request, res: Response) => {
  res.clearCookie("__session");
  res.end("logout");
});

/**
 * If the user is already logged in, add the new access token to the user's list of
 * access tokens
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const authenticate = async (req: Request, res: Response) => {
  const currentUser = await User.findOne({ _id: req.cookies.__session });

  await User.updateOne(
    { _id: req.cookies.__session },
    {
      // @ts-ignore
      accessToken: [...currentUser.accessToken, req.user.accessToken],
      // @ts-ignore
      providers: [...currentUser.providers, req.user.provider]
    }
  );
  res.redirect("http://localhost:8081/auth/callback");
};

/* This is a route that will redirect to the Google login page. */
router
  .get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email", "https://www.googleapis.com/auth/youtube"] })
  )
  .get(
    "/auth/callback/google",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req: Request, res: Response) => {
      // @ts-ignore
      res.cookie("__session", req.user._id);
      // @ts-ignore
      myCache.set("userId", req.user._id);
      console.log(myCache.get("userId"));
      res.redirect("http://localhost:8081/auth/callback");
    }
  );

/* This is a route that will redirect to the GitHub login page. */
router
  .get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }))
  .get("/auth/callback/github", passport.authenticate("github", { failureRedirect: "/" }), authenticate);

/* This is a route that will redirect to the Discord login page. */
router
  .get("/auth/discord", passport.authenticate("discord", { scope: ["identify", "email"] }))
  .get("/auth/callback/discord", passport.authenticate("discord", { failureRedirect: "/" }), authenticate);

/* This is a route that will redirect to the Spotify login page. */
router
  .get("/auth/spotify", passport.authenticate("spotify", { scope: ["user-read-email", "user-read-private"] }))
  .get("/auth/callback/spotify", passport.authenticate("spotify", { failureRedirect: "/" }), authenticate);

/* This is a route that will redirect to the Twitch login page. */
router
  .get("/auth/twitch", passport.authenticate("twitch.js", { scope: "user_read" }))
  .get("/auth/callback/twitch", passport.authenticate("twitch.js", { failureRedirect: "/" }), authenticate);

/* This is a route that will redirect to the Microsoft login page. */
router
  .get("/auth/microsoft", passport.authenticate("microsoft", { scope: ["user.read"] }))
  .get("/auth/callback/microsoft", passport.authenticate("microsoft", { failureRedirect: "/" }), authenticate);

router.post("/auth/signin", async (req: Request, res: Response) => {
  const data = req.body;

  if (!data?.email || !data?.password) res.status(403).send({ error: "Veuillez completer tous les champs" });
  try {
    const requestedUser = await User.findOne({ email: data.email });

    if (!requestedUser) return res.status(200).send({ error: "Cette adresse email n'est pas associée a un compte" });
    return bcrypt.compare(data.password, requestedUser.password, (err, same) => {
      if (!same) return res.status(200).send({ error: "Mot de passe incorrecte" });
      // @ts-ignore
      res.cookie("__session", requestedUser._id);
      // @ts-ignore
      myCache.set("userId", requestedUser._id);
      return res.send({ user: requestedUser });
    });
  } catch (e) {
    console.error(e);
    return res.end({ error: "Une erreur est survenue", e });
  }
});

router.post("/auth/signup", async (req: Request, res: Response) => {
  const data = req.body;

  if (!data?.email || !data?.password || !data?.confirmPassword)
    return res.status(403).send({ error: "Veuillez completer tous les champs" });
  if (data.password !== data.confirmPassword)
    return res.status(403).send({ error: "Vos mots de passe ne correspondent pas" });
  try {
    const existUser = await User.findOne({ email: data.email });

    if (existUser) return res.status(200).send({ error: "Cette adresse email est déjà utilisée" });
    return bcrypt.genSalt(10, function (_err: any, salt: string) {
      bcrypt.hash(data.password, salt, async (_err: any, hash: string) => {
        const newUser = await User.create({
          id: makeKey(21),
          email: data.email,
          password: hash
        });
        // @ts-ignore
        res.cookie("__session", newUser._id);
        // @ts-ignore
        myCache.set("userId", newUser._id);
        return res.send({ user: newUser });
      });
    });
  } catch (e) {
    console.error(e);
    return res.end({ error: "Une erreur est survenue", e });
  }
});

module.exports = router;
