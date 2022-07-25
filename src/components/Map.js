import { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapsView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  const { coords } = currentLocation;
  const initialLocation = {
    longitude: -122.0312186,
    latitude: 37.33233141,
  };

  return (
    <MapsView
      style={styles.map}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={coords}
        radius={30}
        strokeColor="rgba(158,158,255, 1.0)"
        fillColor="rgba(158,158,255, 0.3)"
      />
    </MapsView>
  );
};

const styles = StyleSheet.create({ map: { height: 300 } });

export default Map;
