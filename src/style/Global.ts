import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GilroyRegular';
    src: url(/fonts/Gilroy-Regular.ttf);
  }
  @font-face {
    font-family: 'GilroyMedium';
    src: url(/fonts/Gilroy-Medium.ttf);
  }
  @font-face {
    font-family: 'GilroySemiBold';
    src: url(/fonts/Gilroy-SemiBold.ttf);
  }
  * {
    font-family: 'GilroyRegular', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
