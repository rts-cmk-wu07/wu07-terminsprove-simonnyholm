import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [navClicked, setNavClicked] = useState(false);

  return (


    <>
      {!navClicked && (
        <button
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
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/search">Search</NavLink>
              </li>
              <li>
                <NavLink to="/myschedule">MySchedule</NavLink>
              </li>
              <li>
                <button>Ternary logon/Out</button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
