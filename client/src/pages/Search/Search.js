import React, { Component } from 'react';
import Article from '../../components/Article/Article';
import Title from '../../components/Title/Title';

class Search extends Component {
  render() {
    return (
      <div>
        <Title />
        <div className="container">
          <div className="card">
            <div className="card-header">Featured Articles</div>
            <Article />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
