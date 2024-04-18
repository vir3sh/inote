import React from "react";

const Noteitem = (props) => {
  const { note } = props;

  return (
    <>
      <div>
        <div className="card row my-3 ">
          <div className="card-body  p-1">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
