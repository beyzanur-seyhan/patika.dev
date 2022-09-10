import { createContext, useContext, useState } from "react";

const CityOfTurkeyContext = createContext();

export const CityOfTurkeyProvider = ({children}) => {
    const [cityName, setCity] = useState();

    const values = { cityName, setCity };

    return <CityOfTurkeyContext.Provider value={values}>{children}</CityOfTurkeyContext.Provider>
}

export const UseCityOfTurkeyData = () => useContext(CityOfTurkeyContext);