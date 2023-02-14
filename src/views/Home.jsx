import { useState, useEffect } from "react";
//import ClassItem from "../components/ClassItem";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [classes, setClasses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/classes")
      .then((response) => {
        if (!response.ok) {
          throw Error("Vi kunne desværre ikke indlæse kursusinformationerne");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setClasses(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [setClasses, setIsLoading, setError]);

  console.log("error", error);

  console.log("classes", classes);

  if (classes) {
    var randomClass = classes[Math.floor(Math.random() * classes.length)];
  } else {
    return;
  }

  console.log("rando", randomClass);

  return (
    <>
      <section>
        <div>
          <div>icon</div>
          <h1>Popular Classes</h1>
        </div>
        <div>
          {isLoading && <p>Indlæser...</p>}
          {classes && (
            <>
              <img src={randomClass.asset.url} alt="" />
              <h2>{randomClass.className}</h2>
            </>
          )}
          {error && <p>{error}</p>}
        </div>
      </section>
      <section>
        <div>
          {isLoading && <p>Indlæser...</p>}
          {classes &&
            classes.map((cl, index) => (
              <div
                key={index}
                onClick={() => navigate(`/classdetails/${cl.id}`)}
              >
                <div>
                  <img src={cl.asset.url} alt={cl.className} />
                </div>
                <p key={index}>{cl.className}</p>
              </div>
            ))}

          {error && <p>{error}</p>}
        </div>
      </section>

      <div></div>
    </>
  );
};

export default Home;
