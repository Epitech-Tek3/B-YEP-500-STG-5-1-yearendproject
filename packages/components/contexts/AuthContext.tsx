// @ts-nocheck
import { API_ROUTE } from "../utils/constants";
import { Signin } from "../ui/auth/signin";
import { Signup } from "../ui/auth/signup";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext(undefined);

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [signin, setSignin] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const usr = JSON.parse(localStorage.getItem("user"));

    (async () => {
      if (usr) {
        setCurrentUser(usr);
        return setLoading(false);
      }
      const userJson = await fetch(`${API_ROUTE}/auth/getUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        credentials: "include"
      });
      const user = await userJson.json();
      if (user.error == "unauthenticated") {
        setLoading(false);
        return setCurrentUser(null);
      }
      localStorage.setItem("user", JSON.stringify(user.user));
      setCurrentUser(user);
      setLoading(false);
    })();
  }, [router]);

  const value = {
    currentUser,
    setCurrentUser
  };

  return (
    <>
      {!currentUser && !loading ? (
        signin ? (
          <Signin onChange={() => setSignin(false)} />
        ) : (
          <Signup onChange={() => setSignin(true)} />
        )
      ) : (
        <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
      )}
    </>
  );
};
