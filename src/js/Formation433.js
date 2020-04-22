import React, { useState } from "react";
import shoeImg from './../images/shoe.png'

export default function Formation433({setFormation, shoe}) {
const img = <img src={shoeImg} />
  return (
    <>
    <div className="formation">
      <h1>4-3-3</h1>
      <div className="containerFormation" onClick={() => setFormation('433') }>
  <div className="row">
      <div className="col-4 height">{shoe}</div>
      <div className="col-4 height">{shoe}</div>
      <div className="col-4 height">{shoe}</div>
  </div>
  <div className="row">
      <div className="col-4 height">{shoe}</div>
      <div className="col-4 height">{shoe}</div>
      <div className="col-4 height">{shoe}</div>
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
