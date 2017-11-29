import { createRouter } from '@expo/ex-navigation';

import Schedule from '../scenes/Schedule';
import Faves from '../scenes/Faves';
import About from '../scenes/About';
import Layout from './NavigationLayout.js';
import Session from '../scenes/Session';
import Speaker from '../scenes/Speaker';
import Map from '../scenes/Map/';

export default createRouter(() => ({
  layout: () => Layout,
  schedule: () => Schedule,
  faves: () => Faves,
  about: () => About,
  session: () => Session,
  speaker: () => Speaker,
  map: () => Map
}));
