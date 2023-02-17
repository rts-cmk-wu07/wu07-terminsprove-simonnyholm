import UserIdContext from "../Contexts/UserIdContext";
import TokenContext from "../Contexts/TokenContext";

import { useState, useEffect, useContext } from "react";
import SubmitBtn from "./SubmitBtn";

const UnubmitClass = ({ classId }) => {
  const [unsubmitClass, setUnsubmitClass] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  var [token] = useContext(TokenContext);
  var [UserId] = useContext(UserIdContext);

  useEffect(() => {
    fetch(
      "http://localhost:4000/api/v1/users/" + UserId + "/classes/" + classId,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("We could not remove you from the class");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setUnsubmitClass(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [setUnsubmitClass, setIsLoading, setError, UserId, classId]);

  console.log("unsubmitClass", unsubmitClass);
  console.log("error", error);

  return (
    <>
      {isLoading && <p>Loading...</p>}

      <>
        {" "}
        <div>You left</div> <SubmitBtn classId={classId} />{" "}
      </>
    </>
  );
};

export default UnubmitClass;
