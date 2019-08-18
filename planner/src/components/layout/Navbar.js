import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const NavBar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  ); //conditionally render signin/signout view

  return (
    <nav className="nav-wrapper purple lighten-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          TaylorPlan
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebaseReducer.auth,
    profile: state.firebaseReducer.profile
  };
};

export default connect(mapStateToProps)(NavBar);
