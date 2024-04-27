import { css } from "styled-components";

const font = {
  font: () => css``,
};

const theme = {
  font,
};

export default theme;

export type Theme = typeof theme;
