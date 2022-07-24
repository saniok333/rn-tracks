import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {
        ...state,
        errorMessage: action.payload,
      };
    case 'clear_error_message':
      return {
        ...state,
        errorMessage: '',
      };
    case 'signin':
      return {
        ...state,
        token: action.payload,
        errorMessage: '',
      };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: 'signin',
        payload: response.data.token,
      });
      navigate('TrackList');
    } catch (error) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
      console.log(error.response.data);
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: 'signin',
        payload: response.data.token,
      });
      navigate('TrackList');
    } catch (error) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in',
      });
      console.log(error.response.data);
    }
  };

const signout = (dispatch) => {
  return () => {
    // somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage },
  { token: null, errorMessage: '' }
);
