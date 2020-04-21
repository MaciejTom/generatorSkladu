import React, { useState } from "react";



export default function Formation451({setFormation, shoe}) {

  return (
    <>
      <h1>formacja 4 5 1</h1>
        <div className="containerFormation" onClick={() => setFormation('451') }>
      <div className="row">
          <div className="col-12 height">{shoe}</div>
      </div>
      <div className="row">
          <div className="col-3 height">{shoe}</div>
          <div className="col-2 height">{shoe}</div>
          <div className="col-2 height">{shoe}</div>
          <div className="col-2 height">{shoe}</div>
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
    </>
  );
}
