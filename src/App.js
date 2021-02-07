import React from 'react'
import {useSelector } from 'react-redux';
import { YMaps, Map } from 'react-yandex-maps';
import Header from './Weather/Header'
import Main from './Weather/Main';

import { images } from './ImgImports';


function App() {

  const { lat, lng } = useSelector(state => state.position)
  console.log('render App' , lat, lng, images)

  return (
    <div className="App">
      {images.map(img => <img src={img.default} />)}
      <Header />
      {/* <YMaps>
        <Map className="map" defaultState={{ center: [ lat, lng ], zoom: 10 }} />
      </YMaps> */}
      <Main />
    </div>
  );
}

export default App;

