import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  background: ${(props) => (props.isDark ? "#f8f7f9" : "#222")};
}
`;

export default GlobalStyle;
