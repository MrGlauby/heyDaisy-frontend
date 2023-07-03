import React from "react";
import Sidebar from "../components/main/Sidebar";
import { StateContext } from "../stateContext";
import { useContext } from "react";

import Germany from "../img/germany.svg";
import Italy from "../img/italy.svg";
import Spain from "../img/spain.svg";
import Portugal from "../img/portugal.svg";

import Tapas from "../img/tapasbar.jpg";
import CityOffice from "../img/buergeramt.jpg";
import ItalianDinner from "../img/italiandinner.jpg";
import Football from "../img/football.jpg";
import Lost from "../img/lost.jpg";
import Biergarten from "../img/biergarten.jpg";

export default function Events() {
  const { user } = useContext(StateContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex ">
        <div className="flex flex-wrap justify-center">
          <div className="m-10 card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-80">
              <img alt={"Tapas"} src={Tapas} />
            </figure>
            <div className="card-body">
              <div className="avatar flex justify-center">
                <div className="mask mask-squircle w-14 h-14">
                  <img src={Spain} alt="Spain" />
                </div>
              </div>
              <br></br>
              <div className="tab-content text-center">
                <div>
                  <span className="font-bold">
                    Being at a Spanish restaurant
                  </span>
                  <br />
                  <span>
                    You want to see how you would be in an authentic tapas bar
                    or just want to order some vinho tintos? Vamos!
                  </span>
                </div>
                <br />
                <div>
                  <span className="font-bold">When: tomorrow</span>
                  <span> {}</span>
                </div>
                <div>
                  <span className="font-bold">Language: Spanish</span>
                  <span> {}</span>
                </div>
                <div>
                  <span className="font-bold">Level: Beginner</span>
                  <span> {}</span>
                </div>
              </div>
              <br></br>
              <div className="flex justify-center">
                <a href={user.videoLink}>
                  <button className="btn btn-primary text-lg">
                    Enter Event
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Repeat the above event card code two more times for a total of three cards */}

          <div className="m-10 card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-80">
              <img alt={"CityOffice"} src={CityOffice} />
            </figure>
            <div className="card-body">
              <div className="avatar flex justify-center">
                <div className="mask mask-squircle w-14 h-14">
                  <img src={Germany} alt="Germany" />
                </div>
              </div>
              <br></br>

              <div className="tab-content text-center">
                <div>
                  <span className="font-bold">
                    Being at a German city office
                  </span>
                  <br />
                  <span>
                    Wanna have the ultimate German experience? Go get paper work
                    or important documents and learn how to behave in such a
                    situation.
                  </span>
                </div>
                <br />
                <div>
                  <span className="font-bold">When: in 1 week</span>
                  <span> {}</span>
                </div>
                <div>
                  <span className="font-bold">Language: German</span>
                  <span> {}</span>
                </div>
                <div>
                  <span className="font-bold">Level: Advanced</span>
                  <span> {}</span>
                </div>
              </div>
              <br></br>

              <div className="text-lg flex justify-center">
                <a href={user.videoLink}>
                  <button className="btn btn-primary text-lg">
                    Enter Event
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Repeat the above event card code two more times for a total of six cards */}

          <div className="m-10 card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-80">
              <img alt={""} src={ItalianDinner} />
            </figure>
            <div className="card-body">
              <div className="avatar flex justify-center">
                <div className="mask mask-squircle w-14 h-14">
                  <img src={Italy} alt="Italy" />
                </div>
              </div>
              <br></br>
              <div className="tab-content text-center">
                <div>
                  <span className="font-bold">
                    Meet up with your partner's Italian family
                  </span>
                  <br />
                  <span>
                    Learn how to impress your partner's family with cheesy
                    Italian phrases and learn the do's and dont's!
                  </span>
                </div>
                <br />
                <div>
                  <span className="font-bold">When: in 10 days</span>
                  <span> {}</span>
                </div>
                <div>
                  <span className="font-bold">Language: Italian</span>
                  <span> {}</span>
                </div>
                <div>
                  <span className="font-bold">Level: Beginner</span>
                  <span> {}</span>
                </div>
              </div>
              <br></br>

              <div className="text-lg flex justify-center">
                <a href={user.videoLink}>
                  <button className="btn btn-primary text-lg">
                    Enter Event
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="m-10 card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-80">
              <img alt={"Football Match"} src={Football} />
            </figure>
            <div className="card-body">
              <div className="avatar flex justify-center gap-4">
                <div className="mask mask-squircle w-14 h-14">
                  <img src={Spain} alt="" />
                </div>

                <div className="mask mask-squircle w-14 h-14">
                  <img src={Germany} alt="Germany" />
                </div>
                <div className="mask mask-squircle w-14 h-14">
                  <img src={Portugal} alt="Portugal" />
                </div>
                <div className="mask mask-squircle w-14 h-14">
                  <img src={Italy} alt="Italy" />
                </div>
              </div>
              <br></br>

              <div className="tab-content text-center">
                <div>
                  <span className="font-bold">
                    Watching a football match with an mixed crowd
                  </span>
                  <br />
                  <span>
                    Learn the different chants to cheer up your team. See what
                    the essentials for sounding like a true football fan are
                    (and which team has the best fans)!
                  </span>
                </div>
                <br />
                <div>
                  <span className="font-bold">When: in 2 weeks</span>
                  <span> {}</span>
                </div>
                <div>
                  <span className="font-bold">Language: Any</span>
                  <span> {}</span>
                </div>
                <div>
                  <span className="font-bold">Level: Beginner</span>
                  <span> {}</span>
                </div>
              </div>
              <br></br>

              <div className="text-lg flex justify-center">
                <a href={user.videoLink}>
                  <button className="btn btn-primary text-lg">
                    Enter Event
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="m-10 card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-80">
              <img alt={"Biergarten"} src={Biergarten} />
            </figure>
            <div className="card-body">
              <div className="avatar flex justify-center">
                <div className="mask mask-squircle w-14 h-14">
                  <img src={Germany} alt="Germany" />
                </div>
              </div>
              <br></br>

              <div className="tab-content text-center">
                <div>
                  <span className="font-bold">
                    Being at a Bavarian Biergarten
                  </span>
                  <br />
                  <span>
                    You are only a true German when you know how to follow these
                    rules in a German Biergarten. But do not worry: the more
                    beer, the better your German will be.
                  </span>
                </div>
                <br />
                <div>
                  <span className="font-bold">When: in 3 weeks</span>
                  <span> {}</span>
                </div>
                <div>
                  <span className="font-bold">Language: German</span>
                  <span> {}</span>
                </div>
                <div>
                  <span className="font-bold">Level: Beginner</span>
                  <span> {}</span>
                </div>
              </div>
              <br></br>

              <div className="text-lg flex justify-center">
                <a href={user.videoLink}>
                  <button className="btn btn-primary text-lg">
                    Enter Event
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="m-10 card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-80">
              <img alt={"lost in south america"} src={Lost} />
            </figure>
            <div className="card-body">
              <div className="avatar flex justify-center gap-4">
                <div className="mask mask-squircle w-14 h-14">
                  <img src={Spain} alt="Spain" />
                </div>
                <div className="mask mask-squircle w-14 h-14">
                  <img src={Portugal} alt="Portugal" />
                </div>
              </div>
              <br></br>

              <div className="tab-content text-center">
                <div>
                  <span className="font-bold">
                    Being lost in the middle of nowhere in the South American
                    outskirts
                  </span>
                  <br />
                  <span>
                    Your phone's out of battery and you can't find your way
                    home? Here is what to say in case you get lost. You will
                    come home the best way possible.
                  </span>
                </div>
                <br />
                <div>
                  <span className="font-bold">When: in 4 weeks</span>
                  <span> {}</span>
                </div>
                <div>
                  <span className="font-bold">
                    Language: Spanish/Portuguese
                  </span>
                  <span> {}</span>
                </div>
                <div>
                  <span className="font-bold">Level: Beginner</span>
                  <span> {}</span>
                </div>
              </div>
              <br></br>

              <div className="text-lg flex justify-center">
                <a href={user.videoLink}>
                  <button className="btn btn-primary text-lg">
                    Enter Event
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
