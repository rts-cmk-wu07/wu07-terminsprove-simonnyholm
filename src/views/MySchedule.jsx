import TokenContext from "../Contexts/TokenContext";
import UserIdContext from "../Contexts/UserIdContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MySchedule = () => {
  var [token] = useContext(TokenContext);
  var [UserId] = useContext(UserIdContext);
  console.log("scheduleTokenContext", token);
  console.log("scheduleUserIdContext", UserId);
  const [mySchedule, setMySchedule] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/users/" + UserId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Vi kunne desværre ikke indlæse din træningsplan");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setMySchedule(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [setMySchedule, setIsLoading, setError, UserId, token]);

  console.log("mySchedule", mySchedule);

  return (
    <div>
      <h1>My Schedule</h1>
      <section>
        {isLoading && <p>Indlæser din træningsplan...</p>}
        {mySchedule &&
          mySchedule.classes.map((cl, index) => (
            <article
              key={index}
              onClick={() => navigate(`/classdetails/${cl.id}`)}
            >
              <div className="flex">
                <p>{cl.classDay}</p>
                <p>{cl.classTime}</p>
              </div>
              <h2>{cl.className}</h2>
            </article>
          ))}

        {error && <p>{error}</p>}
      </section>
    </div>
  );
};

export default MySchedule;
