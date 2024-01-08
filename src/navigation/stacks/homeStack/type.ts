import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  HomeScreen: undefined;
  NewsScreen: undefined;
};

export type HomeStackScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'HomeScreen'
>;
