import { useState, useContext } from "react";

const LoginForm = () => {
  //var [tokenContext, setTokenContext] = useContext(TokenContext);
  const [token, setToken] = useState(null);
  const [error, setError] = useState("");
  //const [username, setUsername] = useState();
  //const [password, setPassword] = useState();

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
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getToken(event);
  };

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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">
            Brugernavn:
            <input type="text" name="username" id="username" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Adgangskode:
            <input type="password" name="password" id="password" />
          </label>
        </div>

        <button type="submit">Log ind</button>
      </form>
      <div>
        <p>{token ? "Du er logget ind" : "Du er ikke logget ind"}</p>

        <p>{error.message}</p>
      </div>
    </>
  );
};

export default LoginForm;
