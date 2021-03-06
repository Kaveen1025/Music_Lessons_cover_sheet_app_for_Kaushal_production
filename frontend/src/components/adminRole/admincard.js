import React, { useState, useEffect } from "react";
import MusicCoverPage from "./../customerRole/musiccoverpage";

//Default admin dashboard card
export default function DashBoard(props) {
  return (
    <div>
      <div className="col-md-12">
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            borderColor: props.color,
            border: `solid ${props.color}`,
            padding: "20px 20px 20px 20px",
          }}
        >
          <div className="row">
            <div className="col-8">
              <span style={{ color: props.color }}>{props.num}</span>
              <br />
              <span>{props.value}</span>
            </div>
            
            <div className="col">
              <i
                class={props.icon}
                aria-hidden="true"
                style={{
                  color: props.color,
                  fontSize: "20px",
                  marginTop: "10px",
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}