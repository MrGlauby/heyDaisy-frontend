import axios from "axios";

export const getUser = async (token) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API}/auth/me`, {
      headers: { Authorization: token },
    });
    console.log("data", data);
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
