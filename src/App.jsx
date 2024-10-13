//48ed3a26de994e3e9c674817242508

import { format } from "date-fns";
import { useEffect, useState } from "react";

import { HiMiniClock } from "react-icons/hi2";
import { HiCalendarDays } from "react-icons/hi2";
import { HiSun } from "react-icons/hi";
import { BsBrightnessAltHighFill } from "react-icons/bs";
import { BsCloudHaze2Fill } from "react-icons/bs";
import { BsCloudSunFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

function App() {
  const [location, setLocation] = useState([]);
  const [current, setCurrent] = useState([]);
  const [newcurrent, setNewcurrent] = useState([]);
  const [city, setCity] = useState("");
  const [newlocation, setNewlocation] = useState([]);

  useEffect(function () {
    async function getWeather() {
      const res = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=48ed3a26de994e3e9c674817242508&q=hyderabad&aqi=no"
      );
      const data = await res.json();
      console.log(data);
      setLocation(data.location);
      setCurrent(data.current);
    }
    getWeather();
  }, []);

  // useEffect(function () {
  //   async function x() {
  //     const res = await fetch(
  //       "https://api.open-meteo.com/v1/forecast?latitude=17.384&longitude=78.4564&hourly=temperature_2m"
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //     setData(data.longitude);
  //   }
  //   console.log(data);
  //   x();
  // }, []);

  // console.log(data);

  const date = format(new Date(), "MMMM dd yyyy");
  console.log(date);

  // const now = new Date();
  // const hours = now.getHours();
  // const minutes = now.getMinutes();
  // const seconds = now.getSeconds();

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  function handleChange(e) {
    setCity(e.target.value);
  }
  function HandleClick() {
    async function getWeather() {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=48ed3a26de994e3e9c674817242508&q=${city}&aqi=no`
      );
      const data = await res.json();

      setNewlocation(data.location);
      setNewcurrent(data.current);
    }
    getWeather();
  }

  console.log(city);
  return (
    <div className="bg-[url('bg-big2.jpg!d')] h-screen w-screen bg-cover">
      <div className="h-[90%] w-2/3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex shadow-transparent]">
        <main className="h-full w-[60%] flex flex-col rounded-md">
          <div className="text-white flex justify-between p-3">
            <div className="uppercase font-semibold text-[12px] isolate tracking-widest">
              <p className="isolate tracking-widest">{location.country}</p>

              <p className="tracking-widest"> {location.name}</p>
              <p className="tracking-widest">
                Position lattitude : {location.lat}
              </p>
              <p className="tracking-widest">
                position longitude : {location.lon}
              </p>
            </div>

            {/* imagezone */}

            <div className="text-white font-bold tracking-widest uppercase p-3">
              <img
                src="logo.webp"
                alt="logo"
                className="h-[6em] w-[6em] isolate ml-5"
              ></img>
              <h1 className="isolate mt-2">the weather app</h1>
            </div>
            {/* timezone */}
          </div>
          <div className="text-white flex justify-center mt-10 flex-col items-center">
            <div>
              <p className="text-3xl flex">
                <span className="mt-[0.3rem] mr-2 text-green-500">
                  <HiCalendarDays />
                </span>
                {date}
              </p>
              {/* <p>{`TIME ; ${hours} : ${minutes} : ${seconds}`}</p> */}

              <p className="text-3xl flex">
                <span className="mt-[0.3rem] mr-2 text-purple-500 tracking-widest">
                  <HiMiniClock />
                </span>
                {time}
              </p>
            </div>
            <div className="mt-10">
              <p className=" tracking-widest text-2xl flex gap-2">
                <span className="mt-[0.3rem] mr-2 text-orange-500 tracking-widest">
                  <HiSun />
                </span>
                Temp : {current.temp_c}
              </p>
              <p className=" tracking-widest text-2xl flex">
                <span className="mt-[0.3rem] mr-2 text-yellow-500 tracking-widest">
                  <BsBrightnessAltHighFill />
                </span>
                humidity : {current.humidity}
              </p>
              <p className=" tracking-widest text-2xl flex gap-2">
                <span className="mt-[0.3rem] mr-2 text-blue-500 tracking-widest">
                  <BsCloudHaze2Fill />
                </span>
                wind : {current.wind_kph}
              </p>
              <p className=" tracking-widest text-2xl flex gap-2">
                <span className="mt-[0.3rem] mr-2 text-red-300 tracking-widest">
                  <BsCloudSunFill />
                </span>
                heat index :{current.heatindex_c}
              </p>
            </div>
          </div>
        </main>
        {/* next div */}

        <div className="bg-yellow-700 h-full w-[40%] bg-[url('bg-3.jpg')] bg-cover flex justify-center flex-col items-center gap-28">
          <div>
            <icon className="text-8xl text-orange-300 mt-6">
              <BsFillSunFill id="icon" className="slow-spin" />
            </icon>
          </div>

          <div className="">
            <input
              type="text"
              placeholder="enter the city name"
              className="p-1 pl-2 rounded-md bg-black text-white"
              onChange={handleChange}
            />
            <button
              className="py-[0.6rem] px-4 bg-blue-400 rounded-md ml-2 uppercase text-sm hover:bg-blue-800 hover:transition-shadow"
              onClick={HandleClick}
            >
              <BsSearch />
            </button>
            <div className="text-white mt-8">
              <p className=" tracking-widest text-2xl flex gap-2">
                <span className="mt-[0.3rem] mr-2 text-orange-500 tracking-widest">
                  <HiSun />
                </span>
                Temp : {newcurrent.temp_c}
              </p>
              <p className=" tracking-widest text-2xl flex">
                <span className="mt-[0.3rem] mr-2 text-yellow-500 tracking-widest">
                  <BsBrightnessAltHighFill />
                </span>
                humidity : {newcurrent.humidity}
              </p>
              <p className=" tracking-widest text-2xl flex gap-2">
                <span className="mt-[0.3rem] mr-2 text-blue-500 tracking-widest">
                  <BsCloudHaze2Fill />
                </span>
                wind : {newcurrent.wind_kph}
              </p>
              <p className=" tracking-widest text-2xl flex gap-2">
                <span className="mt-[0.3rem] mr-2 text-red-300 tracking-widest">
                  <BsCloudSunFill />
                </span>
                heat index :{newcurrent.heatindex_c}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
