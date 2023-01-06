"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MicrosoftStrategy = require("passport-microsoft");
const TwitchStrategy = require("passport-twitch.js");
const user_1 = require("../models/user");
const DiscordStrategy = require("passport-discord");
const GitHubStrategy = require("passport-github2");
const GoogleStrategy = require("passport-google-oauth20");
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify");
require("dotenv").config();
/* It creates a new passport strategy, and then returns it */
passport.use(new GoogleStrategy.Strategy({
    clientID: process.env.CLIENT_ID_GOOGLE,
    clientSecret: process.env.CLIENT_SECRET_GOOGLE,
    callbackURL: "/auth/callback/google"
}, async (accessToken, refreshToken, profile, cb) => {
    var _a, _b;
    const userExist = await user_1.User.findOne({ email: profile.emails[0].value });
    if (userExist) {
        const occurrence = userExist.providers.indexOf("google");
        await user_1.User.updateOne({ _id: userExist._id }, {
            // @ts-ignore
            accessToken: [...userExist.accessToken.filter((_, i) => i !== occurrence), accessToken],
            // @ts-ignore
            providers: [...userExist.providers.filter((_, i) => i !== occurrence), "google"]
        });
        return cb(null, userExist);
    }
    const newUser = new user_1.User({
        id: profile.id,
        firstName: (_a = profile.name) === null || _a === void 0 ? void 0 : _a.givenName,
        lastName: (_b = profile.name) === null || _b === void 0 ? void 0 : _b.familyName,
        picture: profile.photos[0].value,
        email: profile.emails[0].value,
        google: {
            youtubeLikeAddTrackDiscord: "off",
            youtubeSuscribeSendTwitter: "off",
            youtubeDislikeSendToMicrosoftCalendar: "off"
        }
    });
    newUser.save();
    return cb(null, newUser);
}));
/**
 * It creates a new passport strategy, and then returns it
 * @param {any} Strategy - The strategy that we're using. In this case, we're using
 * the `Strategy` class from `Strategy`.
 * @param {string} provider - The name of the provider.
 * @param {string[] | string} scope - The scope of the authentication.
 * @param {any} modules - An array of modules that the user has access to.
 */
const passportStrategy = (Strategy, provider, scope, modules) => new Strategy.Strategy({
    clientID: process.env[`CLIENT_ID_${provider.toLocaleUpperCase()}`],
    clientSecret: process.env[`CLIENT_SECRET_${provider.toLocaleUpperCase()}`],
    callbackURL: `/auth/callback/${provider}`,
    scope
}, async (accessToken, _refreshToken, profile, cb) => {
    return cb(null, { id: profile.id, accessToken, provider, modules });
});
/* The passport strategy. */
passport
    .use(passportStrategy(GitHubStrategy, "github", ["user:email"], {
    github: { commitSendToDiscord: "off" }
}))
    .use(passportStrategy(DiscordStrategy, "discord", ["identify", "email"], {
    discord: { reactDiscordFollowRamdomYoutubeChannel: "off" }
}))
    .use(passportStrategy(SpotifyStrategy, "spotify", [
    "user-read-email",
    "user-read-private",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-follow-modify",
    "user-library-read"
], {
    spotify: { likeSpotifyShareTwitter: "off" }
}))
    .use(passportStrategy(TwitchStrategy, "twitch", "user_read", {
    twitch: { suscribeSendTwitt: "off", notificationFollowPlaylistSpotify: "off" }
}))
    .use(passportStrategy(MicrosoftStrategy, "microsoft", ["user.read"], {
    microsoft: { mitGithub: "off", sendMessage: "off" }
}));
/* This is a passport function that serialize the user id. */
passport.serializeUser((user, done) => {
    // @ts-ignore
    done(null, user.id);
});
/* This is a passport function that deserialize the user id. */
passport.deserializeUser((id, done) => {
    user_1.User.findById(id, function (err, user) {
        done(err, user);
    });
});
module.exports = passport;
//# sourceMappingURL=passport.js.map