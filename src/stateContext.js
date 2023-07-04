import { createContext, useState, useEffect } from "react";
import { fetchUsers, fetchImageUrl, fetchUser } from "./utils/data";
import { storage } from "./utils/firebase";

export const StateContext = createContext({});

const StateContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [singleUser, setSingleUser] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const [updatedUserData, setUpdatedUserData] = useState({});

  //ZIEL: useEffect soll 1. initial durchlaufen & zusätzlich wenn sich die Userdaten im MyStudentProfile ändern
  useEffect(() => {
    const getUser = async () => {
      try {
        // if (user) {

        const res = await fetchUser(user._id);

        // localStorage.setItem("user", JSON.stringify(res));
        setUser(res);
        // } else {

        // }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetchUsers();

        setUsers(res.data);

        const imageRef = storage.ref("images");
        const imageUrl = await fetchImageUrl(imageRef); // Call the fetchImageUrl function passing the imageRef
        setImageUrl(imageUrl);
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
        singleUser,
        setSingleUser,
        updatedUserData,
        setUpdatedUserData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
