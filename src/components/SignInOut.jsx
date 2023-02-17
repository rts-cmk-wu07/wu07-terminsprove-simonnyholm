import SubmitBtn from "./SubmitBtn";

import UnsubmitBtn from "./UnsubmitBtn";

const SignInOut = ({ loggedInUser, classId }) => {
  let invalidEntries = 0;

  function filterByID(item) {
    if (Number.isFinite(item.id) && item.id == classId) {
      return true;
    }
    invalidEntries++;
    return false;
  }

  const arrByID = loggedInUser.filter(filterByID);

  console.log("arrbyidlength", arrByID.length);

  console.log("loggedx", loggedInUser);

  //<UnsubmitClass classId={classId} />

  return (
    <div>
      {arrByID.length > 0 ? (
        <>
          <UnsubmitBtn classId={classId} />
        </>
      ) : (
        <>
          <SubmitBtn classId={classId} />
        </>
      )}
    </div>
  );
};

export default SignInOut;
