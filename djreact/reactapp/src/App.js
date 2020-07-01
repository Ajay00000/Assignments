import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomLayout from './containers/Layout';
import { connect } from 'react-redux';
import * as actions from './stores/actions/auth';
// import ArticlesList from './containers/ArticleListView';
class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div className="App">
      <Router>
      <CustomLayout {...this.props}>
          <BaseRouter/>
      </CustomLayout>

      </Router>
      </div>
    );
  }
}

const mapStateprops = state =>{
  return{
    isAuthenticated:state.token != null

  }
}
const mapDispatchprops = dispatch =>{
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateprops,mapDispatchprops)(App);
