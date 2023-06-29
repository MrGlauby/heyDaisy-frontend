import { createContext, useState, useEffect } from "react";
import { fetchUsers, fetchImageUrl } from "./utils/data";
import { storage } from "./utils/firebase";

export const StateContext = createContext({});

const StateContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [imageUrl, setImageUrl] = useState("");
  //insert token state here:

  useEffect(() => {}, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetchUsers();
        console.log(res.data);
        setUsers(res.data);

        const imageRef = storage.ref("images");
        const imageUrl = await fetchImageUrl(imageRef); // Call the fetchImageUrl function passing the imageRef
        setImageUrl(imageUrl);
        console.log(imageUrl);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUsers();
  }, []);

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        users,
        setUsers,
        imageUrl,
        setImageUrl,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
