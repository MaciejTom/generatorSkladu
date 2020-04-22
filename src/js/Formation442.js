import React, { useState } from "react";
import shoeImg from './../images/shoe.png'

export default function Formation442({setFormation, shoe, team}) {
console.log({team})


  return (
    <>
    <div className="formation">
      <h1>4-4-2</h1>
        <div className="containerFormation" onClick={() => setFormation('442') }>
      <div className="row">
          <div className="col-3 height"></div>
          <div className="col-3 height">{shoe}{}</div>
          <div className="col-3 height">{shoe}</div>
          <div className="col-3 height"></div>
      </div>
      <div className="row">
          <div className="col-3 height">{shoe}</div>
          <div className="col-3 height">{shoe}</div>
          <div className="col-3 height">{shoe}</div>
          <div className="col-3 height">{shoe}</div>
      </div>
    <div className="row">
          <div className="col-3 height">{shoe}</div>
          <div className="col-3 height">{shoe}</div>
          <div className="col-3 height">{shoe}</div>
          <div className="col-3 height">{shoe}</div>
      </div>
      <div className="row">
          <div className="col-12 height">{shoe}</div>
      </div>
  </div>
  </div>
    </>
  );
}
