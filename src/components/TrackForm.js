import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import { useContext } from 'react';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    startRecording,
    stopRecording,
    changeName,
    state: { name, recording, locations },
  } = useContext(LocationContext);
  const isPossibleToSaveTrack = !recording && !!locations.length;
  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter Track Name"
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        <Button
          title={recording ? 'Stop' : 'Start Recording'}
          onPress={() => {
            recording ? stopRecording() : startRecording();
          }}
        />
      </Spacer>
      <Spacer>
        {isPossibleToSaveTrack && (
          <Button title="Save Recording" onPress={saveTrack} />
        )}
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
