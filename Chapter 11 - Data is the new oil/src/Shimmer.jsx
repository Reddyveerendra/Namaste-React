export const Shimmer = () => {
  return (
    <div className="restaurants flex flex-wrap justify-center">
      {Array(20)
        .fill("")
        .map((i, j) => {
          return (
            <div className="cards p-10 flex flex-col gap-10" key={j}>
              <div className="image-container h-[170px] w-[250px] bg-gray-400 rounded-16"></div>
              <div className="info shimmer-info">
                <h5 className="h-[12px] w-[150px] bg-gray-400 rounded-6"></h5>
                <h6 className="h-[12px] w-[103px] bg-gray-400 rounded-6"></h6>
              </div>
            </div>
          );
        })}
    </div>
  );
};
