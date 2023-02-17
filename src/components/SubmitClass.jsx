import UserIdContext from "../Contexts/UserIdContext";
import TokenContext from "../Contexts/TokenContext";

import { useState, useEffect, useContext } from "react";
import UnsubmitBtn from "./UnsubmitBtn";

const SubmitClass = ({ classId }) => {
  const [submitClass, setSubmitClass] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  var [token] = useContext(TokenContext);
  var [UserId] = useContext(UserIdContext);

  useEffect(() => {
    fetch(
      "http://localhost:4000/api/v1/users/" + UserId + "/classes/" + classId,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Vi kunne desværre ikke tilmelde dig til kurset");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setSubmitClass(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [setSubmitClass, setIsLoading, setError, UserId, classId]);

  console.log("submitClass", submitClass);

  return (
    <>
      {setIsLoading && <p></p>}
      {submitClass && (
        <>
          {" "}
          <div>Signed Up</div> <UnsubmitBtn classId={classId} />{" "}
        </>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default SubmitClass;
