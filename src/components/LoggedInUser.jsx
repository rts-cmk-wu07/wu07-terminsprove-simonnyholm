import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../Contexts/TokenContext";
import UserIdContext from "../Contexts/UserIdContext";

import LoggedInUserContext from "../Contexts/LoggedInUserContext";

const LoggedInUser = ({ id }) => {
  var [token] = useContext(TokenContext);
  var [UserId] = useContext(UserIdContext);
  console.log("scheduleTokenContext", token);
  console.log("scheduleUserIdContext", UserId);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/users/" + id, {
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
        setLoggedInUser(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [setLoggedInUser, setIsLoading, setError, UserId]);

  console.log("loggedInUser", loggedInUser);

  return <div></div>;
};

export default LoggedInUser;
