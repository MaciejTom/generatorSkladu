import React, { useState } from "react";



export default function Formation352({setFormation, shoe, team}) {

  const myTeam = {...team}
  console.log(myTeam)


  return (
    <>
    <div className="formation">
      <h1>3-5-2</h1>
        <div className="containerFormation" onClick={() => setFormation('352') }>
      <div className="row">
          <div className="col-3 height"></div>
          <div className="col-3 height">{typeof myTeam[1] !== "undefined" ? (<div className="card"><img width="100px" heigth="150px" src={myTeam[1]._i}/><div className="name">{myTeam[1]._f} {myTeam[1]._s}</div></div>) : shoe}</div>
          <div className="col-3 height">{typeof myTeam[2] !== "undefined" ? (<div className="card"><img width="100px" heigth="150px" src={myTeam[2]._i}/><div className="name">{myTeam[2]._f} {myTeam[2]._s}</div></div>) : shoe}</div>
          <div className="col-3 height"></div>
      </div>
      <div className="row">
          <div className="col-3 height">{typeof myTeam[3] !== "undefined" ? (<div className="card"><img width="100px" heigth="150px" src={myTeam[3]._i}/><div className="name">{myTeam[3]._f} {myTeam[3]._s}</div></div>) : shoe}</div>
          <div className="col-2 height">{typeof myTeam[4] !== "undefined" ? (<div className="card"><img width="100px" heigth="150px" src={myTeam[4]._i}/><div className="name">{myTeam[4]._f} {myTeam[4]._s}</div></div>) : shoe}</div>
          <div className="col-2 height">{typeof myTeam[5] !== "undefined" ? (<div className="card"><img width="100px" heigth="150px" src={myTeam[5]._i}/><div className="name">{myTeam[5]._f} {myTeam[5]._s}</div></div>) : shoe}</div>
          <div className="col-2 height">{typeof myTeam[6] !== "undefined" ? (<div className="card"><img width="100px" heigth="150px" src={myTeam[6]._i}/><div className="name">{myTeam[6]._f} {myTeam[6]._s}</div></div>) : shoe}</div>
          <div className="col-3 height">{typeof myTeam[7] !== "undefined" ? (<div className="card"><img width="100px" heigth="150px" src={myTeam[7]._i}/><div className="name">{myTeam[7]._f} {myTeam[7]._s}</div></div>) : shoe}</div>
      </div>
    <div className="row">
          <div className="col-4 height">{typeof myTeam[8] !== "undefined" ? (<div className="card"><img width="100px" heigth="150px" src={myTeam[8]._i}/><div className="name">{myTeam[8]._f} {myTeam[8]._s}</div></div>) : shoe}</div>
          <div className="col-4 height">{typeof myTeam[9] !== "undefined" ? (<div className="card"><img width="100px" heigth="150px" src={myTeam[9]._i}/><div className="name">{myTeam[9]._f} {myTeam[9]._s}</div></div>) : shoe}</div>
          <div className="col-4 height">{typeof myTeam[10] !== "undefined" ? (<div className="card"><img width="100px" heigth="150px" src={myTeam[10]._i}/><div className="name">{myTeam[10]._f} {myTeam[10]._s}</div></div>) : shoe}</div>

      </div>
      <div className="row">
          <div className="col-12 height">{typeof myTeam[11] !== "undefined" ? (<div className="card"><img width="100px" heigth="150px" src={myTeam[11]._i}/><div className="name">{myTeam[11]._f} {myTeam[11]._s}</div></div>) : shoe}</div>
      </div>
  </div>
</div>
    </>
  );
}
