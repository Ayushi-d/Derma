/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';
// import CodePush from 'react-native-code-push';

// const codePushOptions = {
//   checkFrequency: CodePush.CheckFrequency.MANUAL,
// };

// const DermaCupid = CodePush(codePushOptions)(App);

AppRegistry.registerComponent(appName, () => App);
