export const FETCH_DOG = 'FETCH_DOG';
export const fetchDog = () => dispatch => {
  console.log('fetching dogs');
  fetch()
    .then(res => res.json())
    .then(dogs =>
      dispatch({
        type: FETCH_DOG,
        payload: dogs,
      })
    );
};

export const FETCH_CAT = 'FETCH_CAT';
export const fetchCat = () => dispatch => {
  console.log('fetching cats');
  fetch()
    .then(res => res.json())
    .then(cats =>
      dispatch({
        type: FETCH_CAT,
        payload: cats,
      })
    );
};
