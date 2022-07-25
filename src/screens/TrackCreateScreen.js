import '../_mockLocation';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create a Track</Text>
      <Map />
      {!!err && <Text>Please enable location services</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
