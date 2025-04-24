import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {

    setcurrentUser({
        id:1,
        name:"_the_kungfu_panda",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuXUY2uf25DrFjcRt3w6_y8aV0QUnW40EeA&s"
    })
    
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));}, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser,login }}>
      {children}
    </AuthContext.Provider>
  );
};