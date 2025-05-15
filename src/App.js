// App.js
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/sections/Hero";
import Skills from "./component/sections/Skills";
import Experience from "./component/sections/Experience";
import Ball from "./component/Ball";
import StartCanvas from "./component/canavs/Stars";

import { darkTheme } from "./utils/Themes";
import ErrorBoundary from "./ErrorBoundary"; // Import ErrorBoundary
import Education from "./component/sections/Education";
import Projects from"./component/sections/Projects";
import Contact from "./component/sections/Contact";
import Footer from "./component/sections/Footer";
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        {/* Wrap everything with ErrorBoundary */}
        <ErrorBoundary>
          <Navbar />
          <Body>
            <StartCanvas />
            <div>
             
              <Wrapper>
                 <Hero />
                <Skills />
                <Ball/>
              </Wrapper>
              
              <Wrapper>
                <Experience/>
                <Projects/>
                 <Education/>
                 <Contact/>
                 
              </Wrapper>
              <Footer/>
            </div>
          </Body>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
