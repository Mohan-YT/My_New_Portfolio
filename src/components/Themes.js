//Here  we will create dark and light theme variables

export const LightTheme = {
    body:"#FCF6F4",
    text:"#000000",
    fontFamily:"'Source Sans Pro', sans-serif",
    bodyRgba : "252, 246, 244",
    textRgba:"0,0,0",
}

export const DarkTheme = {
    body:"#000000",
    text:"#FCF6F4",
    fontFamily:"'Source Sans Pro', sans-serif",
    textRgba : "252, 246, 244",
    bodyRgba:"0,0,0",
}

//for mediaQuery
export const mediaMax = (val) =>{
    return (style) => `@media (max-width: ${val}em) {${style}}`  //media queries, 1em = 16px by default (browser base font size).
}                                                                 //ex: 40em = 40 × 16px = 640px