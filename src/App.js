import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home.jsx";
import MySchedule from "./views/MySchedule.jsx";
import Search from "./views/Search.jsx";
import Welcome from "./views/Welcome";
import ClassDetails from "./views/ClassDetails";
import TokenContext from "./Contexts/TokenContext";
import { useState } from "react";
import UserIdContext from "./Contexts/UserIdContext";
import LoggedInUserContext from "./Contexts/LoggedInUserContext";

function App() {
  var tokenState = useState(null);
  var userIdState = useState(null);
  var loggedInUserState = useState(null);

  console.log("tokenState", tokenState);
  console.log("userIdState", userIdState);
  console.log("loggedInUserState", loggedInUserState);

  return (
    <TokenContext.Provider value={tokenState}>
      <UserIdContext.Provider value={userIdState}>
        <LoggedInUserContext.Provider value={loggedInUserState}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/myschedule" element={<MySchedule />} />
              <Route path="/search" element={<Search />} />
              <Route path="/classdetails/:id" element={<ClassDetails />} />
            </Route>
          </Routes>
        </LoggedInUserContext.Provider>
      </UserIdContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
