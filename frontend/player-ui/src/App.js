import React, { Component } from 'react';
import ReactHowler from 'react-howler'
import { Container, Slider } from '@material-ui/core';
import raf from 'raf' // requestAnimationFrame polyfill

import './App.css';

export default class extends Component {  
  constructor (props) {
    
    super(props)
    this.fulltime = 100.0
    this.state = {
      value: 0.0,
      playing: false,
      audiosrc: 'nothing'
    }
    
    this.handleOnLoad = this.handleOnLoad.bind(this)
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderSeekPos = this.renderSeekPos.bind(this)
  }  
  handleOnLoad () {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    })
  }
  handlePlay () {
    this.setState({
      playing: true,
      audiosrc: this.state.audiosrc
    })
    this.renderSeekPos()
  }
  handlePause () {
    this.setState({
      playing: false,
      audiosrc: this.state.audiosrc
    })
  }
  renderSeekPos () {
    this.setState({
      seek: this.player.seek()
    })
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos)
    }
  }
  onChangeHandler(event) {
    var blob = window.URL || window.webkitURL;    
    if (!blob) {
      alert('Your browser does not support Blob URLs')
      return;          
    } 
    console.log('change on input#file triggered')
    var file = event.target.files[0],
    fileURL = blob.createObjectURL(file)
    this.setState({
      audiosrc: fileURL,
      playing: false
    })
  }
  
  handleChange(event, newValue) {
    this.setState({
      value: newValue
    })
  }
  valuetext(value) {
    return `${value}°C`
  }
  clearRAF () {
    raf.cancel(this._raf)
  }
  render() { 
    return(
    <div className="App">
      <Container maxWidth="xs">
        test
        <Slider
          value={(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : '0.00'}
          onChange={this.handleChange}
          aria-labelledby="range-slider"
          getAriaValueText={this.valuetext}
        />
        <div id="current-timestamp">
          {(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : '0:00'} / {(this.state.duration) ? this.state.duration.toFixed(2) : 'NaN'}
        </div>
        <div id="transcribed">
          bla <span className="highlighted">bla</span> bla
        </div>
      </Container>
      <header className="App-header">
        <input type="file" name="file" onChange={this.onChangeHandler}/>
        <ReactHowler
          volume='0.1'
          onLoad={this.handleOnLoad}
          src={this.state.audiosrc}
          playing={this.state.playing}
          format='mp3'
          ref={(ref) => (this.player = ref)}
        />
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handlePause}>Pause</button>
      </header>
    </div>
  )}
};

/**
 * recording:
 * 
 */