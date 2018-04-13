export const FETCH_DOG = 'FETCH_DOG';
export const fetchDog = () => dispatch => {
  console.log('fetching dogs');
  fetch('https://adoptanimal.herokuapp.com/dog')
    .then(res => res.json())
    .then(dog =>
      dispatch({
        type: FETCH_DOG,
        payload: dog.nextDog,
      })
    );
};

export const DELETE_DOG = 'DELETE_DOG';
export const deleteDog = () => dispatch => {
  fetch('https://adoptanimal.herokuapp.com/dog')
    .then(res => res.json())
    .then(dog =>
      dispatch({
        type: DELETE_DOG,
        payload: dog.nextDog,
      })
    );
};
