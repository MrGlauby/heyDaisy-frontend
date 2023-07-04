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
  // console.log("user - stateContext", user);
  //insert token state here:

  //ZIEL: useEffect soll 1. initial durchlaufen & zusätzlich wenn sich die Userdaten im MyStudentProfile ändern
  useEffect(() => {
    const getUser = async () => {
      try {
        // if (user) {
        console.log("yes try");
        const res = await fetchUser(user._id);
        console.log("singleUser", res);
        // localStorage.setItem("user", JSON.stringify(res));
        setUser(res);
        // } else {
        //   console.log("no user found :/ :/ :/");
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
