export const twitchListen = async (accessToken: string, action: string, reaction: string) => {
  console.log("twitch -> accessToken: " + accessToken);
  console.log("action: " + action);
  console.log("reaction: " + reaction);

  console.log("test")

  if (action == "live twitch") {
    const items = await (
      await axios(
        `https://api.twitch.tv/helix/users?id=125387632`,
        {
          method: 'get',
          header: new Headers({
            'Authorization': 'Bearer' + accessToken,
            'Client_id': 'n427ln2cvqql7adxwdkynbccm33gnt'
          }),
        },
      ) 
    ).data[0];
    if ( items.type == "live") {
      console.log("it's fap time");
      switch (reaction) {
        case "Ajoute à la track list":
          console.log("Ajoute à la track list");
          break;
        case "Joue une vidéo YouTube aléatoire":
          console.log("Joue une vidéo YouTube aléatoire");
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
    }else if( items.type == "")
    console.log("oh no no fap today");
  }
  if (action == "Follow twitch") {
    const items = await (
      await axios(
        `https://api.twitch.tv/helix/subscriptions?broadcaster_id=125387632`, {
          method: 'get',
          header: new Headers({
            'Authorization': 'Bearer' + accessToken,
            'Cliend_id': 'n427ln2cvqql7adxwdkynbccm33gnt'
          }),
        },
      )
    ).data[0];
    return { number_sub: items.total };
  }
  return
}
