import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Edit from './Pages/Edit';
import Home from './Pages/Home';
import Tasks from './Pages/Tasks';
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Theme";
import { useThemeProvider } from './Context/ThemeChanger';
import Welcome from './Pages/Welcome';


type mythemeProps = {
  theme: typeof darkTheme
}

const GlobalStyles = createGlobalStyle<mythemeProps>`
   html{
      font-size: 14px;
   }
   body{
      background: ${({ theme }) => theme.surface1};
      color: ${(props) => props.theme.text1};
      position: relative;
   }
   p,h1,h2,h3,small{
      line-height: 1.4;
   }
   /*
      ========================================
      Icon
      ========================================
   */
   i.ml-5 {
      margin-left: 5px;
   }
   i.mr-5 {
      margin-right: 5px;
   }
   p.custom-text{
      color: ${(props) => props.theme.text3};
   }
   .radios span, .radios i{

    color: ${(props) => props.theme.text3};
   }
   label.custom-radio{
     cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      grid-template-columns: 5rem .6fr;
      gap: 1rem;
      margin-bottom: 1rem;
      padding: .4rem;
      border-radius: 5px;
      background: ${(props) => props.theme.surface3};
      > input{
        block-size: 1.2rem;
        inline-size: 2rem;
      }
   }
   a{
     color: ${(props) => props.theme.text1};
   }
   .nav-icon{
     font-size: 2rem;
   }
  
`;
const Main = styled.main``;

function App() {
  const { themeIsDark } = useThemeProvider();
  
  return (
    <ThemeProvider  theme={themeIsDark ? darkTheme : lightTheme}>
      <GlobalStyles/>
    <Main className="App">
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/tasks/:id/:name" element={<Tasks/>}/>
        <Route path="/edit/:id/:taskId" element={<Edit/>}/>
      </Routes>
    </Main>
    </ThemeProvider>
  );
}

export default App;
