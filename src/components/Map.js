import { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapsView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  const { coords: currentCoords } = currentLocation;
  const trackCoords = locations.map((location) => location.coords);

  return (
    <MapsView
      style={styles.map}
      initialRegion={{
        ...currentCoords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentCoords}
        radius={30}
        strokeColor="rgba(158,158,255, 1.0)"
        fillColor="rgba(158,158,255, 0.3)"
      />
      <Polyline coordinates={trackCoords} />
    </MapsView>
  );
};

const styles = StyleSheet.create({ map: { height: 300 } });

export default Map;
