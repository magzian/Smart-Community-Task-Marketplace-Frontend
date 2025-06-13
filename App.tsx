import AppNavigation from 'navigation/appNavigation';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-view';

import './global.css';
 
export default function App() {
  return (
    <>
      <SafeAreaProvider>
              <AppNavigation />
              <StatusBar style="auto" />
      </SafeAreaProvider>

    </>
  );
}
