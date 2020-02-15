import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Slider } from '@material-ui/core';
import './index.css';

function valuetext(value) {
  return `${value}°C`;
}

function App() {
  const [value, setValue] = React.useState(0);
  let fulltime = 100.0;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xs">
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <div id="current-timestamp">
        {parseFloat(value).toFixed(2)} / {parseFloat(fulltime).toFixed(2)}
      </div>
      <div id="transcribed">
        bla <span className="highlighted">bla</span> bla
      </div>
    </Container>
  );
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById("root"),
);
