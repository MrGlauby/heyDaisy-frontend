import { createContext, useState, useEffect } from "react";
import { data, fetchAllStudents, fetchSingleStudent } from "./utils/data";

export const StateContext = createContext({});

const StateContextProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [users, setUsers] = useState();

  useEffect(() => {
    const getStudents = async () => {
      const res = await fetchAllStudents();
      console.log(res.data);
      setStudents(res.data);
    };
    getStudents();
  }, []);

  useEffect(() => {
    const getSingleStudent = async () => {
      const res = await fetchSingleStudent();
      console.log(res.data);
      setStudents(res.data);
    };
    getSingleStudent();
  }, []);

  return (
    <StateContext.Provider value={{ students, setStudents }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
