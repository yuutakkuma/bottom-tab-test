import { StatusBar } from 'expo-status-bar';
import { RecoilRoot } from 'recoil';
// navigation
import { Navigation } from './src/navigation/Navigation';

export default function App() {
  return (
    <RecoilRoot>
      <StatusBar style="auto" />
      <Navigation />
    </RecoilRoot>
  );
}
