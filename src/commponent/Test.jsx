import React from "react";
import Navbarcomp from "./Navbarcomp";
import { ListGroup, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
const API_KEY = " 8c9d65789dd945a38b9123103212112";
let localCache = {};

export default function Test() {
  const [location, setLocation] = useState("London");
  const [weather, setWeather] = useState({
    city: location,
    country: "United Kingdom",
    localtime: "2021-12-28 10:59",
    icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
    temp: 9.0,
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
                setLocation("Birmingham");
              }}
            >
              Birmingham
            </ListGroup.Item>
            <ListGroup.Item
              onClick={(e) => {
                setLocation("London");
              }}
            >
              London
            </ListGroup.Item>
            <ListGroup.Item
              onClick={(e) => {
                setLocation("Manchester");
              }}
            >
              Manchester
            </ListGroup.Item>
            <ListGroup.Item
              onClick={(e) => {
                setLocation("Glasgow");
              }}
            >
              Glasgow
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="showinformation">
          <div className="h2Content">
            <h4> City : {weather.city} </h4>

            <h4> Temp : {weather.temp}</h4>
            <h4> Country : {weather.country}</h4>
            {/* <h4> Time : {weather.localtime}</h4> */}

            <Image
              src={weather.icon}
              alt="image From Api"
              width={100}
              className="ImageFApi"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
