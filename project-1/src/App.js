import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
    state = {
      name: 'Santiago',
      counter: 0
    };
  

  handlePClick = () => {
    this.setState({name: 'Gabriel'})
  }

  handleAClick = () => {
    const {counter } = this.state;
    const nextCounter = counter + 1
    this.setState({counter: nextCounter})
  }

  render() {
    const { name, counter }= this.state;
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handlePClick}>
          {name} {counter}
        </p>
        <p onClick={this.handleAClick}>
          +
        </p>
      </header>
    </div>
  );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World
//         </p>
//       </header>
//     </div>
//   );
// }

export default App;
