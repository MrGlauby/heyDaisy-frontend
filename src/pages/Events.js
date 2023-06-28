import React from "react";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";


import RandomUserOne from "../img/randomUserReview1.jpg";
import RandomUserTwo from "../img/randomUserReview2.jpg";
import RandomUserThree from "../img/randomUserReview3.jpg";
import RandomUserFour from "../img/randomUserReview4.jpg";
import RandomUserFive from "../img/randomUserReview5.jpg";
import RandomUserSix from "../img/randomUserReview6.jpg";
import RandomUserSeven from "../img/randomUserReview7.jpg";





// import RandomUserFive from "../../img/randomUserReview5.jpg";
// import RandomUserSix from "../../img/randomUserReview6.jpg";

export default function Events() {
  return (
    <div>

      <Navbar/>
      {/* search */}
    <form>
      <div className="flex items-center pl-40 p-14">
        <input
          className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Search Language..."/><button
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="submit">Search Event</button>
      </div>
    </form>
      {/*  */}

      <div className="overflow-x-auto  pl-32" >
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg">Event Leader </th>
              <th className="text-lg">Event</th>
              <th className="text-lg">Event Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={RandomUserOne}
                        alt="User Review 1"
                        className="rounded-box w-64"
                        />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon

                {/* -- */}
                <br />
                {/* -- */}
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={RandomUserTwo}
                        alt="User Review 1"
                        className="rounded-box w-64"
                        />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group

                {/* -- */}
                <br />
                {/* -- */}

                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                    <img
                        src={RandomUserThree}
                        alt="User Review 2"
                        className="rounded-box w-64"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                {/* -- */}
                <br />
                {/* -- */}

                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
              </td>
              <th><button className="btn btn-ghost btn-xs">details</button></th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12"> <img
                        src={RandomUserFour}
                        alt="User Review 2"
                        className="rounded-box w-64"/>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
                <td>
                <br />
                <span className="badge badge-ghost badge-sm">Community Restaurant
                </span></td>
              <th><button className="btn btn-ghost btn-xs">details</button></th>
            </tr>

             {/* row 5 */}
             <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12"> <img
                        src={RandomUserFive}
                        alt="User Review 2"
                        className="rounded-box w-64"/>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
                <td>
                <br />
                <span className="badge badge-ghost badge-sm">Community Restaurant
                </span></td>
              <th><button className="btn btn-ghost btn-xs">details</button></th>
            </tr>

             {/* row 6 */}
             <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12"> <img
                        src={RandomUserSix}
                        alt="User Review 2"
                        className="rounded-box w-64"/>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
                <td>
                <br />
                <span className="badge badge-ghost badge-sm">Community Restaurant
                </span></td>
              <th><button className="btn btn-ghost btn-xs">details</button></th>
            </tr>

        {/* row 7 */}
          <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12"> <img
                        src={RandomUserSeven}
                        alt="User Review 2"
                        className="rounded-box w-64"/>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
                <td>
                <br />
                <span className="badge badge-ghost badge-sm">Community Restaurant
                </span></td>
              <th><button className="btn btn-ghost btn-xs">details</button></th>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
}
