import React from "react";
import { useState } from "react";
import Transition from "../animation/Transition";

function Faq() {
  const [IsActive, setIsActive] = useState(false);
  const [TwoActive, setTwoActive] = useState(false);
  const [ThreeActive, setThreeActive] = useState(false);
  const [FourthActive, setFourthActive] = useState(false);
  const [FifthActive, setFifthActive] = useState(false);
  const [SixthActive, setSixthActive] = useState(false);
  const [SeventhActive, setSeventhActive] = useState(false);

  return (
    <div className="">
      {/*  */}

      <div className="accordion   flex justify-center collapse collapse-plus collapse-title text-xl">
        <div className="accordion-item p-5">
          <div
            className={`accordion-title font-medium pb-10 cursor-pointer ${
              IsActive ? "active" : ""
            }`}
            onClick={() => setIsActive(!IsActive)}
          >
            <div className="text-2xl flex justify-center border-solid border-black">
              1. How can I get started with the language app?{" "}
              {IsActive ? "-" : "+"}
            </div>
          </div>
          {IsActive && (
            <div className="accordion-content rounded-lg shadow-xl bg-indigo-100 p-6">
              To get started, download the app from the app store, create an
              account, and choose the language you want to learn
            </div>
          )}
        </div>
      </div>

      {/* second one */}
      <div className="accordion    flex justify-center  collapse collapse-plus bg-base-200 collapse-title text-xl  ">
        <div className="accordion-item p-5 ">
          <div
            className="accordion-title font-medium pb-10 cursor-pointer"
            onClick={() => setTwoActive(!TwoActive)}
          >
            <div className=" text-2xl flex justify-center ">
              2. Are the language courses suitable for beginners?{" "}
              {TwoActive ? "-" : "+"}
            </div>
          </div>
          {TwoActive && (
            <div className="accordion-content rounded-lg shadow-xl bg-indigo-100 p-6">
              Yes, our language courses cater to learners of all levels,
              including beginners. We provide comprehensive lessons that cover
              the basics and gradually progress to more advanced topics.
            </div>
          )}
        </div>
      </div>

      {/* third one */}
      <div className="accordion    flex justify-center  collapse collapse-plus  collapse-title text-xl  ">
        <div className="accordion-item p-5 ">
          <div
            className="accordion-title font-medium pb-10 cursor-pointer"
            onClick={() => setThreeActive(!ThreeActive)}
          >
            <div className=" text-2xl flex justify-center ">
              3. Can I learn multiple languages at the same time?{" "}
              {ThreeActive ? "-" : "+"}
            </div>
          </div>
          {ThreeActive && (
            <div className="accordion-content rounded-lg shadow-xl bg-indigo-100 p-6">
              Yes, you can learn multiple languages simultaneously. Our platform
              allows you to choose and study multiple languages based on your
              preferences and learning goals.
            </div>
          )}
        </div>
      </div>

      {/* fourthActive one */}
      <div className="accordion    flex justify-center  collapse collapse-plus bg-base-200 collapse-title text-xl  ">
        <div className="accordion-item p-5 ">
          <div
            className="accordion-title font-medium pb-10 cursor-pointer"
            onClick={() => setFourthActive(!FourthActive)}
          >
            <div className=" text-2xl flex justify-center ">
              4. Are the language lessons interactive?{" "}
              {FourthActive ? "-" : "+"}
            </div>
          </div>
          {FourthActive && (
            <div className="accordion-content rounded-lg shadow-xl bg-indigo-100 p-6">
              Absolutely! Our language lessons are designed to be interactive
              and engaging. You'll have access to multimedia resources,
              interactive exercises, and opportunities to practice speaking and
              writing.
            </div>
          )}
        </div>
      </div>

      {/* fifthActive one */}
      <div className="accordion    flex justify-center  collapse collapse-plus  collapse-title text-xl  ">
        <div className="accordion-item p-5 ">
          <div
            className="accordion-title font-medium pb-10 cursor-pointer"
            onClick={() => setFifthActive(!FifthActive)}
          >
            <div className=" text-2xl flex justify-center ">
              5. Can I track my progress and performance?{" "}
              {FifthActive ? "-" : "+"}
            </div>
          </div>
          {FifthActive && (
            <div className="accordion-content rounded-lg shadow-xl bg-indigo-100 p-6">
              Yes, our platform includes progress tracking features. You can
              monitor your learning progress, track completed lessons, and
              assess your performance through quizzes and assessments.
            </div>
          )}
        </div>
      </div>

      {/* sixthActive one */}
      <div className="accordion  bg-base-200   flex justify-center  collapse collapse-plus  collapse-title text-xl  ">
        <div className="accordion-item p-5 ">
          <div
            className="accordion-title font-medium pb-10 cursor-pointer"
            onClick={() => setSixthActive(!SixthActive)}
          >
            <div className=" text-2xl flex justify-center ">
              6. Are there native speakers or tutors available for practice and
              guidance? {SixthActive ? "-" : "+"}
            </div>
          </div>
          {SixthActive && (
            <div className="accordion-content rounded-lg shadow-xl bg-indigo-100 p-5">
              Yes, we offer opportunities to practice with native speakers or
              qualified tutors. You can participate in conversation practice
              sessions or schedule one-on-one tutoring sessions to receive
              personalized guidance.
            </div>
          )}
        </div>
      </div>

      {/* fifthActive one */}
      <div className="accordion    flex justify-center  collapse collapse-plus  collapse-title text-xl  ">
        <div className="accordion-item p-5 ">
          <div
            className="accordion-title font-medium pb-10 cursor-pointer "
            onClick={() => setSeventhActive(!SeventhActive)}
          >
            <div className=" text-2xl flex justify-center  ">
              7. Can I access the learning materials offline?{" "}
              {SeventhActive ? "  -   " : "  + "}
            </div>
          </div>
          {SeventhActive && (
            <div className="accordion-content rounded-lg shadow-xl bg-indigo-100 p-5">
              Our platform provides options for offline learning. You can
              download lessons, audio recordings, and other study materials to
              access them without an internet connection.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Transition(Faq);
