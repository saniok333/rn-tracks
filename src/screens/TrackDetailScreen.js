import { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { state } = useContext(TrackContext);
  const { name } = state.find((track) => track._id === _id);

  return <Text style={{ fontSize: 48 }}>{name}</Text>;
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
