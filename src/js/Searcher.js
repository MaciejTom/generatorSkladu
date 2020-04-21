import React, {useEffect, useState} from "react";
import SoccerWiki from "../convertjson.json"
//console.log(SoccerWiki)
export default function Searcher() {

  const [footballer, setFootballer] = useState([SoccerWiki.PackData.PlayerData.P]);
  const [value, setValue] = useState('')



  return (
    <ul>
      <input value={value} onChange={e => setValue(e.target.value)}/>
      {
        value.length > 3 && footballer.filter(el => el._s.includes(value)).map(footballer => <li>{footballer._s}></li>)
      }
      </ul>

  )
}
