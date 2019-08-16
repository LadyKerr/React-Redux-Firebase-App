import React from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    const projects = this.props.projects;
    console.log(projects);

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    projects: state.projectReducer.projects
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }]) //when the component is loaded, we want to find the projects collection in db; actively listening
)(Dashboard);
