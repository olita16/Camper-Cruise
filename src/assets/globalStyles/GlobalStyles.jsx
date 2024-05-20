import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
:root {
  --background: ${({ theme }) => theme.background};
  --text-color: ${({ theme }) => theme.text};
  --light-text: ${({ theme }) => theme.lightText};
  --white: ${({ theme }) => theme.white};
  --black: ${({ theme }) => theme.black};
  --contrast: ${({ theme }) => theme.contrast};
  --grey: ${({ theme }) => theme.grey};
  --accent-red: ${({ theme }) => theme.red};
  --red-hover: ${({ theme }) => theme.redHover};
  --accent-orange: ${({ theme }) => theme.orange};
  --backdrop: ${({ theme }) => theme.backdrop};
  --border-color: ${({ theme }) => theme.borderColor};
  --input-background: ${({ theme }) => theme.inputBackground};
  --placeholder-color: ${({ theme }) => theme.placeholderColor};
  --transparent-bg: ${({ theme }) => theme.transparentBg};
  --hero-gradient: ${({ theme }) => theme.heroGradiend};
  --box-shadow: ${({ theme }) => theme.boxShadow};
  --linear-transition: 150ms linear;
  --cubic-transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

*,
*::before,
*::after  {
  box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 1.5;
    color: var(--text-color);
    background-color: var(--background);
    margin: 0;
    transition: color var(--linear-transition), background-color var(--linear-transition);
}

::-webkit-scrollbar {
  width: 7px;
} 

::-webkit-scrollbar-thumb {
  background-color: var(--accent-red);
  border-radius: 7px;
}

::-webkit-scrollbar-track {
  background-color: var(--grey);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

input, textarea {
  font-family: inherit;

  &:focus {
    outline: none;
  }
}

.themed_toaster {
  border: 1px solid var(--accent-red);
  background-color: var(--background);
  color: var(--text-color);
  text-align: center;
  filter: drop-shadow(1px 1px 7px var(--border-color));
}
`;

export default GlobalStyles