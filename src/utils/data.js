import axios from "axios";
import { getDownloadURL } from "firebase/storage";

export const fetchUsers = async () => {
  try {
    const users = await axios.get(`${process.env.REACT_APP_API}/users`);
    return users;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err; // Rethrow the error to handle it at a higher level if needed
  }
};


export const fetchImageUrl = async (imageRef) => {
  try {
    console.log("imageRef", imageRef);
    const imageUrl = await getDownloadURL(imageRef);
    console.log("imageUrl", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("Error fetching image URL:", error);
    throw error;
  }
};


export const fetchUser = async ({id}) => {
  try {
    console.log("user_id", id);
    const user = await axios.get(`${process.env.REACT_APP_API}/users/${id}`);
    console.log("another user", user);
    return user.data;
  } catch (err) {
    console.error("Error fetching user:", err);
    throw err;
  }
};