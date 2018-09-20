import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import Questions from "./Questions";
import Nav from "./Nav";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Login from "./Login";



class App extends Component {
  state = {
    authorized: false,
    authUser: ""
  };
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  isAuthenticated() {
    return this.props.authedUser === null;
  }

  render() {
    console.log(this.props.loading);
    
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
              <Switch>
                <Route path="/" exact render={()=>(!this.props.loading ? <Questions /> : <Redirect to='/login' />)} />
                <Route path="/question/:id" render={(props)=>(!this.props.loading ? <QuestionPage props={props}/> : <Redirect to='/login' />)} />
                {/* <Route path="/question/:id" component={QuestionPage} /> */}
                <Route path="/new" render={()=>(!this.props.loading ? <NewQuestion /> : <Redirect to='/login' />)} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/login" exact component={Login} />
              </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
