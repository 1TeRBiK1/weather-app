import React from 'react'
import {useSelector } from 'react-redux';
import { YMaps, Map } from 'react-yandex-maps';
import Header from './Weather/Header'
import Main from './Weather/Main';


function App() {

  const { lat, lng } = useSelector(state => state.position)
  console.log('render App' , lat, lng)

  return (
    <div className="App map">
      <Header />
      {/* <YMaps>
        <Map className="map" defaultState={{ center: [ lat, lng ], zoom: 10 }} />
      </YMaps> */}
      <Main />
    </div>
  );
}

export default App;

