import React from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    // destructor projects & auth from props
    const { projects, auth, notifications } = this.props;

    //so if the user isnt logged in, they will be redirected to the signin page!
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    } else {
      return (
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList projects={projects} />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications notifications={notifications} />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    projects: state.firestoreReducer.ordered.projects,
    auth: state.firebaseReducer.auth,
    notifications: state.firestoreReducer.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects" },
    { collection: "notifications", limit: 3 } //we connect to the notifications collection to get the # of notifications to display! amazing! =)
  ]) //when the component is loaded, we want to find the projects collection in db; actively listening
)(Dashboard);
