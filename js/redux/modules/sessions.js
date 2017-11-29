import { formatSessionData } from '../../lib/dataFormatHelpers';
import { queryFaves } from '../../config/models.js';

const firebaseURL = 'https://r10app-95fea.firebaseio.com/sessions.json';

const GET_SESSIONS_LOADING = 'GET_SESSIONS_LOADING';
const GET_SESSIONS_ERROR = 'GET_SESSIONS_ERROR';
const GET_SESSIONS = 'GET_SESSIONS';

// dispatch actions

const getSessionsLoading = () => {
  return {
    type: GET_SESSIONS_LOADING
  };
};

const getSessionsError = error => {
  return {
    type: GET_SESSIONS_ERROR,
    payload: error
  };
};

const getSessions = sessions => {
  return {
    type: GET_SESSIONS,
    payload: sessions
  };
};

// helper functions

export const fetchSessions = () => dispatch => {
  dispatch(getSessionsLoading());
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
      // return dispatch(getSessions(sessions));
      return dispatch(getSessions(newSessions));
    })
    .catch(error => {
      //console.log(error);
      return dispatch(getSessionsError(error));
    });
};

// reducer

export default function reducer(
  state = { isLoading: false, sessionData: [] },
  action
) {
  switch (action.type) {
    case GET_SESSIONS_LOADING: {
      return { ...state, isLoading: true, error: '' };
    }
    case GET_SESSIONS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case GET_SESSIONS: {
      return {
        ...state,
        isLoading: false,
        error: '',
        sessionData: formatSessionData(action.payload)
      };
    }
    default: {
      return state;
    }
  }
}
