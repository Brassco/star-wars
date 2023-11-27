import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Types
import {PaginatorProps} from '@src/ts/types';

const PaginatorComponent = ({
  handleNext,
  handlePrev,
  count,
  currentPage,
}: PaginatorProps) => {
  const {constainer, paginationButton, text} = styles;
  return (
    <View style={constainer}>
      <TouchableOpacity onPress={handlePrev} style={paginationButton}>
        <Icon name="navigate-before" size={20} color="#900" />
        <Text>Prev</Text>
      </TouchableOpacity>
      <View>
        <Text style={text}>{currentPage}</Text>
      </View>
      <TouchableOpacity onPress={handleNext} style={paginationButton}>
        <Text>Next</Text>
        <Icon name="navigate-next" size={20} color="#900" />
      </TouchableOpacity>
    </View>
  );
};

export default PaginatorComponent;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
  paginationButton: {
    width: 50,
    flexDirection: 'row',
  },
});
