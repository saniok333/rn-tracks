import { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapsView, { Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  const { coords } = currentLocation;

  return (
    <MapsView
      style={styles.map}
      initialRegion={{
        ...coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    ></MapsView>
  );
};

const styles = StyleSheet.create({ map: { height: 300 } });

export default Map;
