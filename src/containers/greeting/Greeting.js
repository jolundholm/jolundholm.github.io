import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import ContactMeButton from "../../components/contactMeButton/ContactMeButton";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={500} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className="greeting-text"
                style={{ color: theme.text, fontSize: theme.titleFontSize }}
              >
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{
                  color: theme.secondaryText,
                  fontSize: theme.subTitleFontSize,
                }}
              >
                {greeting.subTitle}
              </p>
              <ContactMeButton
                className={"contact-me-button-div"}
                text={"Get in touch"}
                theme={theme}
              />

              <SocialMedia theme={theme} />
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
