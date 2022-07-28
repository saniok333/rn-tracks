// import '../_mockLocation';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import useLocation from '../hooks/useLocation';
import { useCallback, useContext } from 'react';
import { Context as LocationContext } from '../context/LocationContext';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => addLocation(location, recording),
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3 style={styles.title}>
        Create a Track
      </Text>
      <Map />
      {!!err && <Text>Please enable location services</Text>}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const styles = StyleSheet.create({
  title: {
    marginTop: 15,
  },
});

export default withNavigationFocus(TrackCreateScreen);
