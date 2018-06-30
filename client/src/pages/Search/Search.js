import React, { Component } from 'react';
import Article from '../../components/Article/Article';

class Search extends component {
  render() {
    return (
      <div>
        <Title />
        <div className="container">
          <div className="card">
            <div className="card-header">Featured</div>
            <Article />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
