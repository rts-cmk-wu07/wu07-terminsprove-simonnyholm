import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section>
        <h1>Believe yourself</h1>
        <p>Train like a pro</p>
      </section>
      <section>
        <button onClick={() => navigate(`/home/`)}>Get Started</button>
      </section>
    </div>
  );
};
export default Welcome;
