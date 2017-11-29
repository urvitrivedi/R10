import { NavigationActions } from '@expo/ex-navigation';
import Store from '../redux/store';
import Router from '../navigation/router';
// Redux way of routing. Coz doesn't have access to this.props.navigator
export const goToSession = (currentNavigatorUID, sessionData) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute('session', { sessionData })
    )
  );
};

export const goToSpeaker = speakerData => {
  Store.dispatch(
    NavigationActions.push('root', Router.getRoute('speaker', { speakerData }))
  );
};

export const goBack = currentNavigatorUID => {
  Store.dispatch(NavigationActions.pop(currentNavigatorUID));
};
