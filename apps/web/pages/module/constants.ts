type Action = {
  name: string;
  actions: { title: string; description: string }[];
};

type Reaction = {
  name: string;
  reactions: { title: string; description: string }[];
};

export const actions: Action[] = [
  {
    name: "twitch",
    actions: [
      { title: "Notification live twitch", description: "L'utilisateur recoit une notification pour un live." },
      { title: "Follow twitch", description: "L'utilisateur follow un autre compte." }
    ]
  },
  {
    name: "discord",
    actions: [{ title: "Discord réaction", description: "L'utilisateur réagit à un message discord." }]
  },
  {
    name: "google",
    actions: [
      { title: "Like musique / vidéo", description: "L'utilisateur like une musique ou une vidéo." },
      { title: "Dislike musique / vidéo", description: "L'utilisateur dislike une musique ou une vidéo." }
    ]
  },
  {
    name: "github",
    actions: [{ title: "Commit github", description: "L'utilisateur push sur une branch." }]
  }
];

export const reactions: Reaction[] = [
  {
    name: "spotify",
    reactions: [
      {
        title: "Ajoute à la track list",
        description: "L'utilisateur ajoute une music à sa tracklist"
      }
    ]
  },
  {
    name: "google",
    reactions: [
      {
        title: "Joue une vidéo YouTube aléatoire",
        description: "L'utilisateur joue une vidéo YouTube aléatoire après une action"
      }
    ]
  },
  {
    name: "microsoft",
    reactions: [
      {
        title: "Ajoute un evenement sur le calendrier",
        description: "L'utilisateur ajoute un evenement sur son calendrier"
      },
      {
        title: "Inscription a un module",
        description: "L'utilisateur s'inscrit à un unit."
      }
    ]
  },
  {
    name: "discord",
    reactions: [
      {
        title: "Ajoute à un tracklist discord",
        description: "L'utilisateur ajoute une musique à la tracklist du bot"
      }
    ]
  }
];
