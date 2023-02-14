import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home.jsx";
import MySchedule from "./views/MySchedule.jsx";
import Search from "./views/Search.jsx";
import Welcome from "./views/Welcome";
import ClassDetails from "./views/ClassDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myschedule" element={<MySchedule />} />
        <Route path="/search" element={<Search />} />
        <Route path="/classdetails/:id" element={<ClassDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
