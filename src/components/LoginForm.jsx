import { useState, useContext } from "react";
import TokenContext from "../Contexts/TokenContext";
import UserIdContext from "../Contexts/UserIdContext";
import LoggedInUser from "./LoggedInUser";

const LoginForm = () => {
  //const [tokenContext, setTokenContext] = useContext(TokenContext);
  const [token, setToken] = useContext(TokenContext);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [userId, setUserId] = useContext(UserIdContext);

  //const { TokenContext } = useContext(TokenContext);

  async function getToken(event) {
    try {
      const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        body: JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      console.log("resp", response);

      const data = await response.json();
      setToken(data.token);
      setUserId(data.userId);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getToken(event);
  };

  console.log("TokenContext", TokenContext);
  console.log("UserId", userId);

  /*

  async function loginHandler(event) {
    event.preventDefault();

    try {


      const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        body: JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value,
        }),
        header: "Content-Type: application/x-www-form-urlencoded",
      });

      console.log("resp", response);

      if (response.status === 200) {
        const data = await response.json();
        setToken(data.token);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  */

  console.log("token please", token);

  return (
    <>
      <h3 className="text-[50px]">Log ind</h3>
      <form className="text-[22px] text-left pl-10" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">
            <p className="pt-5">Brugernavn:</p>

            <input type="text" name="username" id="username" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            <p className="pt-5">Adgangskode:</p>

            <input type="password" name="password" id="password" />
          </label>
        </div>

        <button
          className="text-[50px] text-center bg-slate-300 rounded-xl p-8"
          type="submit"
          onClick={(event) => {
            setSubmitted(true);
          }}
        >
          Log ind
        </button>
      </form>
      <div>
        <p className="text-[22px] text-left pl-10">
          {!token
            ? submitted
              ? "Bekræfter brugernavn og adgangskode. Vent venligst..."
              : "Du er ikke logget ind"
            : "Du er logget ind."}
        </p>

        <p>{error.message}</p>
      </div>
    </>
  );
};

export default LoginForm;
