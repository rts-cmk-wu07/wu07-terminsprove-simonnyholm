import { useState } from "react";
import SubmitClass from "./SubmitClass";

const SubmitBtn = ({ classId }) => {
  const [renderSubmit, setRenderSubmit] = useState(null);

  return (
    <>
      {!renderSubmit && (
        <button
          onClick={(event) => {
            setRenderSubmit(true);
          }}
        >
          Sign Up
        </button>
      )}

      {renderSubmit && <SubmitClass classId={classId} />}
    </>
  );
};

export default SubmitBtn;
