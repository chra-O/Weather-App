import React from "react";
import { Container, Image } from "react-bootstrap";

export default function HeroSection() {
  return (
    <div>
      <div className="herosection">
        <Container className="herocontinor">
          <div className="about">
            HI , This is me Chra <br></br>I make this Website to Weather by
            Useing WeatherApi
          </div>
           <div>
            <Image
              className="wetgerimage"
              src="https://cdn.dribbble.com/users/1353252/screenshots/7430583/media/f456446ffc1c9a1608b94d6d136dbc0d.gif"
              alt="animathion"
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
