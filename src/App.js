import React from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <LeftSide />
        </div>
        <div className="col-6">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default App;
