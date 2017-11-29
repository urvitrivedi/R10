import { NavigationReducer } from '@expo/ex-navigation';
import { combineReducers } from 'redux';
import ConductReducer from '../redux/modules/conduct';
import SessionReducer from '../redux/modules/sessions';
import SpeakerReducer from '../redux/modules/speaker';
import FavesReducer from '../redux/modules/faves';

export default combineReducers({
  navigation: NavigationReducer,
  conduct: ConductReducer,
  sessions: SessionReducer,
  speaker: SpeakerReducer,
  faves: FavesReducer
});
