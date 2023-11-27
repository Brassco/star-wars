import axios from 'axios';
import {Alert} from 'react-native';

//Constants
import {URLS} from '@src/utils/constants';

axios.defaults.baseURL = URLS.BASE;

axios.interceptors.request.use(
  async config => {
    
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => response,
  async error => {
    
    if (error.message === 'Network Error') {
      Alert.alert('You are offline', 'Please, check your connection');
    }

    if (error.response && error.response.status === 400) {
      Alert.alert('Something went wrong', 'Please try again later');
    }

    if (error.response && error.response.status === 500) {
      Alert.alert('Something went wrong', 'Please try again later');
    }

    if (error.response && error.response.status === 503) {
      Alert.alert('Server not available');
    }

    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      Alert.alert('Your auth token expired', 'Please, log in again');
      logOut(dispatch);
    }
    return Promise.reject(error);
  },
);

export default axios;
