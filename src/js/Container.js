import React, {useState} from "react";
import Formation442 from "./Formation442"
import Formation433 from "./Formation433"
import Formation352 from "./Formation352"
import Formation4231 from "./Formation4231"
import Formation4141 from "./Formation4141"
import Formation451 from "./Formation451"
import MainSection from "./MainSection"
import shoeImg from './../images/shoe.png'
import SoccerWiki from "../convertjson.json"



export default function Container() {

const [footballer, setFootballer] = useState(SoccerWiki.PackData.PlayerData.P);
const [value, setValue] = useState('')
const arr = value.length > 3 ? footballer.filter(el => el._s.includes(value)) : [];
const [formation, setFormation] = useState(null);
const img = <img src={shoeImg} />

  const [position, setPosition] = useState("1")
  const [soccerMan, setSoccerMan] = useState('')
  const [team, setTeam] = useState([]);
  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };



  const handleSubmit = (e, footballer) => {
    e.preventDefault();
    const copyTeam = [...team];
    copyTeam[position] = footballer;
    setTeam(copyTeam);

  }


if (formation === "442" ) {
  return <>
  <Formation442 setFormation={setFormation} shoe={img} team={team}/>
  <ul>
    {team.map((p,index) => p ? <li>{index}: {p._s}</li> : null)}
  </ul>
    <div>

    <input value={value} onChange={e => setValue(e.target.value)}/>
    {
        arr.map(footballer => <div className="card"><img width="100px" heigth="150px" src={footballer._i}/><div className="name">{footballer._f} {footballer._s}</div>
      <div>
        <form onSubmit={e => handleSubmit(e, footballer)}>
      <select value={position} onChange={handlePositionChange}>

        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
      </select>
      <input type="submit" value="Dodaj"/>
    </form>
  </div>

  </div>
      )}
    </div>
    </>
}
else if (formation === "352" ) {
  return <Formation352 setFormation={setFormation} shoe={img}/>
}
else if (formation === "433" ) {
  return <Formation433 setFormation={setFormation} shoe={img}/>
}
else if (formation === "451" ) {
  return <Formation451 setFormation={setFormation} shoe={img}/>
}
else if (formation === "4141" ) {
  return <Formation4141 setFormation={setFormation} shoe={img}/>
}
else if (formation === "4231" ) {
  return <Formation4231 setFormation={setFormation} shoe={img}/>
}

  return (
    <>
    <h1>Wybierz foramcje</h1>
    <div className="formations">

    <Formation442 setFormation={setFormation} shoe={img}/>
    <Formation352 setFormation={setFormation} shoe={img}/>
    <Formation433 setFormation={setFormation} shoe={img}/>
    <Formation451 setFormation={setFormation} shoe={img}/>
    <Formation4141 setFormation={setFormation} shoe={img}/>
    <Formation4231 setFormation={setFormation} shoe={img}/>

    </div>

    </>
  )

}
