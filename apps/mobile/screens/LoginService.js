import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';

export default function LoginService({navigation, route}) {
  const RTservices = route.params.services;
  const ROUTE = "http://localhost:8080/auth/" + RTservices;
  const uri = ROUTE;

  const [endRT, setEndRT] = useState('')

  useEffect(() => {
      if (RTservices === "microsoft") setEndRT('#');
      else setEndRT('');
    }, [])

  return (
    <WebView
      style={{marginTop: 50}}
      source={{uri}}
      javaScriptEnabled
      domStorageEnabled
      userAgent={"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15"}
      onNavigationStateChange={async ({url}) => {
        if (url === `http://localhost:8081/auth/callback${endRT}`) {
          console.log("URL : " + url)
          const userJson = await fetch('http://localhost:8080/auth/getUser', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            credentials: "include",
            //body: JSON.stringify(localStorage.getItem("id"))
          });
          const user = await userJson.json();
          localStorage.setItem("user", JSON.stringify(user.user));
          navigation.navigate('TabNavigator');
        }
      }}
    />
  );
}
