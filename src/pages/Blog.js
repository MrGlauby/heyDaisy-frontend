import React from 'react'

import party from "../img/party.jpg"
import work from "../img/work.jpg"
import community from "../img/comunity.jpg"
import social from "../img/social.jpg"

import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";


export default function Blog() {
  return (
    <div>
        <Navbar />
{/* blog1 */}

<div className="hero min-h-screen">
  <div className="hero-content">
    <img src={party} className="rounded-lg shadow-2xl w-1/2 mb-20 " />
    <div>
      <h1 className="text-2xl font-bold"> 29.06.23 -  Welcome to heyDaisy !</h1>
      <p className="py-2 text-justify">  Hello, dear language learners,

We are thrilled to welcome you to our new language learning app! With this app, we aim to support you in improving your language skills in a simple and enjoyable way. Whether you are a beginner or an advanced learner, our app offers a variety of features and exercises to strengthen your abilities.

In our first blog post, we would like to give you an overview of the main features of the app:
<br></br>
<br></br>
Dear Community,

We are delighted to extend a warm welcome to all language enthusiasts, learners, and passionate individuals who have joined our vibrant community. It is with great pleasure that we introduce you to our language learning platform, a space dedicated to unlocking the doors to new cultures, connections, and personal growth through language acquisition.


What can you expect from our community? Let us paint a picture for you:

A Diverse and Inclusive Environment: We believe that language has the power to connect people from all walks of life. Our community celebrates diversity and embraces individuals from every corner of the globe. Engage in meaningful conversations, exchange cultural insights, and forge friendships with fellow learners who share your curiosity and love for languages.



Happy learning!
See you soon,
<br></br>
<br></br>
heyDaisy Team</p>
    </div>
  </div>
</div>
{/* lg:flex-row-reverse */}

{/* blog 2 */}
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content lg:flex-row-reverse">
    <img src={work} className="rounded-lg shadow-2xl w-1/2 mb-20 " />
    <div>
      <h1 className="text-2xl font-bold">  30.06.23 -  Roadmap!</h1>
      <p className="py-2 text-justify  ">  Welcome to our language app! Discover our exciting Features Roadmap designed to enhance your learning journey:

Intelligent Language Assessment: Personalized learning based on your proficiency level.
Interactive Practice Sessions: Engage in real-life conversations for improved skills.
Vocabulary Expansion: Fun and effective tools to expand your word bank.
Cultural Insights: Understand language within its cultural context.
Progress Tracking and Goal Setting: Stay motivated and celebrate milestones.
Community Engagement: Connect with fellow learners for support and language exchange.
Join us for an exceptional language learning experience!

These are just a few highlights from our exciting Features Roadmap. We are committed to continuously enhancing our app with new features and updates based on user feedback and the latest advancements in language learning technology. Stay tuned for even more exciting developments!

Get ready to embark on an incredible language learning journey. Our app is here to empower you, guide you, and make your language learning experience enjoyable and effective. Say hello to a world of possibilities and embrace the joy of learning languages.

<br></br>
<br></br>
heyDaisy Team</p>
    </div>
  </div>
</div>


{/* blog 3 */}

<div className="hero min-h-screen">
  <div className="hero-content">
    <img src={community} className="rounded-lg shadow-2xl w-1/2 mb-20 " />
    <div>
      <h1 className="text-2xl font-bold">  1.07.23 -   Team Spirit!</h1>
      <p className="py-2 text-justify">  Hello, dear language learners,

      Team spirit is the secret ingredient behind extraordinary achievements. It fuels collaboration, builds trust, and boosts motivation. When individuals come together with a shared purpose and a supportive environment, magic happens. Let's explore the significance of team spirit and how it drives success.
      <br></br>
      <br></br>

Team spirit breeds collaboration, merging diverse talents and perspectives to generate innovative solutions. It nurtures trust, enabling open communication and effective decision-making. Motivated by a sense of belonging, team members go above and beyond to achieve remarkable results.

Effective leadership and appreciation are key to fostering team spirit. By creating an inclusive culture and recognizing individual contributions, leaders empower teams to reach new heights. Milestones are celebrated, efforts acknowledged, and feedback provided, fueling the team's growth.

In essence, team spirit is the cornerstone of successful teams. It unleashes collective potential, transforming individuals into a harmonious and inspired force. Embrace the power of team spirit and unlock extraordinary achievements together.

Celebrate team spirit, achieve greatness!
<br></br>
<br></br>
heyDaisy Team</p>
    </div>
  </div>
</div>


{/* blog 4 */}
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content lg:flex-row-reverse">
    <img src={social} className="rounded-lg shadow-2xl w-1/2 mb-20 " />
    <div>
      <h1 className="text-2xl font-bold">  2.07.23 - Our Social Media Partners !</h1>
      <p className="py-2 text-justify">  Hello, dear language learners,

      To make sure you don't miss out on any of the exciting content and updates, be sure to follow us and our Social Media Partners on platforms like Instagram, Facebook, Twitter, and YouTube. Turn on those notifications, because trust us, you won't want to miss a single post!
      
      We are incredibly grateful to have such talented and passionate individuals as our Social Media Partners. Their commitment to empowering language learners aligns perfectly with our mission, and we are honored to have them on board. Together, we will inspire, support, and uplift language learners from all corners of the globe.

      Exciting news! We are proud to present our amazing Social Media Partners. Don't miss out on captivating content, engaging discussions, and a vibrant community. Follow us and our partners for a language learning experience like no other!

      So, join us today and embark on this thrilling adventure. Follow us, follow our Social Media Partners, and let's create a vibrant community that celebrates language learning, cultural exchange, and personal growth. Together, we will redefine what it means to learn and connect in the digital age.

Don't miss out on any of the incredible content that awaits you. Follow us now, and let's embark on this exciting journey together!

Stay connected, stay inspired. Follow us now!
<br></br>
<br></br>
heyDaisy Team</p>
    </div>
  </div>
</div>
        <Footer />


    </div>
  )
};
