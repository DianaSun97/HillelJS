import React, { Component } from 'react';
import { Child } from './Child';
import { Props } from './Props';
import { Counter } from './Hook';
class App extends Component {
  render() {
    return (
        <div>
            <Props greetingText="Hello from Props!" />
            <Child>Hello from Child!</Child>
            <Counter></Counter>
        </div>
    );
  }
}

export default App;
