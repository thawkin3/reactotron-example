import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
  .configure({ name: 'Reactotron Demo' })
  .use(reactotronRedux())
  .connect();
