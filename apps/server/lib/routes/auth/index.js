"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport = require("passport");
const user_1 = require("../../models/user");
const functions_1 = require("../../utils/functions");
const bcrypt = require("bcryptjs");
const area_1 = require("../../area/area");
const router = (0, express_1.Router)();
/* This route is used to get the user's data from the database. */
router.post("/auth/getUser", async (req, res) => {
    try {
        const user = await user_1.User.findById(req.cookies.__session);
        if (user) {
            res.status(200).send({ user: user });
        }
        else
            res.status(200).send({ error: "unauthenticated" });
    }
    catch (e) {
        res.end("error");
    }
});
/* This is a route that will handle the logout. */
router.post("/auth/logout", (_req, res) => {
    res.clearCookie("__session");
    res.end("logout");
});
/**
 * If the user is already logged in, add the new access token to the user's list of
 * access tokens
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const authenticate = async (req, res) => {
    const currentUser = await user_1.User.findOne({ _id: req.cookies.__session });
    await user_1.User.updateOne({ _id: req.cookies.__session }, {
        // @ts-ignore
        accessToken: [...currentUser.accessToken, req.user.accessToken],
        // @ts-ignore
        providers: [...currentUser.providers, req.user.provider]
    });
    res.redirect("http://localhost:8081/auth/callback");
};
/* This is a route that will redirect to the Google login page. */
router
    .get("/auth/google", passport.authenticate("google", { scope: ["profile", "email", "https://www.googleapis.com/auth/youtube"] }))
    .get("/auth/callback/google", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
    // @ts-ignore
    res.cookie("__session", req.user._id);
    // @ts-ignore
    area_1.myCache.set("userId", req.user._id);
    console.log(area_1.myCache.get("userId"));
    res.redirect("http://localhost:8081/auth/callback");
});
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
router.post("/auth/signin", async (req, res) => {
    const data = req.body;
    if (!(data === null || data === void 0 ? void 0 : data.email) || !(data === null || data === void 0 ? void 0 : data.password))
        res.status(403).send({ error: "Veuillez completer tous les champs" });
    try {
        const requestedUser = await user_1.User.findOne({ email: data.email });
        if (!requestedUser)
            return res.status(200).send({ error: "Cette adresse email n'est pas associée a un compte" });
        return bcrypt.compare(data.password, requestedUser.password, (err, same) => {
            if (!same)
                return res.status(200).send({ error: "Mot de passe incorrecte" });
            // @ts-ignore
            res.cookie("__session", requestedUser._id);
            // @ts-ignore
            area_1.myCache.set("userId", requestedUser._id);
            return res.send({ user: requestedUser });
        });
    }
    catch (e) {
        console.error(e);
        return res.end({ error: "Une erreur est survenue", e });
    }
});
router.post("/auth/signup", async (req, res) => {
    const data = req.body;
    if (!(data === null || data === void 0 ? void 0 : data.email) || !(data === null || data === void 0 ? void 0 : data.password) || !(data === null || data === void 0 ? void 0 : data.confirmPassword))
        return res.status(403).send({ error: "Veuillez completer tous les champs" });
    if (data.password !== data.confirmPassword)
        return res.status(403).send({ error: "Vos mots de passe ne correspondent pas" });
    try {
        const existUser = await user_1.User.findOne({ email: data.email });
        if (existUser)
            return res.status(200).send({ error: "Cette adresse email est déjà utilisée" });
        return bcrypt.genSalt(10, function (_err, salt) {
            bcrypt.hash(data.password, salt, async (_err, hash) => {
                const newUser = await user_1.User.create({
                    id: (0, functions_1.makeKey)(21),
                    email: data.email,
                    password: hash
                });
                // @ts-ignore
                res.cookie("__session", newUser._id);
                // @ts-ignore
                area_1.myCache.set("userId", newUser._id);
                return res.send({ user: newUser });
            });
        });
    }
    catch (e) {
        console.error(e);
        return res.end({ error: "Une erreur est survenue", e });
    }
});
module.exports = router;
//# sourceMappingURL=index.js.map