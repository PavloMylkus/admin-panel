import { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../theme';


// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ul[class],
  ol[class] {
    padding: 0;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  body {
    /* font-family: Poppins, sans-serif !important; */
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
	background-color: ${COLORS.background};
  }
  ul[class],
  ol[class] {
    list-style: none;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  a{
	text-decoration: none;
	color: inherit;
	display: block;
  }
  img {
    max-width: 100%;
    display: block;
  }
  article > * + * {
    margin-top: 1em;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  `;
