import React, { Component } from 'react'
import ColorSlider from './components/ColorSlider'

export class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    sat: Math.floor(Math.random() * 100),
    light: Math.floor(Math.random() * 100),
  }
  handleHue = event => {
    this.setState({ hue: event.target.value })
  }
  handleSat = event => {
    this.setState({ sat: event.target.value })
  }
  handleLight = event => {
    this.setState({ light: event.target.value })
  }

  randomColor = () => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      sat: Math.floor(Math.random() * 100),
      light: Math.floor(Math.random() * 100),
    })
  }

  render() {
    return (
      <>
        <h1>Color Picker</h1>
        <div className="colorPickerContainer">
          <div
            className="colorPicker"
            style={{
              backgroundColor: `hsl(${this.state.hue}, ${this.state.sat}%, ${this.state.light}%)`,
            }}
          ></div>
        </div>
        <ColorSlider
          hue={this.state.hue}
          sat={this.state.sat}
          light={this.state.light}
          handleHue={this.handleHue}
          handleSat={this.handleSat}
          handleLight={this.handleLight}
          randomColor={this.randomColor}
        />
      </>
    )
  }
}
{
  /* // <input type="range" value = {this.state.temp} onChange ={(event) => this.setState({temp: event.target.value})}/> */
}
