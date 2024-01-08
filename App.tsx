import { StatusBar } from 'expo-status-bar';
// navigation
import { Navigation } from './src/navigation/Navigation';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
