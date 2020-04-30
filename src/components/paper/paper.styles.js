import { css } from "@emotion/core";

export const paper = ({ theme }) =>
  css`
    width: 600px;
    height: 820px;
    background-color: ${theme.background.color.primary};
    border-radius: 4px;
    padding: 32;
  `;

export const frame = ({ theme }) =>
  css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${theme.color.primary.black};
    height: 100%;
  `;
