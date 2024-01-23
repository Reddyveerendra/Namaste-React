import React, { useEffect } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Error, NotFoundPage } from "./Error";
import "../index.css";
import { Shimmer } from "./Shimmer";
import { useState, useEffect } from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./Error";
import Contact from "./Contact";
import SignIn from "./SignIn";
import Cart from "./Cart";
import Restaurant from "./Restaurant";
import { resList } from "./config";
// const variables
// components
export default App = () => {
  const myKey = "65aa2239d86c8817906391uls8bc89d";
  const [place, setPlace] = useState("Mumbai");
  const [lat, setLat] = useState(19.08157715);
  const [lon, setLon] = useState(72.88662753964906);
  const [importedData, setImportedData] = useState([]);
  const [err, setErr] = useState(false);
  const [signTest, setSignTest] = useState(false);
  const [errorLocation, setErrorLocation] = useState("");
  useEffect(() => {
    fetchData();
  }, [lat]);
  async function geoFinder() {
    const resp = await fetch(
      `https://geocode.maps.co/search?q=${place}&api_key=${myKey}`
    );
    const json = await resp.json();
    try {
      setPlace(json[0].display_name);
      setLat(json[0].lat);
      setLon(json[0].lon);
    } catch (e) {
      setErr(true);
    }
  }
  async function fetchData() {
    const response = await fetch(`${resList[0]}${lat}&lng=${lon}${resList[2]}`);
    const json = await response.json();
    try {
      setErr(false);
      const data =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
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
    } catch (e) {
      setErrorLocation(place);
      setErr(true);
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
  const signClick = () => {
    setSignTest((prev) => {
      return !prev;
    });
  };
  const MainMatch = () => {
    return importedData.length == 0 ? (
      <Shimmer />
    ) : err ? (
      <Error errorLocation={errorLocation} />
    ) : (
      <Main data={dataToDisplay} />
    );
  };
  const AppLayout = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
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
            signTest={signTest}
            signClick={signClick}
          />
          <Outlet />
          <Footer />
        </>
      ),
      errorElement: <NotFoundPage />,
      children: [
        { path: "/contact", element: <Contact /> },
        {
          path: "/",
          element: <MainMatch />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurant/:id",
          element: <Restaurant />,
        },
      ],
    },
  ]);

  return <RouterProvider router={AppLayout} />;
};
