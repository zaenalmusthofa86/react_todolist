import { css } from "@emotion/core";

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "#000000";
      break;
    case "red":
      textColor = "#ff0000";
      break;
    default:
      textColor = "#000000";
  }

  return css`
    font-size: 1, 8rem;
    font-family: "Bungee", sans-serif;
    color: ${textColor};
    text-align: ${align};

    width: 24%;
    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
  `;
};
