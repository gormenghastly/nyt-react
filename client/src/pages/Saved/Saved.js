import React, { Component } from 'react';
import SavedArt from '../../components/SavedArt/SavedArt';
import Title from '../../components/Title/Title';

class Saved extends Component {
  render() {
    return (
      <div>
        <Title />
        <div className="container">
          <div className="card">
            <div className="card-header">Saved Articles</div>
            <SavedArt />
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;
