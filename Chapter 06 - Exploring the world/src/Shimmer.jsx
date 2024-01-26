export const Shimmer = () => {
  return (
    <div className="restaurants">
      {temp.map((i) => {
        return (
          <div className="cards">
            <div
              className="image-container"
              style={{
                height: "170px",
                width: "250px",
                backgroundColor: "#a3a3a3",
                borderRadius: "16px",
              }}
            ></div>
            <div className="info shimmer-info">
              <h5
                style={{
                  height: "12px",
                  width: "150px",
                  backgroundColor: "#a3a3a3",
                  borderRadius: "6px",
                }}
              ></h5>
              <h6
                style={{
                  height: "12px",
                  width: "103px",
                  backgroundColor: "#a3a3a3",
                  borderRadius: "6px",
                }}
              ></h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};
