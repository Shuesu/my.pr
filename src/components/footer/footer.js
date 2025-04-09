import { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = ({ className }) => {
   const [city, setCity] = useState('');
   const [temperature, setTemperature] = useState('');
   const [weather, setWeather] = useState('');

   useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=Almaty&units=metric&lang=ru&appid=9142d1077a61a9417cfd3f5a9aae4a4a')
         .then((res) => res.json())
         .then(({ name, main, weather }) => {
            setCity(name);
            setTemperature(Math.round(main.temperature));
            setWeather(weather[0].description);
         })
   }, [])

   return (
      <div className={className}>
         <div>
            <div>Блог веб-разработчика</div>
            <div>web@developer.ru</div>
         </div>
         <div>
            <div>
               {city},{' '}
               {new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}</div>
            <div>{temperature} градусов, {weather}</div>
         </div>
      </div>
   )
};

export const Footer = styled(FooterContainer)`
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-weight: 600;
   background-color: #fff;
   width: 1000px;
	height: 120px;
   padding: 20px 40px;
   box-shadow: 0 1px 10px 5px rgba(0, 0, 0, 0.3);
`;