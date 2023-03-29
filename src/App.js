import React from 'react';
import './App.css';

import Input from './objects/Input';
import Label from './objects/Label';
import Hashtag from './components/Hashtag';
import Header from './components/Header';

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Input />
    <Label content="Mostrar eventos" />
  </main>
);

export default App;
