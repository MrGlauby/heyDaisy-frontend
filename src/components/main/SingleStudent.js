import StudentImg from "../../img/randomUserReview1.jpg";
import { Link } from "react-router-dom";

export default function SingleStudent({ user }) {
  return (
    <div>
      <div
        className="m-8 card card-compact w-96 bg-base-100 shadow-xl"
        key={user._id}
      >
        <figure>
          <img src={StudentImg} alt="" />
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
              <button className="btn btn-primary">See Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
