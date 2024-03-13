import React, {useState} from 'react'
import Select from 'react-select';
import { WeatherIcon } from '../../assets/WeatherIcons/WeatherIcon';
import './Header.css'


function Header(){

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    })
  };


  return(
    <header className='container'>
      <div>
        Wear
        <h1>WEATHER</h1>
      </div>
      <div>
        <Select
        styles={colourStyles}
        />
      </div>
    </header>
  )
}

export default Header