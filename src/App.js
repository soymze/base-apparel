import React from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
          <LeftSide/>
        </div>
        <div className="col-12 col-md-5 p-0">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default App;
