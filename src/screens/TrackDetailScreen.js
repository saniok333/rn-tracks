import { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapsView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { state } = useContext(TrackContext);
  const { name, locations } = state.find((track) => track._id === _id);
  const trackCoords = locations.map((location) => location.coords);
  const { coords: initialCoords } = locations[0];

  return (
    <>
      <Text style={{ fontSize: 48 }}>{name}</Text>
      <MapsView
        style={styles.map}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={trackCoords} />
      </MapsView>
    </>
  );
};

const styles = StyleSheet.create({ map: { height: 300 } });

export default TrackDetailScreen;
