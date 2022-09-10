import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { UseCityOfTurkeyData } from "./CityOfTurkeyContext";

const WeatherDataContext = createContext();

export const WeatherProvider = ({children}) => {
    const { cityName, setCity } = UseCityOfTurkeyData();
    const [ weather, setWeather ] = useState();
    const values = { weather, setWeather };


    useEffect(() => {
        console.log("getLocation Called");
        navigator.geolocation.getCurrentPosition(showPosition);
    }, [])


    const showPosition = (position) => {

        let bdcApi = "https://api.bigdatacloud.net/data/reverse-geocode-client";

        bdcApi = bdcApi + "?latitude=" + position.coords.latitude + "&longitude=" + position.coords.longitude + "&localityLanguage=tr";

        fetch(bdcApi).then(res => res.json()).then(result => setCity(result.principalSubdivision))
    }

     useEffect(() => {
            fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&lang=tr&key=a4c7fcbfaf554781b91cc4a96fc30438`).then(response => response.json()).then(result => {
                try {
                    setWeather(result)
                }
                catch(err) {
                    console.log(err);
                }
            })
    }, [cityName])

    return <WeatherDataContext.Provider value={values}>{children}</WeatherDataContext.Provider>
}

export const UseWeatherData = () => useContext(WeatherDataContext);