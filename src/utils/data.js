import axios from "axios";

export const fetchUsers = async () => {
  try {
    const users = await axios.get(`${process.env.REACT_APP_API}/users`);
    return users;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err; // Rethrow the error to handle it at a higher level if needed
  }
};
