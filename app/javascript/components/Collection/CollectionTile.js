import React from "react";

const CollectionTile = (props) => {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.image} alt="Boa Constrictor" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.name}</p>
              <p className="subtitle is-6">{props.title}</p>
            </div>
          </div>
          <div className="content">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionTile;
