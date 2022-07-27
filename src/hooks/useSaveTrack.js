import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { useContext } from 'react';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
  } = useContext(LocationContext);

  const saveTrack = () => {
    createTrack(name, locations);
  };

  return [saveTrack];
};