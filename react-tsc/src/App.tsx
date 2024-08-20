import React from 'react';
import './App.css';
import Application from './components/application/application';
import Skills from './components/skills/Skills';
import Counter from './components/counter/counter';


//npm run test -- --coverage .
//npm install


function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Application/>
      <Skills skills={["html","css",]}/> */}
    </div>
  );
}

export default App;
