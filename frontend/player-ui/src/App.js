import React, { Component } from 'react';
import ReactHowler from 'react-howler'
import { Container, Slider } from '@material-ui/core';
import raf from 'raf' // requestAnimationFrame polyfill

// buttons
import Button from '@material-ui/core/Button';

// icons
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause'

import './App.css';

function PlayPause(props) {
  const isPlaying = props.isPlaying;
  if (!isPlaying) {
    return <Icon>play_arrow</Icon>;
  }
  return <Icon>pause</Icon>;
}

export default class extends Component {  
  constructor (props) {
    super(props)
    
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
    this.handleToggle = this.handleToggle.bind(this)
  }  
  handleOnLoad () {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    })
  }
  handleToggle () {
    this.setState({
      playing: this.state.playing ? false : true
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
      
      <header className="App-header">
        <Container maxWidth="xs">
          <Slider
            value={(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : '0.00'}
            onChange={this.handleChange}
            aria-labelledby="range-slider"
            getAriaValueText={this.valuetext}
          />
          <div id="current-timestamp">
            {(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : '0:00'} / {(this.state.duration) ? this.state.duration.toFixed(2) : 'NaN'}
          </div>
          <div id="control-buttons">
            <Button variant="contained" color="secondary" onClick={this.handleToggle}><PlayPause isPlaying={this.state.playing}></PlayPause></Button>
          </div>
        </Container>
        <input type="file" name="file" onChange={this.onChangeHandler}/>
        <ReactHowler
          volume='0.1'
          onLoad={this.handleOnLoad}
          onPlay={this.handlePlay}
          src={this.state.audiosrc}
          playing={this.state.playing}
          format='mp3'
          ref={(ref) => (this.player = ref)}
        />
      </header>
    </div>
  )}
};

/**
 * recording:
 * 
 */