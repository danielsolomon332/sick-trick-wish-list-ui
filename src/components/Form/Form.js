import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitTrick = event => {
    event.preventDefault()

    const newTrick = {
      id: Date.now(),
      ...this.state
    }
    this.props.addTrick(newTrick)

    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    })
  }

  render() {
    return (
      <form>Add a trick!
        <input
          type='text'
          placeholder='Trick Name'
          name='trick name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <select>Stance:
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>

        <select>Obstacle:
          <option value="flatground">flatground</option>
          <option value="ledge">ledge</option>
          <option value="rail">rail</option>
          <option value="stairs">stairs</option>
          <option value="pool">pool</option>
        </select>

        <button onClick={event =>
        this.submitTrick(event)}>Submit</button>
      </form>
    )
  }
}

export default Form;
