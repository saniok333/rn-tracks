import { StyleSheet, Text } from 'react-native';
import MapsView from 'react-native-maps';

const Map = () => {
  return (
    <MapsView
      style={styles.map}
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  );
};

const styles = StyleSheet.create({ map: { height: 300 } });

export default Map;
