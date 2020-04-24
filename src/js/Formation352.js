import React, { useState } from "react";



export default function Formation352({setFormation, shoe, team}) {

  const myTeam = {...team}
  console.log(myTeam)


  return (
    <>
    <div className="formation">
      
        <div className="containerFormation" onClick={() => setFormation('352') }>
      <div className="row">
          <div className="col-3 height"></div>
          <div className="col-3 height">{typeof myTeam[1] !== "undefined" ? (<div className="card"><span className="span"><img width="100px" heigth="150px" src={myTeam[1]._i}/></span><div className="name"><span>{myTeam[1]._f}</span> <span>{myTeam[1]._s}</span></div></div>) : shoe}</div>
          <div className="col-3 height">{typeof myTeam[2] !== "undefined" ? (<div className="card"><span className="span"><img width="100px" heigth="150px" src={myTeam[2]._i}/></span><div className="name"><span>{myTeam[2]._f}</span> <span>{myTeam[2]._s}</span></div></div>) : shoe}</div>
          <div className="col-3 height"></div>
      </div>
      <div className="row">
          <div className="col-3 height">{typeof myTeam[3] !== "undefined" ? (<div className="card"><span className="span"><img width="100px" heigth="150px" src={myTeam[3]._i}/></span><div className="name"><span>{myTeam[3]._f}</span> <span>{myTeam[3]._s}</span></div></div>) : shoe}</div>
          <div className="col-2 height">{typeof myTeam[4] !== "undefined" ? (<div className="card"><span className="span"><img width="100px" heigth="150px" src={myTeam[4]._i}/></span><div className="name"><span>{myTeam[4]._f}</span> <span>{myTeam[4]._s}</span></div></div>) : shoe}</div>
          <div className="col-2 height">{typeof myTeam[5] !== "undefined" ? (<div className="card"><span className="span"><img width="100px" heigth="150px" src={myTeam[5]._i}/></span><div className="name"><span>{myTeam[5]._f}</span> <span>{myTeam[5]._s}</span></div></div>) : shoe}</div>
          <div className="col-2 height">{typeof myTeam[6] !== "undefined" ? (<div className="card"><span className="span"><img width="100px" heigth="150px" src={myTeam[6]._i}/></span><div className="name"><span>{myTeam[6]._f}</span> <span>{myTeam[6]._s}</span></div></div>) : shoe}</div>
          <div className="col-3 height">{typeof myTeam[7] !== "undefined" ? (<div className="card"><span className="span"><img width="100px" heigth="150px" src={myTeam[7]._i}/></span><div className="name"><span>{myTeam[7]._f}</span> <span>{myTeam[7]._s}</span></div></div>) : shoe}</div>
      </div>
    <div className="row">
          <div className="col-4 height">{typeof myTeam[8] !== "undefined" ? (<div className="card"><span className="span"><img width="100px" heigth="150px" src={myTeam[8]._i}/></span><div className="name"><span>{myTeam[8]._f}</span> <span>{myTeam[8]._s}</span></div></div>) : shoe}</div>
          <div className="col-4 height">{typeof myTeam[9] !== "undefined" ? (<div className="card"><span className="span"><img width="100px" heigth="150px" src={myTeam[9]._i}/></span><div className="name"><span>{myTeam[9]._f}</span> <span>{myTeam[9]._s}</span></div></div>) : shoe}</div>
          <div className="col-4 height">{typeof myTeam[10] !== "undefined" ? (<div className="card"><span className="span"><img width="100px" heigth="150px" src={myTeam[10]._i}/></span><div className="name"><span>{myTeam[10]._f}</span> <span>{myTeam[10]._s}</span></div></div>) : shoe}</div>

      </div>
      <div className="row">
          <div className="col-12 height">{typeof myTeam[11] !== "undefined" ? (<div className="card"><span className="span"><img width="100px" heigth="150px" src={myTeam[11]._i}/></span><div className="name"><span>{myTeam[11]._f}</span> <span>{myTeam[11]._s}</span></div></div>) : shoe}</div>
      </div>
  </div>
</div>
    </>
  );
}
