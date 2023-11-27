import React, {JSX} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

//Components
import {ListItem, Paginator} from '@src/components';

//Types
import {PeoplesListProps} from '@src/ts/types';

const EmptyList = (): JSX.Element => {
  return (
    <View style={styles.emptyListContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const MainScreen = ({
  data,
  toggleFavorite,
  currentPage,
  handleNext,
  handlePrev,
  otherCounter,
  maleCounter,
  femaleCounter,
  onResetCounters,
}: PeoplesListProps) => {
  const {
    content,
    headerContainer,
    counters,
    counterContainer,
    counterText,
    counterLabel,
    paginatorWrapper,
    resetButton,
    favoriteCell,
    cell,
    tableHeader,
    tableHeaderText,
    resetButtonWrapper,
    resetButtonText,
  } = styles;

  return (
    <SafeAreaView style={content}>
      <View style={headerContainer}>
        <Text>Star Wars</Text>
      </View>

      <View style={counters}>
        <View style={counterContainer}>
          <Text style={counterText}>{maleCounter}</Text>
          <Text style={counterLabel}>Male</Text>
        </View>
        <View style={counterContainer}>
          <Text style={counterText}>{femaleCounter}</Text>
          <Text style={counterLabel}>Female</Text>
        </View>
        <View style={counterContainer}>
          <Text style={counterText}>{otherCounter}</Text>
          <Text style={counterLabel}>Other</Text>
        </View>
      </View>
      <View style={resetButtonWrapper}>
        <TouchableOpacity onPress={onResetCounters} style={resetButton}>
          <Text style={resetButtonText}> Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={tableHeader}>
        <View style={favoriteCell}></View>
        <View style={cell}>
          <Text style={tableHeaderText}>Name</Text>
        </View>
        <View style={cell}>
          <Text style={tableHeaderText}>Birth Year</Text>
        </View>
        <View style={cell}>
          <Text style={tableHeaderText}>Gender</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          keyExtractor={item => item.name}
          renderItem={({item, index}) => (
            <ListItem toggleFavorite={toggleFavorite} item={item} />
          )}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
      <View style={paginatorWrapper}>
        <Paginator
          currentPage={currentPage}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {},
  counters: {
    // height: 60,
    justifyContent: 'space-between',
    alingItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  counterText: {
    fontSize: 30,
    fontWeight: '600',
  },
  counterLabel: {},
  counterContainer: {
    padding: 10,
    borderRadius: 4,
    borderBottomWidth: 1,
    borderColor: '#8f8f8f',
    flex: 1,
    marginHorizontal: 4,
  },
  flatListWrapper: {
    flex: 1,
  },
  paginatorWrapper: {
    height: 50,
  },
  resetButtonWrapper: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  resetButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#DB3736',
  },
  resetButton: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#DB3736',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 4,
    paddingVertical: 5,
    marginTop: 10,
  },
  tableHeaderText: {
    fontSize: 20,
    fontWeight: '600',
  },
  favoriteCell: {
    width: 40,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 5,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
