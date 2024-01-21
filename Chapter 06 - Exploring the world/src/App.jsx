import React, { useEffect } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Error } from "./Error";
import "../index.css";
import { useState, useEffect } from "react";
// const variables
// components
export default App = () => {
  const myKey = "65aa2239d86c8817906391uls8bc89d";
  const [place, setPlace] = useState("Mumbai");
  const [lat, setLat] = useState(19.08157715);
  const [lon, setLon] = useState(72.88662753964906);
  const [importedData, setImportedData] = useState([]);
  const [err, setErr] = useState(false);
  useEffect(() => {
    fetchData();
  }, [lat]);
  async function geoFinder() {
    const resp = await fetch(
      `https://geocode.maps.co/search?q=${place}&api_key=${myKey}`
    );
    const json = await resp.json();
    setPlace(json[0].display_name);
    setLat(json[0].lat);
    setLon(json[0].lon);
  }
  async function fetchData() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_W`
    );
    const json = await response.json();
    console.log(json);
    if (json.data.cards.length <= 4) {
      setErr(true);
    } else {
      console.log(json);
      setErr(false);
      const data =
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setImportedData(
        data.map((item) => {
          return item.info;
        })
      );
      setSuggestion(
        data.map((item) => {
          return item.info.name.toLowerCase();
        })
      );
      setDataToDisplay(
        data.map((item) => {
          return item.info;
        })
      );
    }
  }
  // header start
  const [typing, setTyping] = useState(false);
  const [searchText, setSearchText] = React.useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const placeChange = (e) => {
    return setPlace(e.target.value);
  };
  const typing_function = () => {
    setTyping((p) => {
      return !p;
    });
  };
  let [suggestion, setSuggestion] = useState([]);
  //main start

  const [dataToDisplay, setDataToDisplay] = useState(importedData);
  //end main
  // all start
  const searchTextManger = (e) => {
    setSearchText(e.target.value);
    setSearchSuggestion(
      suggestion.filter((item) => {
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
          Suggestion={suggestion}
          searchTextManger={searchTextManger}
          selectResult={selectResult}
          typing_function={typing_function}
          searchSuggestion={searchSuggestion}
          searchText={searchText}
          typing={typing}
          place={place}
          placeChange={placeChange}
          geoFinder={geoFinder}
        />
      }
      {err ? <Error place={place} /> : <Main data={dataToDisplay} />}
      <Footer />
    </>
  );
};
