import { CityOfTurkeyProvider } from './context/CityOfTurkeyContext';
import { WeatherProvider } from './context/WeatherContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from "./components/Footer";

function App() {
  const date = new Date();
  let localTime = +(date.toLocaleString().split(" ")[1].split(":")[0]);
  const root = document.getElementById("root");

  if (localTime > 5 && localTime < 12) {

    root.className = "morning-background";
  }
  else if (localTime > 11 && localTime < 18) {
    root.className = "day-backgorund";
  }
  else {
    root.className = "night-background";
  }

  return (
    <div className="app">
      <CityOfTurkeyProvider>
        <Header localTime={localTime} />
        <WeatherProvider>
          <Main date={date} localTime={localTime} />
          <Footer localTime={localTime} />
        </WeatherProvider>
      </CityOfTurkeyProvider>
    </div>
  );
}

export default App;
