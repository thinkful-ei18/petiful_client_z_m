export const FETCH_CAT = 'FETCH_CAT';
export const fetchCat = () => dispatch => {
  console.log('fetching cats');
  fetch('https://adoptanimal.herokuapp.com/cat')
    .then(res => res.json())
    .then(cat =>
      dispatch({
        type: FETCH_CAT,
        payload: cat.nextCat,
      })
    );
};
