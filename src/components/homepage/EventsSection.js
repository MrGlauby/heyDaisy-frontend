import { Link } from "react-router-dom";

import RandomUserOne from "../../img/randomUserReview1.jpg";
import RandomUserFive from "../../img/randomUserReview5.jpg";
import RandomUserSix from "../../img/randomUserReview6.jpg";
import RandomUserTwo from "../../img/randomUserReview2.jpg";

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
              <th className="text-base">Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="border-b border-gray-300">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={RandomUserOne} alt="User Events" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-base">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td className="text-base">
                Let's talk about football!
                <br />
                <span className="badge badge-ghost badge-sm">
                  beginner level
                </span>
              </td>
              <td className="text-base">Any</td>
              <th>
                <a href="events" className="btn btn-primary btn-xs">
                  details{" "}
                </a>
              </th>
            </tr>
            {/* row 2 */}
            <tr className="border-b border-gray-300">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={RandomUserFive} alt="User Events" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-base">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td className="text-base">
                Being at a Spanish bodega
                <br />
                <span className="badge badge-ghost badge-sm">basic level</span>
              </td>
              <td className="text-base">Spanish</td>
              <th>
                <a href="events" className="btn btn-primary btn-xs">
                  details{" "}
                </a>
              </th>
            </tr>
            {/* row 3 */}
            <tr className="border-b border-gray-300">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={RandomUserSix} alt="User Events" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-base">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td className="text-base">
                Meet up with your partner's Italian family
                <br />
                <span className="badge badge-ghost badge-sm">
                  advanced level
                </span>
              </td>
              <td className="text-base">Italian</td>
              <th>
                <Link to="events" className="btn btn-primary btn-xs">
                  details{" "}
                </Link>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={RandomUserTwo} alt="User Events" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-base">Ethan Anderson</div>
                    <div className="text-sm opacity-50">Australia</div>
                  </div>
                </div>
              </td>
              <td className="text-base">
                Being at a Bavarian Biergarten
                <br />
                <span className="badge badge-ghost badge-sm">
                  advanced level
                </span>
              </td>
              <td className="text-base">German</td>
              <th>
                <Link to="events" className="btn btn-primary btn-xs">
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
