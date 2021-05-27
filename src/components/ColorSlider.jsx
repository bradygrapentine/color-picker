import React, { Component } from 'react'

export class ColorSlider extends Component {
  render() {
    return (
      <>
        <div className="colorSlider">
          <button onClick={() => this.props.randomColor()}>
            <strong>Random Color</strong>
          </button>
          <p>Hue: {this.props.hue}</p>
          <input
            type="range"
            max={360}
            value={this.props.hue}
            onChange={this.props.handleHue}
          />
          <p>Saturation: {this.props.sat}</p>
          <input
            type="range"
            max={100}
            value={this.props.sat}
            onChange={this.props.handleSat}
          />
          <p>Lightness: {this.props.light}</p>
          <input
            type="range"
            max={100}
            value={this.props.light}
            onChange={this.props.handleLight}
          />
        </div>
      </>
    )
  }
}

export default ColorSlider
