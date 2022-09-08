import {
    BrowserRouter,
    Routes,
    Route,
    Link as RouteLink
  } from "react-router-dom";
  import React from 'react';
  import {
    ChakraProvider,
  } from '@chakra-ui/react';
//import시 첫 글자 : 대문자로
  import Food_intro from '../src/food_intro';
  import Food_list from '../src/food_list';
  import Food_info from '../src/food_info';
  import Food_review from '../src/food_review';

  export default function App() {
    return (
      <ChakraProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Food_intro/>}/>
                <Route path="/food_list" element={<Food_list/>}/>
                <Route path="/food_info" element={<Food_info/>}/>
                <Route path="/food_review" element={<Food_review/>}/>
            </Routes>
        </BrowserRouter>
      </ChakraProvider>
    );
  }

  //export default App; 있으면 오류