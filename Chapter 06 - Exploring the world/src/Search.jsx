export const SearchSuggestion = (props) => {
  return (
    <div className="searchSuggestion dropdown-content">
      {props.searchSuggestion.map((item, index) => {
        return (
          <button key={item} onClick={() => props.selectResult({ item })}>
            {item.length <= 30 ? item : item.slice(0, 27) + "..."}
          </button>
        );
      })}
    </div>
  );
};
