import React from "react";

export default function EventsSection() {
  return (
    <div>
      <div className="flex justify-center m-8">
        <h2 className="text-5xl font-bold">Events</h2>
      </div>
      <div className="overflow-x-auto m-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Language</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Let's talk about soccer!
                <br />
                <span className="badge badge-ghost badge-sm">
                  advanced level
                </span>
              </td>
              <td>Spanish</td>
              <th>
                 <a href="events" className="btn btn-primary btn-xs" >details </a>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                I want to talk about traveling :)
                <br />
                <span className="badge badge-ghost badge-sm">basic level</span>
              </td>
              <td>Italian</td>
              <th>
              <a href="events" className="btn btn-primary btn-xs" >details </a>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Let's cook a Portuguese dish together!
                <br />
                <span className="badge badge-ghost badge-sm">
                  advanced level
                </span>
              </td>
              <td>Portuguese</td>
              <th>
              <a href="events" className="btn btn-primary btn-xs" >details </a>
              </th>
            </tr>
            {/* row 4 */}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Language</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
