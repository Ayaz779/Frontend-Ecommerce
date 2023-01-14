import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 400px) {
      ${props}
    }
  `;
};

export const Tablet = (props) => {
  return css`
    @media only screen and (max-width: 620px) and (min-width: 401px) {
      ${props}
    }
  `;
};

export const Large = (props) => {
  return css`
    @media only screen and (max-width: 1240px) and (min-width:621px) {
      ${props}
    }
  `;
};