import React, { Component } from 'react';
import Intro from './ReasonComponents/Intro.bs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro name="React Amsterdam" visitors={""} />
      </div>
    );
  }
}

export default App;
