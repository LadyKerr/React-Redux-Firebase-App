export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore(); //can now access projects collection in db
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Taylor",
        authorLastName: "Green",
        authorId: 255,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
