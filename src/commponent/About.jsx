import React from "react";
import { useEffect, useState } from "react";
import { ListGroup, Image } from "react-bootstrap";
import Navbarcomp from "./Navbarcomp";
const API_KEY = " 8c9d65789dd945a38b9123103212112"; // put in your weather api key
let localCache = {};
export default function About() {
  const [location, setLocation] = useState("Arbil");
  const [weather, setWeather] = useState({
    city: location,
    country: "Iraq",
    localtime: "2021-12-21 15:14",
    icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
    temp: 10,
  });
  const updateWeather = async () => {
    if (localCache[location]) {
      setWeather(localCache[location]);
      return;
    }
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
    );
    const data = await res.json();
    const newWeather = {
      city: data.location.name,
      country: data.location.country,
      localtime: data.location.localtime,
      icon: data.current.condition.icon,
      temp: data.current.temp_c,
    };
    localCache[location] = newWeather;
    setWeather(newWeather);
  };

  useEffect(() => {
    updateWeather();
  }, [location]);
  return (
    <div>
      <Navbarcomp />
      <div id="showWeather">
        <div className="city">
          <ListGroup variant="flush">
            <ListGroup.Item
              onClick={(e) => {
                setLocation("Sulaymaniyah");
              }}
            >
              Sulimany
            </ListGroup.Item>
            <ListGroup.Item
              onClick={(e) => {
                setLocation("Arbil");
              }}
            >
              Erbil
            </ListGroup.Item>
            <ListGroup.Item
              onClick={(e) => {
                setLocation("Karkuk");
              }}
            >
              Karkuk
            </ListGroup.Item>
            <ListGroup.Item
              onClick={(e) => {
                setLocation("Duhok");
              }}
            >
              Duhok
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="showinformation">
          <div className="h2Content">
            <h4> City : {weather.city} </h4>

            <h4> Temp : {weather.temp}</h4>
            <h4> Country : {weather.country}</h4>
            <Image
              src={weather.icon}
              alt="image From Api"
              width={150}
              className="ImageFApi"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
