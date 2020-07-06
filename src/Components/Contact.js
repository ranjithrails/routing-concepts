import React from 'react';
import { Route, Link } from 'react-router-dom'; 

import ChildComponent from './ChildComponent'

const Contact = (props) => {
  console.log(props);
  const backtoHome = () => {
    props.history.push("/")
  }
  return (
    <div>
      Contact Component
      <button onClick={backtoHome}>Back to home page</button>
      <Link to={props.match.url+'/2'}>Nested Routing</Link> 
      <Route path={props.match.path+'/:id'} component={ChildComponent}/>
    </div>
  )
}
export default Contact;