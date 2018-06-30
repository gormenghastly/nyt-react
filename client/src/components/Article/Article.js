import React from 'react';

const Article = props => (
  <div className="row">
    <div className="col-sm-12">
      <div className="card">
        <div className="card-body">
          <a href={props.link} target="_blank">
            <h3 className="card-title">{props.title}</h3>
          </a>
          <p>{props.date}</p>
          <a href="#" className="btn btn-primary">
            Save Article
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Article;
