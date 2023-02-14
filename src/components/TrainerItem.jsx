import { useEffect, useState } from "react";

const TrainerItem = ({ id }) => {
  const [trainerDetail, setTrainerDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/trainers/" + id)
      .then((response) => {
        if (!response.ok) {
          throw Error("Vi kunne desværre ikke indlæse trænerinformationerne");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setTrainerDetail(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [setTrainerDetail, setIsLoading, setError, id]);

  console.log("trainerDetail", trainerDetail);

  return (
    <>
      {isLoading && <p>Indlæser...</p>}
      {trainerDetail && (
        <div className="flex">
          <div>
            <img
              src={trainerDetail && trainerDetail.asset.url}
              alt={trainerDetail && trainerDetail.trainerName}
              className="w-24"
            />
          </div>
          <p>{trainerDetail && trainerDetail.trainerName}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default TrainerItem;
