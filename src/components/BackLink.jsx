import { AiFillCaretLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BackLink = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/home/`)}
      className="text-red-400 fixed top-20 left-7 flex"
    >
      <div>
        <AiFillCaretLeft size={22} />
      </div>
      <div className="pb-5">Back</div>
    </button>
  );
};

export default BackLink;
