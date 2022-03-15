import { ChakraProvider } from '@chakra-ui/react';
import React, { ChangeEvent, useCallback, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './router/Router';

function App() {

  return (
    <ChakraProvider>
       <Router />
    </ChakraProvider>
  );
}

export default App;
