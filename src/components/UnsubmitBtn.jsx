import { useState } from "react";
import UnsubmitClass from "./UnsubmitClass";

const UnsubmitBtn = ({ classId }) => {
  const [renderUnsubmit, setRenderUnsubmit] = useState(null);

  return (
    <>
      {!renderUnsubmit && (
        <button
          onClick={(event) => {
            setRenderUnsubmit(true);
          }}
        >
          Leave
        </button>
      )}

      {renderUnsubmit && <UnsubmitClass classId={classId} />}
    </>
  );
};

export default UnsubmitBtn;
