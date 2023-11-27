import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//Types
import {DetailsItemProps} from '@src/ts/types';

const DetailsItemView = ({label, value}: DetailsItemProps) => {
  const {container, labelRow, labelText, valueText} = styles;
  return (
    <View style={container}>
      <View style={labelRow}>
        <Text style={labelText}>{label}</Text>
      </View>
      <View>
        <Text style={valueText}>{value}</Text>
      </View>
    </View>
  );
};

export default DetailsItemView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  labelRow: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  valueRow: {},
  labelText: {
    fontSize: 18,
    fontWeight: '500',
  },
  valueText: {
    fontSize: 15,
    fontWeight: '500',
  },
});
