import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`



  html,
  body {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap');

    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
