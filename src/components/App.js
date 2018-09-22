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
import ErrorPage from "./ErrorPage";



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav isAuthenticated={this.props.loading} authedUser={this.props.authedUser} dispatch={this.props.dispatch}/>
              <Switch>
                <Route path="/" exact render={(props)=>(!this.props.loading ? <Questions /> : <Redirect to= {{ pathname: "/login", state: { from: props.location.pathname } }} />)} />
                <Route path="/question/:question_id" render={(props)=>{return(!this.props.loading ? <QuestionPage props={props}/> : <Redirect to= {{ pathname: "/login", state: { from: props.location.pathname } }} />)}} />
                <Route path="/add" render={(props)=>(!this.props.loading ? <NewQuestion /> : <Redirect to='/login' />)} />
                <Route path="/leaderboard" render={(props)=>(!this.props.loading ? <Leaderboard /> : <Redirect to= {{ pathname: "/login", state: { from: props.location.pathname } }} />)} />
                <Route path="/login" exact component={Login} />
                <Route component={ErrorPage}/>
              </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser,users }) {
  return {
    loading: authedUser === null,
    authedUser:authedUser
    ?users[authedUser].name
    :null
  };
}

export default connect(mapStateToProps)(App);
