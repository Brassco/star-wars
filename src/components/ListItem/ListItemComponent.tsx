import React from 'react';
import {useNavigation} from '@react-navigation/native';

//Constants
import {SCREENS} from '@src/utils/constants';
//View
import ListItemView from './ListItemView';

//Types
import {itemType} from '@src/ts/types';

//Props
type itemProps = {
  item: itemType;
  toggleFavorite: () => void;
  id: string;
};

const ListItemComponent = ({item, toggleFavorite}: itemProps) => {
  const navigation = useNavigation();

  const handlePress = (itemUrl: string) => {
    navigation.navigate(SCREENS.DETAILS_SCREEN, {itemUrl});
  };

  return (
    <ListItemView
      toggleFavorite={toggleFavorite}
      onPress={() => handlePress(item.url)}
      item={item}
    />
  );
};

export default ListItemComponent;
