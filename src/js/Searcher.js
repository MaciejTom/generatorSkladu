import React, {useEffect, useState} from "react";
import SoccerWiki from "../convertjson.json"
//console.log(SoccerWiki)
export default function Searcher() {

  const [footballer, setFootballer] = useState(SoccerWiki.PackData.PlayerData.P);
  const [value, setValue] = useState('')

  console.log(value);

  const arr = value.length > 3 ? footballer.filter(el => el._s.includes(value)) : [];
  return (
    <ul>
      <input value={value} onChange={e => setValue(e.target.value)}/>
      {
        arr.map(footballer => <div className="card"><img width="100px" heigth="150px" src={footballer._i}/><div className="name">{footballer._s}{footballer._f}</div></div>)
      }
      </ul>

  )
}{footballer._i !== "undefined" ? footballer._i : noPhoto}
