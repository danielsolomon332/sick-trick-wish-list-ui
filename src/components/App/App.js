import { Component } from 'react';
import Card from '../Card/Card';
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';
import './App.css';
import fetchDataGet from '../../APIcalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  addTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, ...newTrick] })
  }

  componentDidMount() {
    fetchDataGet('tricks')
      .then((res) => {
        return res.json()
      })
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
          <Form addTrick={this.addTrick} />
          <Tricks tricks={this.state.tricks} />
        </main>
      )
    }
}

export default App;
