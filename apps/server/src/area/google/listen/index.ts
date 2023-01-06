import axios from "axios";
import fetch from "node-fetch";
import { User } from "../../../models/user";

export const googleListen = async (accessToken: string, action: string, reaction: string, id: string) => {
  // console.log("google -> accessToken: " + accessToken);
  // console.log("aciton: " + action);
  // console.log("reaciton: " + reaction);

  try {
    if (action == "Like musique / vidéo") {
      const data = (
        await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?myRating=like&maxResults=1&key=${process.env.API_KEY}&access_token=${accessToken}`
        )
      ).data.items[0];

      const user = await User.findById(id);

      if (!user?.actions[user.actions.length - 1]?.google?.like) {
        return await User.updateOne({ _id: id }, { actions: [{ google: { like: data.id } }] });
      }
      if (user?.actions[user.actions.length - 1]?.google?.like !== data.id) {
        await User.updateOne(
          { _id: id },
          {
            actions: [...user.actions, { google: { like: data.id } }]
          }
        );
        switch (reaction) {
          case "Ajoute à la track list":
            console.log("Ajoute à la track list");

            const device_id = await fetch("https://api.spotify.com/v1/me/following", {
              method: "put",
              body: JSON.stringify({
                type: "artist",
                ids: "2UwqpfQtNuhBwviIC0f2ie"
              }),
              headers: {
                Authorization: "Bearer " + (user.accessToken as string[])[(user.providers as string).indexOf("spotify")]
              }
            });
            console.log(await device_id.json());
            await fetch("https://api.spotify.com/v1/me/player/pause?device_id=c8smsqbejk2v3d6jrhlwykjrk", {
              method: "put",
              headers: {
                Authorization: accessToken
              }
            });
            break;
          case "Joue une vidéo YouTube aléatoire":
            await fetch(
              `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&key=${process.env.API_KEY}&access_token=${accessToken}`,
              {
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
              }
            );
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
  } catch (e) {
    // @ts-ignore
    console.error(e);
  }

  if (action == "Dislike musique / vidéo") {
    return;
  }
};
