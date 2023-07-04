import axios from "axios";

export const getUser = async (id, token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/users/${id}`,
      {
        // headers: { Authorization: token },
      }
    );
    return data;
  } catch (err) {
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
