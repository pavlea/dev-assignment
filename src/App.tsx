import React, { Component } from 'react';
import { observer, Provider } from 'mobx-react';
import EventStore from './store/eventStore';
import Register from './components/Register';
import Info from './components/Info';
import './App.css';

const eventStore = EventStore;

@observer
class App extends Component {
  render() {
    return (
      <Provider eventStore={eventStore}>
        <div className="App">
          <header className="App-header">
            <div className="container">
              <div className="col-12">
                <Info />
              </div>
            </div>
          </header>
          <div className="container">
            <div className="col-12">
              <div className="col-10 formContainer">
                <Register />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
