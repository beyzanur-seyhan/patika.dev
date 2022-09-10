import { useEffect, useState } from "react";
import { UseWeatherData } from "../context/WeatherContext";

function Main({date, localTime}) {
    const { weather } = UseWeatherData();
    const [ nowWeather, setNowWeather ] = useState();
    let weatherData;
    let getDate = (date.getDate()).toString();
    const weekday = ["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"];
    const month = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];


    if (weather && weather.city_name !== "Unden") {
        let getMonth = (date.getMonth() + 1).toString();

        let currentDate = date.getFullYear() + "-" + (getMonth.length === 1 ? "0" + getMonth : getMonth) + "-" + (getDate.length === 1 ? "0" + getDate : getDate);

        weatherData = weather.data.find(data => data.valid_date === currentDate);
    }

    useEffect(() => {
        setNowWeather(weatherData);
    }, [nowWeather, weatherData])

    return (
        <main>
           {
            nowWeather &&  <>
            
                <div className="weather-info">
                    <div>{nowWeather.weather.description}</div>
                
                    <img src={`https://www.weatherbit.io/static/img/icons/${(localTime > 4 && localTime < 18) ? nowWeather.weather.icon + ".png" : nowWeather.weather.icon.replace("d", "n") + ".png"}`} alt={nowWeather.weather.description} />
                    
                    <div className="degree">{nowWeather.temp.toFixed(0)} <sup>°C</sup></div>
                    
                    <time>{weekday[date.getDay()]}, {month[date.getMonth()]} {getDate.length === 1 ? "0" + getDate : getDate}</time>
                </div>

            </>

           }
        </main>
    )

}

export default Main;