import React from 'react';

const SavedArt = props => (
  <div className="row">
    <div className="col-sm-12">
      <div className="card">
        <div className="card-body">
          <a href={props.link} target="_blank">
            <h3 className="card-title">{props.title}</h3>
          </a>
          <a href="#" className="btn btn-primary">
            Remove Article
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default SavedArt;
