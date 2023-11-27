import api from './api';
import uuid from 'react-native-uuid';

//Constants
import {URLS} from '@src/utils/constants';

//Types
import {itemType} from '@src/ts/types';

type GetPeopleResponse = {
  data: itemType[],
};

export const getPeopleDetails = async (url: string) => {
  try {

    const detailsResponse = await api.get<GetPeopleResponse>(url);
    
     if (detailsResponse.data.homeworld && detailsResponse.data.homeworld?.length > 0) {
      const homeWorldResponse = await api.get<GetPeopleResponse>(detailsResponse.data.homeworld);
      
      detailsResponse.data.homeworld = homeWorldResponse.data.name;
    }

    const {data} = detailsResponse;
    return data;
  } catch (error) {
    if (api.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
};

export const getDataByPage = async (pageUrl: null | string) => {
  const url = pageUrl ? pageUrl : URLS.PEOPLE;
  
  try {
    const {data, status} = await api.get<GetPeopleResponse>(url);
    if (data?.results.length > 0) {
      const updatedList = data.results.map( item => {
        return {...item, id: uuid.v4(), selected: false}
      })
      data.results = updatedList;
    }
    return data;
  } catch (error) {
    if (api.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
