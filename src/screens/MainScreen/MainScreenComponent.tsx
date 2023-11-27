import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
//Services
import {getDataByPage} from '@src/services/api/people';
//View
import MainScreenView from './MainScreenView';
//Types
import {PeoplesListResponse} from '@src/ts/types';
//Redux
import {
  setCurrentPage,
  setDataByPage,
  toggleFavorite,
  resetAllCounters,
  setLoading,
} from '@src/store/slices';

//Debuging data
const componentName = 'MainScreenComponent';

const MainScreenComponent = () => {
  const dispatch = useDispatch();
  const {
    currentPage,
    allPeoples,
    previousPageUrl,
    nextPageUrl,
    maleCounter,
    femaleCounter,
    otherCounter,
    totalPages,
    loading,
  } = useSelector(state => state.people);

  const handleNext = () => {
    const nextPage = currentPage + 1;

    if (!loading && totalPages >= nextPage) {
      dispatch(setCurrentPage(nextPage));

      if (!allPeoples[nextPage]) {
        
        dispatch(setLoading(true));
        fetchData(nextPageUrl);
      }
    }
  };

  const handlePrev = () => {
    const nextPage = currentPage - 1;
    if (nextPage > 0) {
      // dispatch(setLoading(true));
      dispatch(setCurrentPage(nextPage));
    }
  };

  const handleToggleFavorite = people => {
    dispatch(toggleFavorite(people));
  };

  const handleResetCounters = () => {
    dispatch(resetAllCounters());
  };

  const fetchData = async (url: null | string) => {
    const response = await getDataByPage(url);
    
    dispatch(setDataByPage(response));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchData(null);
  }, []);

  return (
    <MainScreenView
      toggleFavorite={handleToggleFavorite}
      currentPage={currentPage}
      handleNext={handleNext}
      handlePrev={handlePrev}
      maleCounter={maleCounter}
      femaleCounter={femaleCounter}
      otherCounter={otherCounter}
      onResetCounters={handleResetCounters}
      data={allPeoples[currentPage]}
    />
  );
};

export default MainScreenComponent;
