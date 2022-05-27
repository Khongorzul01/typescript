import {
  createContext,
  useState,
  useContext,
  ReactElement,
  JSXElementConstructor,
} from "react";
import { User, UserContextType } from "../component/types/type";

export const UserContext = createContext<UserContextType | null>(null);
export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = (props: any) => {
  const [users, setUsers] = useState<User[]>([]);
  console.log(users);

  if (users) {
    console.log(users[0]);
  }
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
