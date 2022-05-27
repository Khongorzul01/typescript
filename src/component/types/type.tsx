import React from "react";
import { UserContext } from "../../context/userContext";

export interface User {
  name: {
    first: string;
    last: string;
    title: string;
  };
  email: string;
  birthday: Date;
  location: {
    city: string;
    country: string;
    state: string;
    street: {
      name: string;
      number: number;
    };
  };
  phone: string;
  password: string;
  gender: "male" | "female";
}

export type UserContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export interface FetchHook {
  data: User;
  loading: Boolean;
  error: string;
}

export type Method = "get" | "post" | "delete" | "update";
