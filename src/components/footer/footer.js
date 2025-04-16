import { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = ({ className }) => {
   const [city, setCity] = useState('');
   const [temperature, setTemperature] = useState('');
   const [weather, setWeather] = useState('');

   useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=Almaty&units=metric&lang=ru&appid=c4e72a731ae8b3ba788ee047db959e19')
         .then((res) => res.json())
         .then(({ name, main, weather }) => {
            setCity(name);
            setTemperature(Math.round(main.temp));
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