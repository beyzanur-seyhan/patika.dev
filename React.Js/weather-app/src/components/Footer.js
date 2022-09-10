import { UseWeatherData } from "../context/WeatherContext";

function Footer({ localTime }) {
    const { weather } = UseWeatherData();

    return (
        <footer>
            <table>
                <tbody>
                    {
                        weather && weather.data.map((data, index) => (
                            index < 7 && <tr key={index}>
                                <td>
                                    {new Intl.DateTimeFormat('tr-TR', { weekday: 'long' }).format(new Date(data.valid_date.replace("-", "/")))}
                                </td>

                                <td>
                                    <img src={`https://www.weatherbit.io/static/img/icons/${(localTime > 4 && localTime < 18) ? data.weather.icon + ".png" : data.weather.icon.replace("d", "n") + ".png"}`} alt={data.weather.description} />
                                </td>

                                <td>
                                    <div className="max-temp">{data.max_temp.toFixed(0)} <sup>°C</sup></div>
                                    <div className="min-temp">{data.min_temp.toFixed(0)} <sup>°C</sup></div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </footer>
    );
}

export default Footer;