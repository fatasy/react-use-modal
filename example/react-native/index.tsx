import { registerRootComponent } from 'expo';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ModalsProvider } from 'react-use-modal';
import App from './src/App';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const Main = () => (
  <SafeAreaProvider>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </SafeAreaProvider>
);

registerRootComponent(Main);