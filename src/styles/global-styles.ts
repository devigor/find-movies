import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000;
  }

`
