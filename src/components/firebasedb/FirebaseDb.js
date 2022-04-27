import React from "react";

function firebasedb(props) {
  return (
    <div className="firebase-db">
      <div className="list-items">
        <div className="input-group mb-3">
          <div className="input-group-text">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              value=""
              checked={props.completed}
              aria-label="Checkbox for following text input"
             readOnly
            ></input>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Text input with checkbox"
            value={props.title}
           readOnly
          ></input>
        </div>
      </div>
    </div>
  );
}

export default firebasedb;
