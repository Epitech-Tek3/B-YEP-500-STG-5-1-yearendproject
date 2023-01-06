import { API_ROUTE } from "components/utils/constants";
import Router from "next/router";
import React, { useEffect } from "react";

const CallbackPage = () => {
  useEffect(() => {
    (async () => {
      const userJson = await fetch(`${API_ROUTE}/auth/getUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        credentials: "include"
      });
      const user = await userJson.json();
      localStorage.setItem("user", JSON.stringify(user.user));
      Router.replace("/");
    })();
  }, [0]);

  return <></>;
};

export default CallbackPage;
