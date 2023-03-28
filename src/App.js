import React from 'react';
import Card from './objects/Card';
import Header from './components/Header';
import Player from './objects/Player';

function App() {
  return (
    <>
      <Header />
      <Card>
        <Player player="o" />
        <Player player="x" />
        <Player player="o" />
        <Player player="x" />
        <Player player="o" />
        <Player player="x" />
        <Player player="o" />
        <Player player="x" />
        <Player player="o" />
        <Player player="x" />
        <Player player="o" />
        <Player player="x" />
      </Card>
    </>
  );
}

export default App;
