import React from "react";
import { useGlobalContext, useGlobalDispatch } from "../context/context";

type Props = {};

export const Test = (props: Props) => {
  const { darkMode } = useGlobalContext();
  const dispatch = useGlobalDispatch();

  const handleDarkMode = () => {
    dispatch({
      type: darkMode ? "LIGHT" : "DARK",
      payload: null,
    });
    if (darkMode) document.body.style.backgroundColor = "#222222";
    else {
      document.body.style.backgroundColor = "white";
    }
  };

  console.log(darkMode);

  return <h1 onClick={handleDarkMode} style={{ color: darkMode ? "red" : "green" }}>Test</h1>;
};
