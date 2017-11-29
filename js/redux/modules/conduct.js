// middelware

const firebaseURL = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';

// types of actions to modify state

const GET_CONDUCT_LOADING = 'GET_CONDUCT_LOADING';
const GET_CONDUCT_ERROR = 'GET_CONDUCT_ERROR';
const GET_CONDUCT = 'GET_CONDUCT';

// dispatch actions, optionally with payloads

const getConductLoading = () => {
  return {
    type: GET_CONDUCT_LOADING
  };
};

const getConductError = error => {
  return {
    type: GET_CONDUCT_ERROR,
    payload: error
  };
};

const getConduct = codeOfConduct => {
  return {
    type: GET_CONDUCT,
    payload: codeOfConduct
  };
};

export const fetchConduct = () => dispatch => {
  dispatch(getConductLoading());

  return fetch(`${firebaseURL}`)
    .then(response => {
      return response.json();
    })
    .then(codeOfConduct => {
      dispatch(getConduct(codeOfConduct));
    })
    .catch(error => {
      console.log(error);
      return dispatch(getConductError(error));
    });
};

// reducer handles actions and maniplulates state in the store

export default function reducer(
  state = { isLoading: false, conductData: [] },
  action
) {
  switch (action.type) {
    case GET_CONDUCT_LOADING: {
      return { ...state, isLoading: true, error: '' };
    }
    case GET_CONDUCT_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case GET_CONDUCT: {
      return {
        ...state,
        isLoading: false,
        error: '',
        conductData: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
