import React from 'react';
import {View} from 'react-native';

//Components
import {DetailsItem} from '@src/components';

//Types
import {DetailsProps} from '@src/ts/types';

const DetailsScreen = ({details}: DetailsProps) => {
  
  return (
    <View>
      <DetailsItem label={'Name'} value={details.name} />
      <DetailsItem label={'Birth Year'} value={details.birth_year} />
      <DetailsItem label={'Gender'} value={details.gender} />
      <DetailsItem label={'Home World'} value={details.homeworld} />
    </View>
  );
};

export default DetailsScreen;
