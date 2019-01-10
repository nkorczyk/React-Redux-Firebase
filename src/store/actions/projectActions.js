export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore(); // reference to firestore db

    // reference to projects collection
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({
        type: 'CREATE_PROJECT',
        project
      });
    }).catch((error) => {
      dispatch({
        type: 'CREATE_PROJECT_ERROR',
        error
      })
    })
  }
};
