import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

import React from 'react';

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter Track Name" />
      </Spacer>
      <Button title="Start Recording" />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
