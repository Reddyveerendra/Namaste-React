export const Shimmer = () => {
  let temp = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="restaurants">
      {temp.map((i) => {
        return (
          <div className="cards" key={i}>
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
