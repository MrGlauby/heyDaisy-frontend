import { createContext, useState, useEffect } from "react";
import { fetchUsers } from "./utils/data";

export const StateContext = createContext({});

const StateContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetchUsers();
        console.log(res.data);
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        // Handle error, e.g., set error state or show error message
      }
    };
    getUsers();
  }, []);

  return (
    <StateContext.Provider value={{ users, setUsers }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
