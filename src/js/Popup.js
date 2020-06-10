import React from "react";
import chromeImg from "./../images/chrome.jpg";
import firefoxImg from "./../images/firefox.jpg";
import arrow from "./../images/arrow.png";


export function Popup({ closePopup }) {
  return (
    <div className="popUp">
      <div className="popUp__info">
        <div className="popUp__text">
          <h1>Informacja</h1>
          <p>
            Jeśli chcesz pobrać skład, na którym znajdują się zdjęcia twoich zawodników, zainstaluj wtyczkę <br />
            (ZAJMIE CI TO OKOŁO 15 SEKUND)
          </p>
          <div className="popUp__buttons">
            <div className="popUp__links">
              <a
                target="_blank"
                href="https://addons.mozilla.org/firefox/downloads/file/3522169/allow_cors_access_control_allow_origin-0.1.3-an+fx.xpi?src=dp-btn-primary"
              >
                <img src={firefoxImg} />
                <span>Kliknij aby pobrać!</span>
              </a>
              <a
                target="_blank"
                href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related?hl=pl"
              >
                <img src={chromeImg} />
                <span>Kliknij aby pobrać!</span>
              </a>
            </div>


            <button onClick={closePopup}>Zrozumiałem</button>
          </div>
        </div>
        <div className="popUp__imgs">
          <div className="popUp__img2"></div>
          <div className="popUp__imgArrow">
            <img src={arrow} />
          </div>

          <div className="popUp__img1"></div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
