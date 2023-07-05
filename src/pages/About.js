import React from "react";
import Transition from "../animation/Transition";
import Team from "../img/randomUserReview2.jpg";
import motivation from "../img/motivation.jpg";
import behind from "../img/behind.jpg";
import dudett from "../img/dudett.jpg";
import dude from "../img/dude.jpg";
import dude2 from "../img/dude2.jpg";
import dude3 from "../img/dude3.jpg";
import behindTheScenes from "../img/behindthescenes2.png";

import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

function About() {
  return (
    <div className="relative p-8">
      <div className="hero mt-20">
        <div className="hero-content">
          <div>
            <h1 className="text-5xl font-bold">Our heyDaisy Team</h1>
            <p className="py-6 text-justify">
              Welcome to our dynamic team, a collective of talented individuals
              working together towards a common goal. We believe in the power of
              collaboration and diversity, leveraging our combined expertise to
              achieve extraordinary results. Each team member brings a unique
              set of skills and perspectives, allowing us to tackle challenges
              from multiple angles. We thrive on innovation and continuous
              learning, constantly pushing the boundaries of what is possible.
              <br />
              <br />
              Our team values open communication, mutual respect, and a
              supportive work environment. We believe that by fostering strong
              relationships and encouraging each other's growth, we can achieve
              greatness as a cohesive unit. Together, we are a force to be
              reckoned with, ready to overcome obstacles and make a significant
              impact in our field. With unwavering dedication and a shared
              commitment to excellence, we are poised to achieve remarkable
              success.
            </p>
          </div>
        </div>
      </div>

      {/*TEAM Section */}
      {/* <div className="hero mt-20 p-5">
        <div className="hero-content">
          <img src={dude2} className="max-w-sm rounded-lg shadow-2xl" />
          <img src={dude3} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Our Team</h1>
            <p className="py-6">
              Welcome to our tech startup team! We are a group of passionate
              individuals driven by innovation and a shared vision for
              transforming the digital landscape. Together, we embark on a
              journey to create cutting-edge solutions that disrupt industries
              and push boundaries. With a diverse range of expertise and a
              collaborative mindset, we thrive on tackling complex challenges
              and delivering impactful results. Join us as we build the future
              of technology and make a difference in the world. Together, we are
              unstoppable!
            </p>
          </div>
        </div>
      </div> */}

      <div className="hero bg-base-200 p-5">
        <div className="hero-content lg:flex-row-reverse flex-col">
          <img
            src={dude}
            className="max-w-xs rounded-lg shadow-xl mb-4 lg:mb-0"
            alt=""
          />
          <img
            src={dudett}
            className="max-w-xs rounded-lg shadow-xl mb-4 lg:mb-0"
            alt=""
          />
          <img
            src={dudett}
            className="max-w-xs rounded-lg shadow-xl mb-4 lg:mb-0"
            alt=""
          />
          <img src={dudett} className="max-w-xs rounded-lg shadow-xl" alt="" />
          <div></div>
        </div>
      </div>
      {/* Motivation */}
      {/* Motivation */}

      <div className="hero p-20 flex flex-col lg:flex-row">
        <img
          src={motivation}
          className="max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-8"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Motivation for our Project</h1>
          <p className="py-6 text-justify">
            Are you ready to embark on an extraordinary journey of language
            learning and cultural exploration? Look no further! Our innovative
            language app is here to revolutionize the way you learn, connect,
            and communicate with the world. Imagine a world where language
            barriers become a thing of the past, where you can effortlessly
            converse with people from different corners of the globe, and where
            you can confidently navigate new cultures and experiences. Our
            languages app is your gateway to this remarkable world of
            possibilities.
            <br />
            <br />
            With our app, learning a new language becomes an exciting adventure.
            Whether you're a beginner or an advanced learner, our carefully
            curated lessons, interactive exercises, and immersive content will
            keep you engaged and motivated every step of the way. Say goodbye to
            dull textbooks and hello to dynamic and personalized learning
            experiences that adapt to your unique needs and goals. But our app
            is more than just language lessons. It's a vibrant community of
            language enthusiasts, all passionate about expanding their horizons
            and connecting with others. Engage in conversations with native
            speakers, participate in language exchanges, and make friends from
            diverse backgrounds. Together, we create a supportive and inspiring
            environment where cultural understanding and friendship thrive.
            <br />
            <br />
            Join our languages app today and embark on an incredible journey of
            self-discovery, cultural immersion, and linguistic mastery. The
            world is waiting for you, and we're here to guide you every step of
            the way. Together, let's embrace the power of language and unleash
            your true linguistic potential!
          </p>
        </div>
      </div>

      {/* Behind the Screen */}
      <div className="hero bg-base-200 p-10">
        <div className="hero-content flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col lg:w-1/2">
            <h1 className="text-2xl font-bold">Behind The Screen</h1>
            <br />
            <p className="py-2 text-justify mr-12">
              Welcome to a glimpse behind the curtain, where the magic happens
              and dreams become reality. Join us on a journey through the
              captivating story of how our groundbreaking language app came to
              life. It all began with a vision, a shared passion for languages,
              and a burning desire to bridge the communication gaps that
              separate us. Our dedicated team embarked on an ambitious mission
              to develop an app that would empower individuals to learn
              languages effortlessly, connect with diverse cultures, and expand
              their horizons.
              <br />
              <br />
              Countless hours of brainstorming, research, and meticulous
              planning laid the foundation for our app's creation. We left no
              stone unturned, meticulously designing each feature and crafting
              an intuitive user experience that would captivate learners of all
              levels.
              <br />
              <br />
              Our talented developers brought the app to life, weaving together
              complex algorithms and cutting-edge technologies to deliver a
              seamless learning platform. They embraced challenges with
              unwavering determination, crafting an app that adapts to
              individual learning styles, tracks progress, and offers
              personalized recommendations for optimized growth.
              <br />
              <br />
            </p>
          </div>

          <div className="flex justify-center items-center lg:w-1/2">
            <img
              src={behindTheScenes}
              className="max-w-sm rounded-lg shadow-2xl mb-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Transition(About);
