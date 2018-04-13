export const FETCH_CAT = 'FETCH_CAT';
export const fetchCat = () => dispatch => {
  console.log('fetching cats');
  return fetch('https://adoptanimal.herokuappnpm.com/cat')
    .then(res => res.json())
    .then(cat =>
      dispatch({
        type: FETCH_CAT,
        payload: cat.nextCat,
      })
    );
};

export const DELETE_CAT = 'DELETE_CAT';
export const deleteCat = () => dispatch => {
  return fetch('https://adoptanimal.herokuapp.com/cat', {
    method: 'DELETE',
  }).then(() => dispatch({ type: DELETE_CAT }));
};
