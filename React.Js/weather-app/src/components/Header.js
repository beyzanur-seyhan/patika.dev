import { citiesOfTurkey } from "../cities_of_turkey";
import { UseCityOfTurkeyData } from "../context/CityOfTurkeyContext";

function Header({localTime}) {
    const { cityName, setCity } = UseCityOfTurkeyData();

    return (
        <header>
            <select value={cityName} onChange={(e) => setCity(e.target.value)} style={{backgroundColor: (localTime > 5 && localTime < 12) ? "rgba(197, 67, 57, 0.2)" : (localTime > 11 && localTime < 18) ? `#3342C5` : `rgb(17 22 53)` }}>
                {
                    citiesOfTurkey.map(city => (
                        <option value={city.name} key={city.name}>{city.name}</option>
                    ))
                }
            </select>
        </header>
    );
}

export default Header;