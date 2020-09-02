import React from 'react';
import Catalog from './Catalog';

const App = () => {
 return (
    // <div className="beer-catalog-page" style={{ textAlign: 'center' }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Catalog />
          </div>
          <div className="col">
            2 of 2
          </div>
        </div>
      </div>
    )
  }

export default App;