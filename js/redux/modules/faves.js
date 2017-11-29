import { formatSessionData } from '../../lib/dataFormatHelpers';
import { queryFaves, createFave, deleteFave } from '../../config/models.js';

const firebaseURL = 'https://r10app-95fea.firebaseio.com/sessions.json';

// actions

const GET_FAVES_LOADING = 'GET_FAVES_LOADING';
const GET_FAVES_ERROR = 'GET_FAVES_ERROR';
const GET_FAVES_SESSION = 'GET_FAVES_SESSION';

const CREATE_FAVE_SESSION = 'CREATE_FAVE_SESSION';
const DELETE_FAVE_SESSION = 'DELETE_FAVE_SESSION';
const WRITE_FAVE_ERROR = 'WRITE_FAVE_ERROR';

// dispatch actions

const getFavesLoading = () => {
  return {
    type: GET_FAVES_LOADING
  };
};

const getFavesError = error => {
  return {
    type: GET_FAVES_ERROR,
    payload: error
  };
};

const getFavesSession = sessions => {
  return {
    type: GET_FAVES_SESSION,
    payload: sessions
  };
};

const createFaveSession = () => {
  return {
    type: CREATE_FAVE
  };
};

const deleteFaveSession = () => {
  return {
    type: DELETE_FAVE
  };
};

const writeFaveError = error => {
  return {
    type: WRITE_FAVE_ERROR,
    payload: error
  };
};

// helper functions

export const fetchFaves = () => dispatch => {
  dispatch(getFavesLoading());
  const faveIds = queryFaves();

  return fetch(`${firebaseURL}`)
    .then(response => {
      return response.json();
    })
    .then(sessions => {
      const newSessions = sessions.map(session => {
        const faveToggle = faveIds.includes(session.session_id);
        session.faveToggle = faveToggle;
        return session;
      });

      const filteredSessions = newSessions.filter(session =>
        faveIds.includes(session.session_id)
      );

      return dispatch(getFavesSession(filteredSessions));
    })
    .catch(error => {
      //console.log(error);
      return dispatch(getFavesError(error));
    });
};

// add faved sessions to database

export const addFaveSession = sessionId => dispatch => {
  try {
    createFave(sessionId);
    dispatch(createFaveSession());
  } catch (error) {
    dispatch(writeFaveError(error));
  }
};

// remove faved sessions to database

export const removeFaveSession = sessionId => dispatch => {
  try {
    deleteFave(sessionId);
    dispatch(deleteFaveSession());
  } catch (error) {
    dispatch(writeFaveError(error));
  }
};

// reducer

export default function reducer(
  state = { isLoading: false, sessionData: [], faveIds: [], lastModified: '' },
  action
) {
  switch (action.type) {
    case GET_FAVES_LOADING: {
      return { ...state, isLoading: true, error: '' };
    }
    case GET_FAVES_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case GET_FAVES_SESSION: {
      const sessions = action.payload;
      const sessionData = formatSessionData(sessions);
      const faveIds = sessions.map(session => session.session_id);
      return {
        ...state,
        isLoading: false,
        error: '',
        sessionData,
        faveIds
      };
    }
    case WRITE_FAVE_ERROR: {
      return { ...state, error: action.payload };
    }
    case CREATE_FAVE_SESSION:
    case DELETE_FAVE_SESSION: {
      return { ...state, lastModified: Date.now() };
    }
    default: {
      return state;
    }
  }
}
