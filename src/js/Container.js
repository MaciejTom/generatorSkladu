import React, { useState } from "react";
import Formation442 from "./Formation442";
import Formation433 from "./Formation433";
import Formation352 from "./Formation352";
import Formation4231 from "./Formation4231";
import Formation4141 from "./Formation4141";
import Formation451 from "./Formation451";
import MainSection from "./MainSection";
import shoeImg from "./../images/shoe.png";
import glove from "./../images/gloves.png";
import SoccerWiki from "../convertjson.json";
import noPhoto from "./../images/nophoto.png";
import Popup from "./Popup";
import domtoimage from 'dom-to-image';

export default function Container() {

////// VARIABLES OF ICONS

  const img = <img src={shoeImg} />;
  const gloveImg = <img className="gloveImg" src={glove} />;

///////// STATE OF ALL FOOTBALLERS FROM API
  const [footballer, setFootballer] = useState(
    SoccerWiki.PackData.PlayerData.P
  );
/////////////// STATE OF ENTRED FOOTBALLER
  const [value, setValue] = useState("");

////////////// ARRAY OF DISPLAYING FOOTBALLERS FROM SOOCERWIKI
  const arr =
    value.length > 3
      ? footballer.filter(
          el =>
            el._s.toLowerCase().includes(value.toLowerCase()) ||
            el._f.toLowerCase().includes(value.toLowerCase())
        )
      : [];

  const [formation, setFormation] = useState(null);
  const [position, setPosition] = useState("1");
  const [soccerMan, setSoccerMan] = useState("");
  const [team, setTeam] = useState([]);

  ///////////////////////////////////////CHANGING THE FOOTBALLER POSITION U WANT TO ADD
  const handlePositionChange = e => {
    setPosition(e.target.value);
  };

///////////////////////////////////////////////ATTRIBUTING FOOTBALLER TO TEAM OF CURRENT FORMATION
  const handleSubmit = (e, footballer) => {
    e.preventDefault();

    const copyTeam = [...team];
    copyTeam[position] = footballer;
    setTeam(copyTeam);
  };


  ///////////////////////////////////TAKE A SCREENSHOT OF TEAM
  const takeTeam = () => {
    if (click === 0) { togglePopup()}

    const element = document.querySelector(".formation");


    domtoimage.toJpeg(element, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
  };

  ////////////////// POPUP SETTINGS
  const [pop, setPop] = useState({ showPopup: false });
  const [click, setClick] = useState(0);


  function togglePopup() {
    setClick(prev => prev + 1)
    setPop({ showPopup: !pop.showPopup });

  }


  //////////////////////// CHOOSING FORMATION

  if (formation === "442") {
    return (
      <>
        <div className="searcher">
          {pop.showPopup ? <Popup closePopup={togglePopup} /> : null}
          <Formation442
            setFormation={setFormation}
            shoe={img}
            team={team}
            glove={gloveImg}
          />
          <div className="cardWithInput">
            <h2>Nazwisko piłkarza:</h2>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={takeTeam}>Pobierz skład</button>
            {arr.map(footballer => (
              <div className="card">
                <img
                  width="100px"
                  heigth="150px"
                  src={footballer._i !== "" ? footballer._i : noPhoto}
                />
                <div className="name">
                  {footballer._f} {footballer._s}
                </div>
                <div>
                  <form onSubmit={e => handleSubmit(e, footballer)}>
                    <select onChange={handlePositionChange}>
                      <option value="1">LN</option>
                      <option value="2">PN</option>
                      <option value="3">LP</option>
                      <option value="4">ŚP</option>
                      <option value="5">ŚP</option>
                      <option value="6">PP</option>
                      <option value="7">LO</option>
                      <option value="8">ŚO</option>
                      <option value="9">ŚO</option>
                      <option value="10">PO</option>
                      <option value="11">BR</option>
                    </select>
                    <input type="submit" value="Dodaj" />
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else if (formation === "352") {
    return (
      <>
        <div className="searcher">
          {pop.showPopup ? <Popup closePopup={togglePopup} /> : null}
          <Formation352
            setFormation={setFormation}
            shoe={img}
            team={team}
            glove={gloveImg}
          />
          <div className="cardWithInput">
            <h2>Nazwisko piłkarza:</h2>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={takeTeam}>Pobierz skład</button>
            {arr.map(footballer => (
              <div className="card">
                <img
                  width="100px"
                  heigth="150px"
                  src={footballer._i !== "" ? footballer._i : noPhoto}
                />
                <div className="name">
                  {footballer._f} {footballer._s}
                </div>
                <div>
                  <form onSubmit={e => handleSubmit(e, footballer)}>
                    <select onChange={handlePositionChange}>
                      <option value="1">LN</option>
                      <option value="2">PN</option>
                      <option value="3">LP</option>
                      <option value="4">LŚP</option>
                      <option value="5">ŚP</option>
                      <option value="6">PŚP</option>
                      <option value="7">PP</option>
                      <option value="8">LŚO</option>
                      <option value="9">ŚO</option>
                      <option value="10">PŚO</option>
                      <option value="11">BR</option>
                    </select>
                    <input type="submit" value="Dodaj" />
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else if (formation === "433") {
    return (
      <>
        <div className="searcher">
          {pop.showPopup ? <Popup closePopup={togglePopup} /> : null}
          <Formation433
            setFormation={setFormation}
            shoe={img}
            team={team}
            glove={gloveImg}
          />
          <div className="cardWithInput">
            <h2>Nazwisko piłkarza:</h2>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={takeTeam}>Pobierz skład</button>
            {arr.map(footballer => (
              <div className="card">
                <img
                  width="100px"
                  heigth="150px"
                  src={footballer._i !== "" ? footballer._i : noPhoto}
                />
                <div className="name">
                  {footballer._f} {footballer._s}
                </div>
                <div>
                  <form onSubmit={e => handleSubmit(e, footballer)}>
                    <select onChange={handlePositionChange}>
                      <option value="1">LN</option>
                      <option value="2">ŚN</option>
                      <option value="3">PN</option>
                      <option value="4">LŚP</option>
                      <option value="5">ŚP</option>
                      <option value="6">PŚP</option>
                      <option value="7">LO</option>
                      <option value="8">ŚO</option>
                      <option value="9">ŚO</option>
                      <option value="10">PO</option>
                      <option value="11">BR</option>
                    </select>
                    <input type="submit" value="Dodaj" />
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else if (formation === "451") {
    return (
      <>
        <div className="searcher">
          {pop.showPopup ? <Popup closePopup={togglePopup} /> : null}
          <Formation451
            setFormation={setFormation}
            shoe={img}
            team={team}
            glove={gloveImg}
          />
          ;
          <div className="cardWithInput">
            <h2>Nazwisko piłkarza:</h2>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={takeTeam}>Pobierz skład</button>
            {arr.map(footballer => (
              <div className="card">
                <img
                  width="100px"
                  heigth="150px"
                  src={footballer._i !== "" ? footballer._i : noPhoto}
                />
                <div className="name">
                  {footballer._f} {footballer._s}
                </div>
                <div>
                  <form onSubmit={e => handleSubmit(e, footballer)}>
                    <select onChange={handlePositionChange}>
                      <option value="1">ŚN</option>
                      <option value="2">LP</option>
                      <option value="3">LŚP</option>
                      <option value="4">ŚP</option>
                      <option value="5">PŚP</option>
                      <option value="6">PP</option>
                      <option value="7">LO</option>
                      <option value="8">ŚO</option>
                      <option value="9">ŚO</option>
                      <option value="10">PO</option>
                      <option value="11">BR</option>
                    </select>
                    <input type="submit" value="Dodaj" />
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else if (formation === "4141") {
    return (
      <>
        <div className="searcher">
          {pop.showPopup ? <Popup closePopup={togglePopup} /> : null}
          <Formation4141
            setFormation={setFormation}
            shoe={img}
            team={team}
            glove={gloveImg}
          />
          <div className="cardWithInput">
            <h2>Nazwisko piłkarza:</h2>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={takeTeam}>Pobierz skład</button>
            {arr.map(footballer => (
              <div className="card">
                <img
                  width="100px"
                  heigth="150px"
                  src={footballer._i !== "" ? footballer._i : noPhoto}
                />
                <div className="name">
                  {footballer._f} {footballer._s}
                </div>
                <div>
                  <form onSubmit={e => handleSubmit(e, footballer)}>
                    <select onChange={handlePositionChange}>
                      <option value="1">ŚN</option>
                      <option value="2">LP</option>
                      <option value="3">ŚP</option>
                      <option value="4">ŚP</option>
                      <option value="5">PP</option>
                      <option value="6">ŚPD</option>
                      <option value="7">LO</option>
                      <option value="8">ŚO</option>
                      <option value="9">ŚO</option>
                      <option value="10">PO</option>
                      <option value="11">BR</option>
                    </select>
                    <input type="submit" value="Dodaj" />
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else if (formation === "4231") {
    return (
      <>
        <div className="searcher">
          {pop.showPopup ? <Popup closePopup={togglePopup} /> : null}
          <Formation4231
            setFormation={setFormation}
            shoe={img}
            team={team}
            glove={gloveImg}
          />
          <div className="cardWithInput">
            <h2>Nazwisko piłkarza:</h2>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={takeTeam}>Pobierz skład</button>
            {arr.map(footballer => (
              <div className="card">
                <img
                  width="100px"
                  heigth="150px"
                  src={footballer._i !== "" ? footballer._i : noPhoto}
                />
                <div className="name">
                  {footballer._f} {footballer._s}
                </div>
                <div>
                  <form onSubmit={e => handleSubmit(e, footballer)}>
                    <select onChange={handlePositionChange}>
                      <option value="1">ŚN</option>
                      <option value="2">LS</option>
                      <option value="3">ŚPO</option>
                      <option value="4">PS</option>
                      <option value="5">ŚPD</option>
                      <option value="6">ŚPD</option>
                      <option value="7">LO</option>
                      <option value="8">ŚO</option>
                      <option value="9">ŚO</option>
                      <option value="10">PO</option>
                      <option value="11">BR</option>
                    </select>
                    <input type="submit" value="Dodaj" />
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Wybierz foramcje</h1>
      <div className="formations">
        <div className="formation sixth">
          <h1>4-4-2</h1>
          <Formation442
            setFormation={setFormation}
            shoe={img}
            glove={gloveImg}
          />
        </div>
        <div className="formation fifth">
          <h1>3-5-2</h1>
          <Formation352
            setFormation={setFormation}
            shoe={img}
            glove={gloveImg}
          />
        </div>
        <div className="formation fourth">
          <h1>4-3-3</h1>
          <Formation433
            setFormation={setFormation}
            shoe={img}
            glove={gloveImg}
          />
        </div>
        <div className="formation third">
          <h1>4-5-1</h1>
          <Formation451
            setFormation={setFormation}
            shoe={img}
            glove={gloveImg}
          />
        </div>
        <div className="formation second">
          <h1>4-1-4-1</h1>
          <Formation4141
            setFormation={setFormation}
            shoe={img}
            glove={gloveImg}
          />
        </div>
        <div className="formation first">
          <h1>4-2-3-1</h1>
          <Formation4231
            setFormation={setFormation}
            shoe={img}
            glove={gloveImg}
          />
        </div>
      </div>
    </>
  );
}
