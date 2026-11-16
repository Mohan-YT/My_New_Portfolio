import {createGlobalStyle} from 'styled-components'

// Here you can create global style for this whole app
const GlobalStyle = createGlobalStyle`
/* Hide scrollbar globally */
* {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

*::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
}
h1,h2,h3,h4,h5,h6{
    display : inline-block
}
body{
    margin : 0;
    padding : 0;
    overflow-x : hidden;
    font-family : 'Source Sans Pro',sans-serif;
    max-height : 100vh;
}
`
export default GlobalStyle