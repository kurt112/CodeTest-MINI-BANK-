import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/hoc/content/content';
import Welcome from './components/UI/login/Welcome';
import SideBar from './components/UI/sidebar/Sidebar';

const App = (props) => {
 
  const Output = props.user === null ?
    (<Welcome />) :
    (
      <Fragment>
        { props.hamburgerState === false ? <SideBar user={props.user} /> : null}
        < Content user={props.user}/>
      </Fragment>
    )

  return (
    <div className="App">
      <BrowserRouter>
        {Output}
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    hamburgerState: state.ui.sideBarShow,
    user: state.userLogin.user
  }
}
export default connect(mapStateToProps)(App);
