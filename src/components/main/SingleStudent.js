import { Link } from "react-router-dom";

export default function SingleStudent({ user }) {
  if (!user || user.length === 0) {
    return (
      <div className="flex justify-center ">
        <div className="m-8">
          <h2 className="m-2">Loading</h2>
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-sm"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="m-10 card card-compact w-96 bg-base-100 shadow-xl"
        key={user._id}
      >
        <figure className="h-80">
          {user?.profilePicture && (
            <img alt={"userimage"} src={user?.profilePicture} />
          )}
        </figure>
        <div className="card-body">
          <h2 className="self-center card-title">
            {user.firstName} {user.lastName}
          </h2>
          <div className="tab-content text-center">
            <div>
              <span className="font-bold">Nationality:</span>
              <span> {user.nationality}</span>
            </div>
            <div>
              <span className="font-bold">Location:</span>
              <span> {user.country}</span>
            </div>
            <div>
              <span className="font-bold">Speaks:</span>
              <span> {user.motherLanguage}</span>
            </div>
            <div>
              <span className="font-bold">Wants to learn:</span>
              <span> {user.language}</span>
            </div>
          </div>
          <div className="flex justify-center card-actions">
            <Link to={`/student/${user._id}`}>
              <button className="btn btn-neutral opacity-90">
                See Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
