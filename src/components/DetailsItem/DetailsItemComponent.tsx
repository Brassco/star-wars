import React from 'react';

import DetailsItemView from './DetailsItemView';

//Types
import {DetailsItemProps} from '@src/ts/types';

const DetailsItemComponent = ({label, value}: DetailsItemProps) => {
  return <DetailsItemView label={label} value={value} />;
};

export default DetailsItemComponent;
