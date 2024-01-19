import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import "../index.css";
import { apis } from "./config";
import { useState } from "react";
// const variables
// components
export default App = () => {
  // header start
  const [typing, setTyping] = useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const typing_function = () => {
    setTyping((p) => {
      return !p;
    });
  };
  let Suggestion = apis.map((item) => {
    return item.name.toLowerCase();
  });
  //end header
  //main start
  let importedData = apis.map((data) => {
    return data;
  });

  const [dataToDisplay, setDataToDisplay] = useState([...importedData]);
  //end main
  // all start
  const searchTextManger = (e) => {
    setSearchText(e.target.value);
    setSearchSuggestion(
      Suggestion.filter((item) => {
        return item.includes(e.target.value) ? item : "";
      })
    );
    setDataToDisplay(
      importedData.filter((data) => {
        const name = data.name.toLowerCase();
        return name.includes(e.target.value) ? data : "";
      })
    );
    setTyping(true);
  };
  const selectResult = (e) => {
    setSearchText(e.item);
    setSearchSuggestion([]);
    setTyping(false);
    setDataToDisplay(
      importedData.filter((data) => {
        const name = data.name.toLowerCase();
        return name.includes(e.item) ? data : "";
      })
    );
  };
  return (
    <>
      {
        <Header
          Suggestion={Suggestion}
          searchTextManger={searchTextManger}
          selectResult={selectResult}
          typing_function={typing_function}
          searchSuggestion={searchSuggestion}
          searchText={searchText}
          typing={typing}
        />
      }
      {<Main data={dataToDisplay} />}
      <Footer />
    </>
  );
};
