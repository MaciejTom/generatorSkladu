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

export default function Container() {


  const [footballer, setFootballer] = useState(SoccerWiki.PackData.PlayerData.P);
  const [value, setValue] = useState("");
  const arr =
    value.length > 3 ? footballer.filter(el => el._s.toLowerCase().includes(value.toLowerCase()) || el._f.toLowerCase().includes(value.toLowerCase()) ) : [];
  const [formation, setFormation] = useState(null);
  const img = <img src={shoeImg} />;
  const gloveImg = <img className="gloveImg"src={glove}/>
  console.log(noPhoto)

  const [position, setPosition] = useState("1");
  const [soccerMan, setSoccerMan] = useState("");
  const [team, setTeam] = useState([]);
  const handlePositionChange = e => {
    setPosition(e.target.value);
  };

  const handleSubmit = (e, footballer) => {
    e.preventDefault();
    const copyTeam = [...team];
    copyTeam[position] = footballer;
    setTeam(copyTeam);
  };
  console.log(team[1]);

  if (formation === "442") {
    return (
      <>
      <div className="searcher">
        <Formation442 setFormation={setFormation} shoe={img} team={team} glove={gloveImg} />
        <div className="cardWithInput">
          <h2>Nazwisko piłkarza:</h2>
          <input value={value} onChange={e => setValue(e.target.value)} />
          {arr.map(footballer => (
            <div className="card">
              <img width="100px" heigth="150px" src={footballer._i !== "" ? footballer._i : noPhoto} />
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
    <Formation352 setFormation={setFormation} shoe={img} team={team} glove={gloveImg}/>
      <div className="cardWithInput">
        <h2>Nazwisko piłkarza:</h2>
        <input value={value} onChange={e => setValue(e.target.value)} />
        {arr.map(footballer => (
          <div className="card">
            <img width="100px" heigth="150px" src={footballer._i !== "" ? footballer._i : noPhoto} />
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
      </>)
  } else if (formation === "433") {
    return(
      <>
      <div className="searcher">
      <Formation433 setFormation={setFormation} shoe={img} team={team} glove={gloveImg}/>
        <div className="cardWithInput">
          <h2>Nazwisko piłkarza:</h2>
          <input value={value} onChange={e => setValue(e.target.value)} />
          {arr.map(footballer => (
            <div className="card">
              <img width="100px" heigth="150px" src={footballer._i !== "" ? footballer._i : noPhoto} />
              <div className="name">
                {footballer._f} {footballer._s}
              </div>
              <div>
                <form onSubmit={e => handleSubmit(e, footballer)}>
                  <select  onChange={handlePositionChange}>
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
       <Formation451 setFormation={setFormation} shoe={img} team={team} glove={gloveImg}/>;
         <div className="cardWithInput">
           <h2>Nazwisko piłkarza:</h2>
           <input value={value} onChange={e => setValue(e.target.value)} />
           {arr.map(footballer => (
             <div className="card">
               <img width="100px" heigth="150px" src={footballer._i !== "" ? footballer._i : noPhoto} />
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
      <Formation4141 setFormation={setFormation} shoe={img} team={team} glove={gloveImg}/>
        <div className="cardWithInput">
          <h2>Nazwisko piłkarza:</h2>
          <input value={value} onChange={e => setValue(e.target.value)} />
          {arr.map(footballer => (
            <div className="card">
              <img width="100px" heigth="150px" src={footballer._i !== "" ? footballer._i : noPhoto} />
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
      <Formation4231 setFormation={setFormation} shoe={img} team={team} glove={gloveImg}/>
        <div className="cardWithInput">
          <h2>Nazwisko piłkarza:</h2>
          <input value={value} onChange={e => setValue(e.target.value)} />
          {arr.map(footballer => (
            <div className="card">
              <img width="100px" heigth="150px" src={footballer._i !== "" ? footballer._i : noPhoto} />
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
        <div className="formation">
        <h1>4-4-2</h1>
        <Formation442 setFormation={setFormation} shoe={img} glove={gloveImg}/>
        </div>
        <div className="formation">
        <h1>3-5-2</h1>
        <Formation352 setFormation={setFormation} shoe={img} glove={gloveImg}/>
        </div>
        <div className="formation">
          <h1>4-3-3</h1>
        <Formation433 setFormation={setFormation} shoe={img} glove={gloveImg}/>
        </div>
        <div className="formation">
          <h1>4-5-1</h1>
        <Formation451 setFormation={setFormation} shoe={img} glove={gloveImg}/>
        </div>
        <div className="formation">
          <h1>4-1-4-1</h1>
        <Formation4141 setFormation={setFormation} shoe={img} glove={gloveImg}/>
        </div>
        <div className="formation">
          <h1>4-2-3-1</h1>
        <Formation4231 setFormation={setFormation} shoe={img} glove={gloveImg} />
        </div>
      </div>
    </>
  );
}
