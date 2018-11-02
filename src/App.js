import React, { Component } from 'react';
import './app.css';
import ContainerButtons from './components/ContainerButtons';
import ContainerList from './components/ContainerList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  async request(category) {
    let request = await fetch(`https://www.reddit.com/r/reactjs/${category}.json?sort=new`);
    let response = await request.json();
    console.log(response)
    this.setState({
      data: response
    })

  }
  render() {
    return (
      <div className="app">
        <header className="container-header">
          <h1>REACT<span>JS</span></h1>
        </header>
        <ContainerButtons
          option={(e) => this.request(e)}
        />
        <ContainerList
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
