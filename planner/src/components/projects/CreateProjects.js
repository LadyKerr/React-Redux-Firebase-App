import React from "react";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends React.Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
    // console.log(this.state);
  };

  render() {
    const { auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/sign" />;
    }

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              className="materialize-textarea"
              id="content"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebaseReducer.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
