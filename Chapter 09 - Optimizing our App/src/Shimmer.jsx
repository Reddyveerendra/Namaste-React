export const Shimmer = () => {
  return (
    <div
      className="restaurants"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {Array(20)
        .fill("")
        .map((i, j) => {
          return (
            <div
              className="cards"
              key={"card" + j}
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
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
