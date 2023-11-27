import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';

//Types
import {itemType} from '@src/ts/types';

//Services
import {getPeopleDetails} from '@src/services/api/people';

import DetailsScreenView from './DetailsScreenView';

const DetailsCreenComponent = (): JSX.Element => {
  
  const route = useRoute();

  const [details, setDetails] = useState<null | itemType>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDetails = async () => {
    const {itemUrl} = route.params;
    const response = await getPeopleDetails(itemUrl);

    setDetails(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return loading ? (
    <View>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <DetailsScreenView details={details} />
  );
};

export default DetailsCreenComponent;
