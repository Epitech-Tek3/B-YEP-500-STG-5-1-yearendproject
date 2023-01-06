
# Getting started

Welcome to the **AREA** API! 🎉 Get familiar with available objects in the [Schema Reference](https://studio.apollographql.com/graph/area-7e3wb/schema/reference?variant=current), or try querying this graph using [Explorer](https://studio.apollographql.com/graph/area-7e3wb/explorer?variant=current).

## What this graph is all about

Describe the purpose and use cases for your graph here.

## Accessing the graph

🛰 You can send operations to this graph at `http://localhost:3000`

📇 The Apollo Registry holds the canonical location of your schema. In the registry, this graph is referred to by its “graph ref”, which is: **area-7e3wb@current**.

*(Note: you can [download Rover](https://www.apollographql.com/docs/rover/getting-started/), the Apollo CLI tool for working with your schema locally.)*

## How to authenticate to this graph

You can authenticate to this graph by accessing to the project **area-7e3wb** at the url `https://studio.apollographql.com/graph/area-7e3wb/home`. If you don't have access to this project, ask to your master

## Schemas

### Queries

|  Fields  |  Parameters  |  Description  |
|----------|--------------|--|
| _: **_Boolean_** |      | |
| getAllUsers: [**_User_**] | limit: **_Int_** | Fetch all existing users |
| getGooglePhoto: [**_Photo_**] | acessToken: **_String_** | Fetch google photos |
| getUserByUserId: [**_User_**] | userId: **_String_** | Fetch specific user by **_userId_** |
| getUsersWhere: [**_User_**] | name: **_String_** &nbsp;&nbsp;&nbsp; value: **_String_** | Fetch users by specific field |
| getYoutubeChannels: [**_Channels_**] | acessToken: **_String_** | Fetch all youtube channels |
| getYoutubePlaylists: [**_Playlists_**] | acessToken: **_String_** | Fetch All youtube playlists |
| getYoutubeSubscriptions: [**_Subscriptions_**] | acessToken: **_String_** | Fetch All youtube subscriptions |
| getYoutubeVideoLiked: [**_Video_**] | acessToken: **_String_** | Fetch All liked Youtube videos |

### Objects

|  Types  |  Fields  |
|----------|--|
| **_Channels_** | id: **_String_** &nbsp;&nbsp;&nbsp; title: **_String_** |
| **_Mutation_** | _: **_Boolean_** |
| **_Photo_** | baseUrl: **_String_** &nbsp;&nbsp;&nbsp; creationTime: **_String_** &nbsp;&nbsp;&nbsp; filename: **_String_** |
| **_Playlists_** | description: **_String_** &nbsp;&nbsp;&nbsp; id: **_String_** &nbsp;&nbsp;&nbsp; itemCount: **_Int_** &nbsp;&nbsp;&nbsp; thumbnail: **_String_** &nbsp;&nbsp;&nbsp; title: **_String_** |
| **_Subscriptions_** | channelId: **_String_** &nbsp;&nbsp;&nbsp; thumbnail: **_String_** &nbsp;&nbsp;&nbsp; title: **_String_** |
| **_User_** | email: **_String_** &nbsp;&nbsp;&nbsp; firstName: **_String_** &nbsp;&nbsp;&nbsp; id: **_Int_** &nbsp;&nbsp;&nbsp; lastName: **_String_** &nbsp;&nbsp;&nbsp; UserId: **_String_** |
| **_Video_** | channelTitle: **_String_** &nbsp;&nbsp;&nbsp; duration: **_String_** &nbsp;&nbsp;&nbsp; id: **_String_** &nbsp;&nbsp;&nbsp; thumbnail: **_String_** &nbsp;&nbsp;&nbsp; title: **_String_** |

## Running operations

Query :
```ts
const { currentUser } = useAuth();
const { data } = useGetAllUsersQuery();
```

Schema :
```gql
query GetAllUsers($limit: Int) {
  getAllUsers(limit: $limit) {
    id
    email
    userId
    lastName
    firstName
  }
}
```

Query :
```ts
const { data } = useGetUsersQuery();
```

Schema :
```gql
query GetUsers($limit: Int) {
  getUsers(limit: $limit) {
    id
    email
    firstName
    lastName
    userId
  }
}
```

Query :
```ts
const { currentUser } = useAuth();
const { data } = useGetUserByUserIdQuery({
  variables: {
    userId: currentUser.uid
  }
});
```

Schema :
```gql
query GetUserByUserId($userId: String) {
  getUserByUserId(userId: $userId) {
    id
    firstName
    email
    userId
    lastName
  }
}
```

Query :
```ts
const { data } = useGetUserWhereQuery({
  variables: {
    name: "firstName",
    value: "clément"
  }
});
```

Schema :
```gql
query GetUsersWhere($name: String, $value: String) {
  getUsersWhere(name: $name, value: $value) {
    id
    email
    firstName
    lastName
    userId
  }
}
```

Query :
```ts
const { currentUser } = useAuth();
const { data } = useGetYoutubeVideoLikedQuery({
  variables: {
    accessToken: currentUser.accessToken
  }
});
```

Schema :
```gql
query GetYoutubeVideoLiked($accessToken: String) {
  getYoutubeVideoLiked(accessToken: $accessToken) {
    channelTitle
    title
    id
    thumbnail
    duration
  }
}
```

Query :
```ts
const { currentUser } = useAuth();
const { data } = useGetYoutubeSubscriptionsQuery({
  variables: {
    accessToken: currentUser.accessToken
  }
});
```

Schema :
```gql
query GetYoutubeSubscriptions($accessToken: String) {
  getYoutubeSubscriptions(accessToken: $accessToken) {
    channelId
    thumbnail
    title
  }
}
```

Query :
```ts
const { currentUser } = useAuth();
const { data } = useGetYoutubePlaylistsQuery({
  variables: {
    accessToken: currentUser.accessToken
  }
});
```

Schema :
```gql
query GetYoutubePlaylists($accessToken: String) {
  getYoutubePlaylists(accessToken: $accessToken) {
    id
    title
    itemCount
    description
    thumbnail
  }
}
```

Query :
```ts
const { currentUser } = useAuth();
const { data } = useGetYoutubeChannelsQuery({
  variables: {
    accessToken: currentUser.accessToken
  }
});
```

Schema :
```gql
query GetYoutubeChannels($accessToken: String) {
  getYoutubeChannels(accessToken: $accessToken) {
    id
    title
  }
}
```

Query :
```ts
const { currentUser } = useAuth();
const { data } = useGetGooglePhotoQuery({
  variables: {
    accessToken: currentUser.accessToken
  }
});
```

Schema :
```gql
query GetGooglePhoto($accessToken: String) {
  getGooglePhoto(accessToken: $accessToken) {
    baseUrl
    filename
    creationTime
  }
}
```

Query :
```ts
const { currentUser } = useAuth();
const { data } = useGetYoutubeVideoLikedQuery({
  variables: {
    accessToken: currentUser.accessToken
  }
});
```

Schema :
```gql
query getYoutubeVideoLiked($limit: Int) {
  getAllUsers(limit: $limit) {
    id
    email
    firstName
    userId
    lastName
  }
}
```

### Getting help with this graph

For support working with this graph, contact the Graph Admin via [email(replace me)](mailto:email@email.com) or [chat(put your chat link here)](#chatlink).
