import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  var [content, setContent] = useState();

  useEffect(
    function () {
      axios
        .get("http://localhost:4000/api/v1/classes", {})
        .then((response) => setContent(response));
    },
    [setContent]
  );

  console.log("erf", content);
  return (
    <div>
      <h1>Home</h1>
      
    </div>
  );
};

export default Home;
