import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import { useContext } from 'react';

const TrackForm = () => {
  const {
    startRecording,
    stopRecording,
    changeName,
    state: { name, recording, locations },
  } = useContext(LocationContext);
  console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter Track Name"
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      <Button
        title={recording ? 'Stop' : 'Start Recording'}
        onPress={() => {
          recording ? stopRecording() : startRecording();
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
