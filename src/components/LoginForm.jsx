import { useState } from "react";

const LoginForm = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState("");

  async function loginHandler(event) {
    event.preventDefault();
    try {
      const respons = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        body: JSON.stringify({
          username: event.target.username.value,
          password: event.target.password.value,
        }),
        //Header: "Content-Type: application/x-www-form-urlencoded",
      });

      if (respons.status === 201) {
        const data = await respons.json();
        setToken(data.token);
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  console.log("token please", token);

  return (
    <>
      <form onSubmit={loginHandler}>
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
