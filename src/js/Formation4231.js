import React, { useState } from "react";

export default function Formation4231({setFormation, shoe}) {
  return (
    <>
    <div className="formation">
      <h1>4-2-3-1</h1>
        <div className="containerFormation" onClick={() => setFormation('4231') }>
        <div className="row">
            <div className="col-12 height-low">{shoe}</div>
        </div>
      <div className="row">
          <div className="col-4 height-low">{shoe}</div>
          <div className="col-4 height-low">{shoe}</div>
          <div className="col-4 height-low">{shoe}</div>
      </div>
      <div className="row">
          <div className="col-3 height-low"></div>
          <div className="col-3 height-low">{shoe}</div>
          <div className="col-3 height-low">{shoe}</div>
          <div className="col-3 height-low"></div>
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
</div>
    </>
  );
}
