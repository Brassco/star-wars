import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

//Types
import {itemType} from '@src/ts/types';

//Props
type itemProps = {
  item: itemType;
  onPress: () => void;
  toggleFavorite: () => void;
};

const ListItem = ({item, onPress, toggleFavorite}: itemProps): JSX.Element => {
  const {container, favoriteCell, cell} = styles;
  return (
    <View style={container}>
      <TouchableOpacity
        onPress={() => toggleFavorite(item)}
        style={favoriteCell}>
        {item.selected ? (
          <Icon name="favorite" size={20} color="#FF2A23" />
        ) : (
          <Icon name="favorite-outline" size={20} color="#FF2A23" />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={cell}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
      <View style={cell}>
        <Text>{item.birth_year}</Text>
      </View>
      <View style={cell}>
        <Text>{item.gender}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  favoriteCell: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
  },
});
