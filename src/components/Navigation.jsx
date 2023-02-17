import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import LoginForm from "./LoginForm";
import TokenContext from "../Contexts/TokenContext";
import { HiBars3BottomRight } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";
import { IoIosClose } from "react-icons/io";

const Navigation = () => {
  const [navClicked, setNavClicked] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  var [token, setToken] = useContext(TokenContext);

  return (
    <>
      {!navClicked && (
        <button
          className="text-slate-400 fixed top-20 right-7"
          onClick={(event) => {
            setNavClicked(true);
          }}
        >
          <HiBars3BottomRight size={35} />
        </button>
      )}

      {navClicked && (
        <div className="fixed right-0 left-0 top-0  bottom-0 w-screen z-40 bg-white">
          <button
            className="text-slate-400 fixed top-20 right-7"
            onClick={(event) => {
              setNavClicked(false);
            }}
          >
            <IoIosClose size={45} />
          </button>
          <nav className="pt-32 text-center text-[50px]">
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
