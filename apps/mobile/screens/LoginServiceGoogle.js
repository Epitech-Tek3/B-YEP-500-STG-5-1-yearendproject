import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';

export default function LoginServiceGoogle({navigation}) {
  const uri = "http://localhost:8080/auth/google";

  return (
    <WebView
      style={{marginTop: 50}}
      source={{uri}}
      javaScriptEnabled
      domStorageEnabled
      userAgent={"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15"}
      onNavigationStateChange={async ({url}) => {
        if (url.search('http://localhost:8081/auth/callback?doc_id=')) {
          const id = url.substring(url.indexOf(url[43]));
          if (id.length < 30) {
            const userJson = await fetch('http://localhost:8080/auth/getUser', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              credentials: "include",
              //body: JSON.stringify(localStorage.getItem("id"))
              body: [localStorage.getItem("id")]
            });
            const user = await userJson.json();
            //console.log("USER LOGINSERVICEGOOGLE: ", user.user)
            //console.log(localStorage.getItem("user"));
            //localStorage.setItem("user", JSON.stringify(user.user));
            navigation.navigate('TabNavigator');
          }
        }
      }}
    />
  );
}
