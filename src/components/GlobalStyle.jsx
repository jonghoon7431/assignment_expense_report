import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
:root{
  --light-blue: #B4D6F6;
  --blue: #71A1CD;
  --dark-blue: #0E487D;
}
${reset}

*{
  user-select: none;
}
`;

export default GlobalStyle;
