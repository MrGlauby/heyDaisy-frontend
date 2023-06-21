import React from "react";
import RandomUserOne from "../../img/randomUserReview1.jpg";
import RandomUserTwo from "../../img/randomUserReview2.jpg";
import RandomUserThree from "../../img/randomUserReview3.jpg";
import RandomUserFour from "../../img/randomUserReview4.jpg";
import RandomUserFive from "../../img/randomUserReview5.jpg";
import RandomUserSix from "../../img/randomUserReview6.jpg";
import RandomUserSeven from "../../img/randomUserReview7.jpg";

export default function ReviewsSection() {
  return (
    <div className="flex justify-center p-32">
      <div className="carousel carousel-center max-w-5xl p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item flex-col justify-center">
          <img
            src={RandomUserOne}
            alt="User Review 1"
            className="rounded-box w-64"
          />
          <br></br>
          <q className="text-white justify-center w-64">
            Efficient and engaging! This language learning platform provides
            bite-sized lessons that make learning a breeze. Highly recommended!
          </q>
          <br></br>
          <h4 className="text-white font-bold">Patricia, 58, from Mexico</h4>
        </div>
        <div className="carousel-item flex-col justify-center">
          <img
            src={RandomUserTwo}
            alt="User Review 2"
            className="rounded-box w-64"
          />
          <br></br>
          <q className="text-white justify-center w-64">
            User-friendly interface and comprehensive content. The platform
            covers all aspects of language learning, from vocabulary to grammar.
          </q>
          <br></br>
          <h4 className="text-white font-bold">Max, 21, from Austria</h4>
        </div>
        <div className="carousel-item flex-col justify-center">
          <img
            src={RandomUserThree}
            alt="User Review 3"
            className="rounded-box w-64"
          />
          <br></br>
          <q className="text-white justify-center w-64">
            Interactive and fun! The platform offers interactive exercises and
            games that make learning enjoyable and keep you motivated throughout
            your language journey.
          </q>
          <br></br>
          <h4 className="text-white font-bold">Ahmad, 29, from Egypt</h4>
        </div>
        <div className="carousel-item flex-col">
          <img
            src={RandomUserFour}
            alt="User Review 4"
            className="rounded-box w-64"
          />
          <br></br>
          <q className="text-white justify-center w-64">
            Flexible and personalized learning. The platform adapts to your
            skill level and learning pace, providing customized lessons that
            cater to your specific needs.
          </q>
          <br></br>
          <h4 className="text-white font-bold">Olivia, 28, from Norway</h4>
        </div>
        <div className="carousel-item flex-col">
          <img
            src={RandomUserFive}
            alt="User Review 5"
            className="rounded-box w-64"
          />
          <br></br>
          <q className="text-white justify-center w-64">
            Accessible anytime, anywhere. With its mobile app, the language
            learning platform allows you to practice on the go, making the most
            of your time.
          </q>
          <br></br>
          <h4 className="text-white font-bold">Isha, 25, from India</h4>
        </div>
        <div className="carousel-item flex-col">
          <img
            src={RandomUserSix}
            alt="User Review 6"
            className="rounded-box w-64"
          />
          <br></br>
          <q className="text-white justify-center w-64">
            Engaging community support. The platform offers a vibrant community
            of learners and native speakers.
          </q>
          <br></br>
          <h4 className="text-white font-bold">Jason, 31, from Canada</h4>
        </div>
        <div
          className="carousel-item flex-col"
          styles="display: flex; flex-direction: column"
        >
          <img
            src={RandomUserSeven}
            alt="User Review 7"
            className="rounded-box w-64"
          />
          <br></br>
          <q className="text-white justify-center w-64">
            Results-driven and trackable progress. The platform tracks your
            progress and provides detailed feedback.
          </q>
          <br></br>
          <h4 className="text-white font-bold">Tobi, 24, from Germany</h4>
        </div>
      </div>
    </div>
  );
  //OPTION 2
}
