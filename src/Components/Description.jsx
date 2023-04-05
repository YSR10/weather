import React from 'react'
import {FaArrowDown, FaArrowUp, FaWind} from "react-icons/fa"
import {BiHappy} from "react-icons/bi"
import {MdCompress, MdOutlineWaterDrop} from "react-icons/md"
import './Description.css';
import { getFormattedWeatherData } from '../weatherService';
const Description = ({weather, units}) => {
  const tempUnit = units === 'metric' ? 'C' : 'F'
  const windUnit = units === 'metric' ? 'm/s' : 'm/h'
  const cards = [
    {
      id: 1,
      icon: <FaArrowDown/>,
      title: "min",
      data: getFormattedWeatherData.temp_min.toFixed(),
      units: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp/>,
      title: "max",
      data: getFormattedWeatherData.temp_max.toFixed(),
      units: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy/>,
      title: "feels_like",
      data: getFormattedWeatherData.feels_like.toFixed(),
      units: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress/>,
      title: "pressure",
      data: weather.pressure,
      units: "hpa",
    },
    {
      id: 4,
      icon: <MdOutlineWaterDrop/>,
      title: "humidity",
      data: weather.humidity,
      units: "%",
    },
    {
      id: 4,
      icon: <FaWind/>,
      title: "wind speed",
      data: weather.speed.toFixed(),
      units: "windUnit",
    },
  ]
  return (
    <div className="section section__descriptions">
      {cards.map(({id, icon, title, data, unit}) => (
        <div  key={id}  className="card">
        <div className="description__card-icon">
            {icon}
            <small>{title}</small>
        </div>
        <h2>{'${data} ${unit}'}</h2>
    </div>

      ))}
        
    </div>
  )
}

export default Description