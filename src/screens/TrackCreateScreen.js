import '../_mockLocation';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import useLocation from '../hooks/useLocation';
import { useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext);
  const [err] = useLocation(isFocused, (location) =>
    addLocation(location, recording)
  );
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Create a Track</Text>
      <Map />
      {!!err && <Text>Please enable location services</Text>}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
