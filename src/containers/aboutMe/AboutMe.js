import React from "react";
import "./AboutMe.css";
import { Fade } from "react-reveal";

export default function AboutMe(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={500} distance="40px">
      <div className="aboutme-main" id="aboutme">
        <div className="aboutme-main">
          {/* <p
            className="aboutme-description"
            style={{ color: theme.text, fontSize: theme.descriptionFontSize }}
          >
            I'm a full-stack developer based outside of Stockholm, Sweden 🇸🇪
          </p> */}
          {/* <div
            style={{
              fontSize: "1.5rem",
            }}
          >
            ⚕️ Cloud and automation work for
            <a
              style={{
                color: "#ffffff",
                fontSize: "2rem",
                border: "1px solid white",
                textDecoration: "none",
                backgroundColor: "#002845",
                borderRadius: "1em",
                padding: "0rem 1rem 0rem 1rem",
                margin: "1rem 0.5rem 1rem 0.5rem",
              }}
              href="https://kry.se"
            >
              Kry
            </a>
            (2022-Current)
          </div>
          <div
            style={{
              fontSize: "1.5rem",
            }}
          >
            🚚 Last-mile delivery solutions for
            <a
              style={{
                color: "#ffffff",
                fontSize: "2rem",
                textDecoration: "none",
                backgroundColor: "#41CDA5",
                borderRadius: "1em",
                padding: "0rem 1rem 0rem 1rem",
                margin: "1rem 0.5rem 1rem 0.5rem",
              }}
              href="https://budbee.com"
            >
              Budbee
            </a>
            (2019-2022)
          </div>
          <div
            style={{
              fontSize: "1.5rem",
            }}
          >
            💵 Point-of-sales system for
            <a
              style={{
                color: "#000000",
                fontSize: "2rem",
                textDecoration: "none",
                backgroundColor: "#71E6AF",
                borderRadius: "1em",
                padding: "0rem 1rem 0rem 1rem",
                margin: "1rem 0.5rem 1rem 0.5rem",
              }}
              href="https://yabie.com"
            >
              Yabie
            </a>
            (2016-2019)
          </div> */}
        </div>
      </div>
    </Fade>
  );
}
