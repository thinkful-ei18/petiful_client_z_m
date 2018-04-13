export const FETCH_DOG = 'FETCH_DOG';
export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchDog = () => dispatch => {
  console.log('fetching dogs');
  return fetch('https://adoptanimal.herokuapp.com/dog')
    .then(res => res.json())
    .then(dog => {
      dispatch({
        type: FETCH_DOG,
        payload: dog.nextDog,
      });
    });
};

export const DELETE_DOG = 'DELETE_DOG';
export const deleteDog = () => dispatch => {
  return fetch('https://adoptanimal.herokuapp.com/dog', {
    method: 'DELETE',
  }).then(() => dispatch({ type: DELETE_DOG }));
};
