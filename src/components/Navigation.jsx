import { NavLink } from "react-router-dom";
import { useState } from "react";
import LoginForm from "./LoginForm";

const Navigation = () => {
  const [navClicked, setNavClicked] = useState(false);

  return (
    <>
      {!navClicked && (
        <button
          className="border-2"
          onClick={(event) => {
            setNavClicked(true);
          }}
        >
          Menu
        </button>
      )}

      {navClicked && (
        <div>
          <button
            onClick={(event) => {
              setNavClicked(false);
            }}
          >
            Close
          </button>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/home"
                  onClick={(event) => {
                    setNavClicked(false);
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/search"
                  onClick={(event) => {
                    setNavClicked(false);
                  }}
                >
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myschedule"
                  onClick={(event) => {
                    setNavClicked(false);
                  }}
                >
                  MySchedule
                </NavLink>
              </li>
              <li>
                <button>Ternary login/Out</button>
              </li>
            </ul>
          </nav>
          <div>
            <LoginForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
