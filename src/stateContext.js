import { createContext, useState, useEffect } from "react";
import { fetchAllStudents, fetchUsers } from "./utils/data";

export const StateContext = createContext({});

const StateContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await fetchAllStudents();
        console.log(res.data);
        setStudents(res.data);
      } catch (error) {
        console.error("Error fetching students:", error);
        // Handle error, e.g., set error state or show error message
      }
    };
    getStudents();
  }, []);

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
    <StateContext.Provider value={{ students, setStudents, users, setUsers }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
