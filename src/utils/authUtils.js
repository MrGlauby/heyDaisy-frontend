import axios from "axios";

export const getUser = async (id, token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/users/${id}`,
      {
        // headers: { Authorization: token },
      }
    );
    console.log("data in getUser authUtils for App.js", data);
    return data;
  } catch (err) {
    console.log("oops");
    console.log(err.message);
  }
};

export const registerUser = async (formData) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API}/auth/signup`,
    formData
  );
  console.log(data);
  return data;
};

export const loginUser = async (formData) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/auth/signin`,
      formData
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

/* export const updateUser = async (id, token, updatedUserData) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API}/users/${id}`,
      updatedUserData,
      {
        headers: { Authorization: token },
      }
    );

    console.log("Updated user data:", response.data);

    return response.data;
  } catch (error) {
    console.log("Error updating user:", error.message);
    throw error;
  }
}; */
