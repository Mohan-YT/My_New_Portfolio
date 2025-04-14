import { ThemeProvider } from "styled-components"
import GlobalStyle from "./GlobalStyle"
import { LightTheme } from "./components/Themes"
import { Route, Routes, useLocation } from "react-router-dom";

//components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation()

  return (
    <>
      <GlobalStyle />


      <ThemeProvider theme={LightTheme}>

        {/* for framer motion animation on page change */}
          <AnimatePresence mode="wait">

                <Routes location={location} key={location.path}>
                      <Route path="/" element={<Main />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/work" element={<WorkPage />} />
                      <Route path="/skills" element={<MySkillsPage />} />
                </Routes>

          </AnimatePresence>

      </ThemeProvider>

      
      
    </>
  ) 
}

export default App

