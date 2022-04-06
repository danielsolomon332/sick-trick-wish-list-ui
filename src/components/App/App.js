import { Component } from 'react';
import Card from '../Card/Card';
import Tricks from '../Tricks/Tricks';
import './App.css';
import fetchDataGet from '../../APIcalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: null
    }
  }

  componentDidMount() {
    fetchDataGet('tricks')
      .then((data) => {
        this.setState({
          tricks: data
        })
      })
  }

    render() {
      return (
        <main className="App">
          <h1>Sick Trick Wish List</h1>
          <Card tricks={this.state.tricks} />
        </main>
      )
    }
}

export default App;
