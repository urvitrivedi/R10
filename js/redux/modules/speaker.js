import { formatDataObject } from '../../lib/dataFormatHelpers';

const firebaseUrl = 'https://r10app-95fea.firebaseio.com';

const GET_SPEAKER_LOADING = 'GET_SPEAKER_LOADING';
const GET_SPEAKER_ERROR = 'GET_SPEAKER_ERROR';
const GET_SPEAKER = 'GET_SPEAKER';
const RESET_SPEAKER = 'RESET_SPEAKER';

// dispatch actions

const getSpeakerLoading = () => {
  return {
    type: GET_SPEAKER_LOADING
  };
};

const getSpeakerError = error => {
  return {
    type: GET_SPEAKER_ERROR,
    payload: error
  };
};

const getSpeaker = speaker => {
  return {
    type: GET_SPEAKER,
    payload: speaker
  };
};

const resetSpeaker = () => {
  return {
    type: RESET_SPEAKER
  };
};

// helper functions

export const fetchSpeaker = speakerId => dispatch => {
  if (speakerId.length > 0) {
    dispatch(getSpeakerLoading());

    return fetch(
      `${firebaseUrl}/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`
    )
      .then(response => response.json())
      .then(speaker => {
        return dispatch(getSpeaker(speaker));
      })
      .catch(error => {
        //console.log(error);
        return dispatch(getSpeakerError(error));
      });
  } else {
    dispatch(resetSpeaker());
  }
};

// reducer

export default function reducer(
  state = {
    isLoading: false,
    speakerData: {
      bio: '',
      image: '',
      name: '',
      session: '',
      speakerId: ''
    }
  },
  action
) {
  switch (action.type) {
    case GET_SPEAKER_LOADING: {
      return { ...state, isLoading: true, error: '' };
    }
    case GET_SPEAKER_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case GET_SPEAKER: {
      const formattedSpeaker = formatDataObject(action.payload);
      return {
        ...state,
        isLoading: false,
        error: '',
        speakerData: formattedSpeaker
      };
    }
    case RESET_SPEAKER: {
      return {
        ...state,
        isLoading: false,
        speakerData: {
          bio: '',
          image: '',
          name: '',
          session: '',
          speakerId: ''
        },
        error: ''
      };
    }
    default: {
      return state;
    }
  }
}
