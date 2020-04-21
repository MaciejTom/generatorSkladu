import React, { useState } from "react";


export default function Formation4141({setFormation, shoe}) {

  return (
    <>
      <h1>formacja 4 1 4 1</h1>
        <div className="containerFormation" onClick={() => setFormation('4141') }>
        <div className="row">
            <div className="col-12 height-low">{shoe}</div>
        </div>
      <div className="row">
          <div className="col-3 height-low">{shoe}</div>
          <div className="col-3 height-low">{shoe}</div>
          <div className="col-3 height-low">{shoe}</div>
          <div className="col-3 height-low">{shoe}</div>
      </div>
      <div className="row">
          <div className="col-12 height-low">{shoe}</div>
      </div>
    <div className="row">
          <div className="col-3 height-low">{shoe}</div>
          <div className="col-3 height-low">{shoe}</div>
          <div className="col-3 height-low">{shoe}</div>
          <div className="col-3 height-low">{shoe}</div>
      </div>
      <div className="row">
          <div className="col-12 height-low">{shoe}</div>
      </div>
  </div>
    </>
  );
}
