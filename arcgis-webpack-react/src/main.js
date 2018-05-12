/* 
  A test
*/
import React from 'react';
import ReactDOM from "react-dom";
import MapScreen from './components/MapScreen.jsx'

const addDOMNode = () => {
  const baseNode = document.createElement("div");
  baseNode.id = "app";
  document.body.appendChild(baseNode);
  return baseNode;
}

ReactDOM.render(
  <div id="mapViewer">
    <MapScreen/>
  </div>,
  addDOMNode()
);