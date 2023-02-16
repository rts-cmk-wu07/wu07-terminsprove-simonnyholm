import TokenContext from "../Contexts/TokenContext";
import UserIdContext from "../Contexts/UserIdContext";
import { useContext, useState, useEffect } from "react";

const MySchedule = () => {
  var [token] = useContext(TokenContext);
  var [UserId] = useContext(UserIdContext);
  console.log("scheduleTokenContext", token);
  console.log("scheduleUserIdContext", UserId);
  const [mySchedule, setMySchedule] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <div>
      {isLoading && <p>Indlæser din træningsplan...</p>}
      {mySchedule && (
        <section>

        </section>
      )}
      {error && <p>{error}</p>}

          
      </div>
    </div>
  );
};

export default MySchedule;
