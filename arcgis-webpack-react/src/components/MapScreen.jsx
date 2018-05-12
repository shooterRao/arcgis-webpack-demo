import React from 'react';
import Map from "esri/map";

const style = {
  baseMap:{
    width: '100%',
    height: '100%'
  }
}

class MapScreen extends React.Component {
  componentDidMount() {
    const map = new Map('baseMap',
    {
      logo: false,
      basemap: "topo",
      center: [-122.45, 37.75],
      zoom: 13
    }
  )
}

  render() {
    return (
      <div id="baseMap" style={style.baseMap}>

      </div>
    )
  }
}

export default MapScreen;