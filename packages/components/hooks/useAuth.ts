import React from "react";
import { AuthContext } from "../contexts/AuthContext";

type ProviderAuthT = {
  currentUser: {
    accessToken: string[];
    createdAt: Date;
    areaList: { module: string; action: string; reaction: string; created: any }[];
    email: string;
    id: string;
    password: string;
    providers: string[];
  };
  setCurrentUser: React.Dispatch<React.SetStateAction<undefined>>;
};

export const useAuth = (): ProviderAuthT => {
  // @ts-ignore
  return React.useContext(AuthContext);
};
