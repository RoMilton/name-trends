import React from 'react';
import Toolbar from 'client/components/Toolbar';
import { NamesProvider } from 'client/context';

const App = () => {
  return (
    <>
      <header className="py-16 text-center">
        <h1 className="text-4xl font-bold">Name Trends</h1>
        <h2 className="text-lg tracking-wide">
          138 years of US Baby Name trends
        </h2>
      </header>
      <NamesProvider>
        <Toolbar />
      </NamesProvider>
    </>
  );
};

export default App;
