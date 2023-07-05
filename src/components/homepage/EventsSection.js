import { Link } from "react-router-dom";
import Germany from "../../img/germany.svg";
import Italy from "../../img/italy.svg";
import Spain from "../../img/spain.svg";
import Portugal from "../../img/portugal.svg";
import Tapas from "../../img/tapasbar.jpg";
import ItalianDinner from "../../img/italiandinner.jpg";
import Football from "../../img/football.jpg";
import Biergarten from "../../img/biergarten.jpg";

export default function EventsSection() {
  return (
    <div className="flex flex-col justify-center p-32">
      <div className="flex justify-center m-8">
        <h2 className="text-5xl font-bold">Events</h2>
      </div>
      <div className="overflow-x-auto m-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-200">
              <th></th>
              <th className="text-base">Name</th>
              <th className="text-base">Language</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="border-b border-gray-300">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-20 ml-8 rounded-full ring ring-neutral opacity-80 ring-offset-base-100 ring-offset-2">
                      <img src={Football} alt="User Events" />
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-base">
                Let's talk about football and discover the chants from your
                country!
                <br />
                <span className="badge badge-ghost badge-sm">
                  Beginner Level
                </span>
              </td>
              <td className="grid grid-cols-2 gap-0">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-neutral opacity-80 ring-offset-base-100 ring-offset-2">
                    <img src={Germany} alt="User Events" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-neutral opacity-80 ring-offset-base-100 ring-offset-2">
                    <img src={Portugal} alt="User Events" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-neutral opacity-80 ring-offset-base-100 ring-offset-2">
                    <img src={Spain} alt="User Events" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-neutral opacity-80 ring-offset-base-100 ring-offset-2">
                    <img src={Italy} alt="User Events" />
                  </div>
                </div>
              </td>
              <th>
                <a href="events" className="btn btn-neutral opacity-80 btn-md">
                  details{" "}
                </a>
              </th>
            </tr>
            {/* row 2 */}
            <tr className="border-b border-gray-300">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-20 ml-8 rounded-full ring ring-neutral opacity-80 ring-offset-base-100 ring-offset-2">
                      <img src={Tapas} alt="User Events" />
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-base">
                Being at a Spanish bodega and learn to order some amazing tapas!
                <br />
                <span className="badge badge-ghost badge-sm">
                  Beginner Level
                </span>
              </td>
              <td>
                {" "}
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-neutral opacity-80 ring-offset-base-100 ring-offset-2">
                    <img src={Spain} alt="User Events" />
                  </div>
                </div>
              </td>
              <th>
                <a href="events" className="btn btn-neutral opacity-80 btn-md">
                  details{" "}
                </a>
              </th>
            </tr>
            {/* row 3 */}
            <tr className="border-b border-gray-300">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-20 ml-8 rounded-full ring ring-neutral opacity-80 ring-offset-base-100 ring-offset-2">
                      <img src={ItalianDinner} alt="User Events" />
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-base">
                Meet up with your partner's Italian family and impress them with
                your skills!
                <br />
                <span className="badge badge-ghost badge-sm">
                  Advanced Level
                </span>
              </td>
              <td>
                {" "}
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-neutral opacity-80 ring-offset-base-100 ring-offset-2">
                    <img src={Italy} alt="User Events" />
                  </div>
                </div>
              </td>
              <th>
                <Link to="events" className="btn btn-neutral opacity-80 btn-md">
                  details{" "}
                </Link>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-20 ml-8 rounded-full ring ring-neutral opacity-80 ring-offset-base-100 ring-offset-2">
                      <img src={Biergarten} alt="User Events" />
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-base">
                Being at a Bavarian Biergarten and explore the many do's and
                dont's...
                <br />
                <span className="badge badge-ghost badge-sm">
                  Beginner Level
                </span>
              </td>
              <td>
                {" "}
                <div className="avatar">
                  <div className="w-20 rounded-full ring ring-neutral opacity-80 ring-offset-base-100 ring-offset-2">
                    <img src={Germany} alt="User Events" />
                  </div>
                </div>
              </td>
              <th>
                <Link to="events" className="btn btn-neutral opacity-80 btn-md">
                  details{" "}
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
