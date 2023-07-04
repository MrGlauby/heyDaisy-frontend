import React from "react";
import Germany from "../img/germany.svg";
import Italy from "../img/italy.svg";
import Spain from "../img/spain.svg";
import Portugal from "../img/portugal.svg";
import MapPainting from "../img/map-painting.png";

import Italian from "../pdf/italian.pdf";
import German from "../pdf/german.pdf";
import Spanish from "../pdf/spanish.pdf";
import Portuguese from "../pdf/portuguese.pdf";
import Transition from "../animation/Transition";

// import

function Download() {
  return (
    <>
      <div className="hero min-h-fit bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={MapPainting} alt="" />
          <div>
            <h1 className="text-5xl font-bold">DOWNLOADS</h1>
            <p className="py-6 text-xl opacity-50">
              Our cheat sheet helps you to learn the common vocabulary and
              sentences of a language.
            </p>
            <p className="text-xl opacity-50">
              Choose your desired language now!
            </p>
          </div>
        </div>
      </div>
      <div className="flex overflow-x-auto py-32 px-48">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Language</th>
              <th>Download Type</th>
              <th>Download Size</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={Italy} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Italian</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">PDF</span>
              </td>
              <td>1 MB</td>
              <th>
                <a href={Italian} download="Italian">
                  <button className="btn">
                    Download
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </a>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={Germany} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">German</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">PDF</span>
              </td>
              <td>1 MB</td>
              <th>
                {/* german */}
                <a href={German} download="German">
                  <button className="btn">
                    Download
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </a>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={Spain} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Spanish</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">PDF</span>
              </td>
              <td>1 MB</td>
              <th>
                <a href={Spanish} download="Spanish">
                  <button className="btn">
                    Download
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </a>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={Portugal} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Portuguese</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">PDF</span>
              </td>
              <td>1 MB</td>
              <th>
                <a href={Portuguese} download="Portuguese">
                  <button className="btn">
                    Download
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </a>
              </th>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
    </>
  );
}

export default Transition(Download);
