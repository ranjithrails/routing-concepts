import React from 'react';
import { withRouter } from 'react-router-dom';

const ChildComponent = (props) => {
  console.log(props);

return(
  <div>
    This is child component
  </div>
)
};

export default withRouter(ChildComponent);