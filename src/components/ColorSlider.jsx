import React, { Component } from 'react'

export class ColorSlider extends Component {
  render() {
    return (
      <>
        <div className="colorSlider">
          <button onClick={() => this.props.randomColor()}>
            <strong>Random Color</strong>
          </button>
          <p>
            <strong>Hue: {this.props.hue}</strong>
          </p>
          <input
            type="range"
            max={360}
            value={this.props.hue}
            onChange={this.props.handleHue}
          />
          <p>
            <strong>Saturation: {this.props.sat}</strong>
          </p>
          <input
            type="range"
            max={100}
            value={this.props.sat}
            onChange={this.props.handleSat}
          />
          <p>
            <strong>Lightness: {this.props.light}</strong>
          </p>
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
