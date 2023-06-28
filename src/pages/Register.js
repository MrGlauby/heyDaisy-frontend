import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { UilImageUpload } from "@iconscout/react-unicons";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../utils/firebase";
import { registerUser } from "../utils/authUtils";

import { StateContext } from "../stateContext";

import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

export default function Register({
  isAuthenticated,
  setIsAuthenticated,
  setToken,
}) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    language: "",
  });
  const { imageUrl, setImageUrl } = useContext(StateContext);
  const { email, password, language } = formState;
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [userImageUrl, setUserImageUrl] = useState("");
  const [userImage, setUserImage] = useState("");

  const imagesListRef = ref(storage, "images/");

  // start handle Input functions
  const handleEmailChange = (e) => {
    setFormState((prev) => ({ ...prev, email: e.target.value }));
  };
  const handlePasswordChange = (e) => {
    setFormState((prev) => ({ ...prev, password: e.target.value }));
  };
  const handleLanguageChange = (e) => {
    setFormState((prev) => ({ ...prev, language: e.target.value }));
  };
  // end handle Input functions

  // start change the value of user image form the input
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageUpload(file);
    }
  };
  // end change the value of user image form the input

  // start upload the user image to firebase
  const uploadFile = () => {
    if (imageUpload === null) return;
    const imageName = imageUpload.name + uuidv4();
    const imageRef = ref(storage, `images/${imageName}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        setUserImageUrl(snapshot?.ref._location.path_);
      })
      .then(() => {
        alert("Image uploaded");
        setImageUpload(null);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };
  // end upload the user image to firebase

  // start get single image user from firebase !!! IMPORTANT !!!
  const getImage = async (userImageRef) => {
    const singleImageRef = ref(
      storage,
      userImageRef
      // "images/portfolio.png427535e8-b044-40bc-a18a-6835c3f7f169"
    );
    await getDownloadURL(singleImageRef).then((res) => {
      setUserImage(res);
    });
  };

  // end single image user from firebase !!! IMPORTANT !!!

  // start btn handel/reigster submiting the user data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password || !language || !userImageUrl) {
        return "Please fill out all the fields";
      }
      getImage(userImageUrl && userImageUrl);
      // btn handel/reigster submiting the user data

      // start Register user in MongoDB
      const formData = {
        email,
        password,
        language,
        profilePicture: userImageUrl,
        // profilePicture: imageUpload ? imageUpload.name : null,
      };
      // end Register user in MongoDB
      const response = await registerUser(formData);
      console.log("MongoDB response", response);

      // start Handle authentication and token storage
      const { token } = response.data;
      localStorage.setItem("token", token);

      setToken(token);
      setIsAuthenticated(true);
    } catch (error) {
      return error.response?.data.error || error.message;
    }
  };
  // end Handle authentication and token storage

  useEffect(() => {
    listAll(imagesListRef)
      .then((response) => {
        const promises = response.items.map((item) => getDownloadURL(item));
        return Promise.all(promises);
      })
      .then((urls) => {
        setImageUrls(urls);
      })
      .catch((error) => {
        console.error("Error listing images:", error);
      });
  }, []);
  console.log("userImage", userImage);

  if (isAuthenticated) return <Navigate to="/login" />;
  return (


    <div>
      <Navbar/>
    <div className="hero min-h-screen bg-base-200">
      {/* {userImage && <img alt={"userimage"} src={userImage} />} */}
      <div className="hero-content flex-wrap w-2/4 text-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="avatar m-10 p-4">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative">
            <div className="flex justify-center items-center m-4 cursor-pointer">
              <UilImageUpload size={62} />
              <input
                type="file"
                name="avatar"
                onChange={handleProfilePictureChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            {imageUpload && (
              <img
                src={URL.createObjectURL(imageUpload)}
                alt=""
                className="absolute inset-0 object-cover w-full h-full rounded-full"
              />
            )}
          </div>
        </div>
        <button className="btn btn-primary" onClick={uploadFile}>
          Upload image
        </button>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <select
                className="select select-primary w-full max-w-xs"
                id="language"
                name="language"
                value={language}
                onChange={handleLanguageChange}
              >
                <option disabled value="">
                  language you want to learn
                </option>
                <option>Italian</option>
                <option>German</option>
                <option>Spanish</option>
                <option>Portuguese</option>
              </select>
              <div className="form-control mt-6">
                <Link to={`/login`}>
                  <button className="btn btn-primary" onClick={handleSubmit}>
                    Signup
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}
