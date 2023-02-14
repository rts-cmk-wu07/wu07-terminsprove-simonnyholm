const ClassItem = (cl, index) => {
  return (
    <div key={index}>
      <div>
        <img src={cl.asset.url} alt={cl.className} />
      </div>
      <p key={index}>{cl.className}</p>
    </div>
  );
};

export default ClassItem;
