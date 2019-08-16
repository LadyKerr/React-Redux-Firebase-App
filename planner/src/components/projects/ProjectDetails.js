import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsem impjg some words here like this stuff</p>
        </div>
        <div className="card-action gray lighten-4 grey-text">
          <div>Posted by Taylor Green</div>
          <div>3rd September, 2pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
