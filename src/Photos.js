import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photos && props.photos.photos.length > 0) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    key={index}
                    alt={photo.photographer}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
