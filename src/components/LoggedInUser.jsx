import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../Contexts/TokenContext";
import UserIdContext from "../Contexts/UserIdContext";

import LoggedInUserContext from "../Contexts/LoggedInUserContext";
import SignInOut from "./SignInOut";

const LoggedInUser = ({ classId }) => {
  var [token] = useContext(TokenContext);
  var [UserId] = useContext(UserIdContext);
  console.log("scheduleTokenContext", token);
  console.log("scheduleUserIdContext", UserId);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(null);

  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);

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
          throw Error("Vi kunne desværre ikke indlæse din bruger");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoggedInUser(data.classes);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [setLoggedInUser, setIsLoading, setError, UserId]);

  console.log("loggedInUser", loggedInUser);

  //console.log("loggedInUser", loggedInUser.classes);

  //const usersClasses = loggedInUser.classes;

  //console.log("usersclasses", usersClasses);

  // usersClasses.some((e) => e.id === id)

  /*

  if (loggedInUser.some((e) => e.id === id)) {
    setIsSubmitted(true);
  } else {
    setIsSubmitted(false);
  }



  for (var i = 0; i < loggedInUser.length(); i++) {
    if (loggedInUser[i].id === classId) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  }

  console.log("isSubmitted", isSubmitted);
  */
  return (
    <div>
      {isLoading && <p>Indlæser...</p>}
      {loggedInUser && (
        <SignInOut loggedInUser={loggedInUser} classId={classId} />
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoggedInUser;
