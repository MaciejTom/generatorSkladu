import React, { useState } from "react";



export default function Formation352({setFormation, shoe}) {



  return (
    <>
    <div className="formation">
      <h1>3-5-2</h1>
        <div className="containerFormation" onClick={() => setFormation('352') }>
      <div className="row">
          <div className="col-3 height"></div>
          <div className="col-3 height">{shoe}</div>
          <div className="col-3 height">{shoe}</div>
          <div className="col-3 height"></div>
      </div>
      <div className="row">
          <div className="col-3 height">{shoe}</div>
          <div className="col-2 height">{shoe}</div>
          <div className="col-2 height">{shoe}</div>
          <div className="col-2 height">{shoe}</div>
          <div className="col-3 height">{shoe}</div>
      </div>
    <div className="row">
          <div className="col-4 height">{shoe}</div>
          <div className="col-4 height">{shoe}</div>
          <div className="col-4 height">{shoe}</div>

      </div>
      <div className="row">
          <div className="col-12 height">{shoe}</div>
      </div>
  </div>
</div>
    </>
  );
}
