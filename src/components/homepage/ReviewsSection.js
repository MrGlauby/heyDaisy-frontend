import React from "react";
import RandomUserOne from "../../img/randomUserReview1.jpg";
import RandomUserTwo from "../../img/randomUserReview2.jpg";
import RandomUserThree from "../../img/randomUserReview3.jpg";
import RandomUserFour from "../../img/randomUserReview4.jpg";
import RandomUserFive from "../../img/randomUserReview5.jpg";
import RandomUserSix from "../../img/randomUserReview6.jpg";

export default function ReviewsSection() {
  return (
    <div className="p-32 ">
      <div className="flex flex-col justify-center">
        <div className="m-14">
          <h2 className="flex justify-center text-5xl font-bold">
            What others think about our platform:
          </h2>
        </div>
        <div className="carousel carousel-center w-full pt-6 px-6 pb-10 space-x-4 bg-slate-100 rounded-box">
          <div className="carousel-item flex-col justify-center">
            <img
              src={RandomUserOne}
              alt="User Review 1"
              className="rounded-box w-64"
            />
            <br></br>
            <q className="text-black justify-center w-64">
              Efficient and engaging! This language learning platform provides
              bite-sized lessons that make learning a breeze. Highly
              recommended!
            </q>
            <br></br>
            <h4 className="text-black font-bold">Patricia, 58, from Mexico</h4>
          </div>
          <div className="carousel-item flex-col justify-center">
            <img
              src={RandomUserTwo}
              alt="User Review 2"
              className="rounded-box w-64"
            />
            <br></br>
            <q className="text-black  justify-center w-64">
              User-friendly interface and comprehensive content. The platform
              covers all aspects of language learning, from vocabulary to
              grammar.
            </q>
            <br></br>
            <h4 className="text-black  font-bold">Max, 21, from Austria</h4>
          </div>
          <div className="carousel-item flex-col justify-center">
            <img
              src={RandomUserThree}
              alt="User Review 3"
              className="rounded-box w-64"
            />
            <br></br>
            <q className="text-black  justify-center w-64">
              Interactive and fun platform that offers interactive exercises to keep you motivated
              throughout your journey.
            </q>
            <br></br>
            <h4 className="text-black  font-bold">Ahmad, 29, from Egypt</h4>
          </div>
          <div className="carousel-item flex-col">
            <img
              src={RandomUserFour}
              alt="User Review 4"
              className="rounded-box w-64"
            />
            <br></br>
            <q className="text-black  justify-center w-64">
              Flexible and personalized learning. The platform adapts to your
              skill and learning pace, providing customized members that
              cater to your  needs.
            </q>
            <br></br>
            <h4 className="text-black  font-bold">Olivia, 28, from Norway</h4>
          </div>
          <div className="carousel-item flex-col">
            <img
              src={RandomUserFive}
              alt="User Review 5"
              className="rounded-box w-64"
            />
            <br></br>
            <q className="text-black  justify-center w-64">
              Accessible anytime, anywhere. The language
              learning platform allows you to practice on the go, making the
              most of your time.
            </q>
            <br></br>
            <h4 className="text-black  font-bold">Isha, 25, from India</h4>
          </div>
          <div className="carousel-item flex-col">
            <img
              src={RandomUserSix}
              alt="User Review 6"
              className="rounded-box w-64"
            />
            <br></br>
            <q className="text-black  justify-center w-64">
              Engaging community support. The platform offers a vibrant
              community of learners and native speakers from around the world.
            </q>
            <br></br>
            <h4 className="text-black font-bold">Jason, 31, from Canada</h4>
          </div>
          {/* <div
            className="carousel-item flex-col"
            styles="display: flex; flex-direction: column"
          >
            <img
              src={RandomUserSeven}
              alt="User Review 7"
              className="rounded-box w-64"
            />
            <br></br>
            <q className="text-black justify-center w-64">
              Results-driven and trackable progress. The platform tracks your
              progress and provides detailed feedback.
            </q>
            <br></br>
            <h4 className="text-black font-bold">Tobi, 24, from Germany</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
}
