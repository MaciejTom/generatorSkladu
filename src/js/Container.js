import React, {useState} from "react";
import Formation442 from "./Formation442"
import Formation433 from "./Formation433"
import Formation352 from "./Formation352"
import Formation4231 from "./Formation4231"
import Formation4141 from "./Formation4141"
import Formation451 from "./Formation451"
import MainSection from "./MainSection"
import shoeImg from './../images/shoe.png'
import Searcher from "./Searcher"

export default function Container() {

const img = <img src={shoeImg} />

const [newFootballer, setNewFootballer] = useState(null)

const [formation, setFormation] = useState(null);
if (formation === "442" ) {
  return <Formation442 setFormation={setFormation} shoe={img}/>
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
    <div className="formations">
    <h2>Formacje</h2>
    <Formation442 setFormation={setFormation} shoe={img}/>
    <Formation352 setFormation={setFormation} shoe={img}/>
    <Formation433 setFormation={setFormation} shoe={img}/>
    <Formation451 setFormation={setFormation} shoe={img}/>
    <Formation4141 setFormation={setFormation} shoe={img}/>
    <Formation4231 setFormation={setFormation} shoe={img}/>
    <Searcher/>


    </div>
  )

}
