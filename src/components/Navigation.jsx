import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import LoginForm from "./LoginForm";
import TokenContext from "../Contexts/TokenContext";

const Navigation = () => {
  const [navClicked, setNavClicked] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  var [token, setToken] = useContext(TokenContext);

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
                {openLogin ? (
                  <>
                    {token ? (
                      <></>
                    ) : (
                      <>
                        <div>
                          {" "}
                          <LoginForm />
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {token ? (
                      <></>
                    ) : (
                      <button
                        onClick={(event) => {
                          setOpenLogin(true);
                        }}
                      >
                        Log ind
                      </button>
                    )}
                  </>
                )}
                {token && (
                  <button
                    onClick={(event) => {
                      setToken(false);
                    }}
                  >
                    Log ud
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
