import React, {useState} from 'react';
//Types
import {PaginatorProps} from '@src/ts/types';

//View
import PaginatorView from './PaginatorView';

const PaginatorComponent = (props: PaginatorProps) => {
  return <PaginatorView {...props} />;
};

export default PaginatorComponent;
