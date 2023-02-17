import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TrainerItem from "../components/TrainerItem.jsx";
import UserIdContext from "../Contexts/UserIdContext";
import { useContext } from "react";
import TokenContext from "../Contexts/TokenContext";
import LoggedInUserContext from "../Contexts/LoggedInUserContext.js";
import LoggedInUser from "../components/LoggedInUser.jsx";
import BackLink from "../components/BackLink.jsx";

const ClassDetails = () => {
  const { id } = useParams();
  const [classDetail, setClassDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  var [token] = useContext(TokenContext);
  const [loggedInUser] = useContext(LoggedInUserContext);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/classes/" + id)
      .then((response) => {
        if (!response.ok) {
          throw Error("Vi kunne desværre ikke indlæse kursusinformationerne");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setClassDetail(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [setClassDetail, setIsLoading, setError, id]);

  console.log("classDt", classDetail);

  console.log("error", error);

  return (
    <div>
      {isLoading && <p>Indlæser...</p>}
      {classDetail && (
        <section>
          <BackLink />
          <img
            src={classDetail && classDetail.asset.url}
            alt={classDetail && classDetail.className}
          />
          <div className="flex">
            <h1 className="text-center text-[28px]">{classDetail && classDetail.className}</h1>
            {token && <LoggedInUser classId={id} />}
          </div>
        </section>
      )}

      {error && <p>{error}</p>}

      {isLoading && <p>Indlæser...</p>}
      {classDetail && (
        <section>
          <h2>Schedule</h2>
          <div className="flex">
            <p>{classDetail && classDetail.classDay}</p>
            <p>{classDetail && classDetail.classTime}</p>
          </div>
          <p>{classDetail && classDetail.classDescription}</p>
        </section>
      )}

      {error && <p>{error}</p>}

      {isLoading && <p>Indlæser...</p>}
      {classDetail && (
        <section>
          <h2>Trainer</h2>

          <TrainerItem id={classDetail.trainerId} />
        </section>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};
export default ClassDetails;
