import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import dataJSON from "../data.json";
import { useLocation } from "react-router-dom";

const dataContext = createContext();
const MyUseGlobalContext = createContext();
export const UseGlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [data, setData] = useState(dataJSON);
  const location = useLocation();

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        if (localStorage.getItem(user.uid) !== null) {
          setData(JSON.parse(localStorage.getItem(user.uid)));
        } else {
          localStorage.setItem(user.uid, JSON.stringify(dataJSON));
        }
      } else {
        setUser(false);
      }
    });

    return unsuscribe;
  }, []);

  return (
    <MyUseGlobalContext.Provider value={{ user, setUser, data, setData, location }}>
      {children}
    </MyUseGlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MyUseGlobalContext);
};

export const useDataContext = () => {
  return useContext(dataContext);
};
