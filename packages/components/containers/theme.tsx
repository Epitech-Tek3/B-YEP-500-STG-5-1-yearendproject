import { theme } from "components/libraries/theme";
import { css, Global } from "@emotion/core";
import { normalize } from "polished";
import { ThemeProvider } from "@emotion/react";
import React, { Fragment } from "react";

const globalStyles = () => css`
  ${normalize()}
  html {
    background-color: white;
    font-family: "Mukta", sans-serif;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    font-size: 1em;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: inherit;
    font-family: "Mukta", sans-serif;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    /* outline-style: none; */
    outline-color: #bf93ec;
    /* outline: inset thick; */
    /* outline: solid; */
  }

  body {
    font-family: "Mukta", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "calt" 0;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
    line-height: 1.45;
    user-select: text;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  body::-webkit-scrollbar {
    width: 5px;
    background-color: #f0f0f0;
    border-radius: 30px;
    overflow: hidden;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #c5c5c5;
    border-radius: 30px;
    overflow: hidden;
  }

  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  p {
    font-family: "Mukta", sans-serif;
    transition: 0.5s;
  }

  p,
  a,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white;
    word-break: break-word;
  }

  h3 {
    font-family: "Mukta", sans-serif;
  }

  a {
    font-family: "Mukta", sans-serif !important;
    transition: 0.5s !important;
    text-decoration: none !important;
    /* color: inherit !important; */
  }
`;

export const ThemeFunc = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Global styles={globalStyles} />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};
