import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {IPeople, PeoplesState} from '@src/ts/types';

//Constants
import {ITEMS_PER_PAGE} from '@src/utils/constants';

const initialState: PeoplesState = {
  total: 0,
  totalPages: 0,
  currentPage: 1,
  nextPageUrl: null,
  previousPageUrl: null,
  allPeoples: {},
  maleCounter: 0,
  femaleCounter: 0,
  otherCounter: 0,
  loading: false
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      
      state.currentPage = action.payload;
    },
    setDataByPage: (state, action: PayloadAction<any>) => {
      const {count, next, previous, results} = action.payload;
      if (count != state.totalPages) {
        state.totalPages = Math.ceil(count/ITEMS_PER_PAGE);
      }
      state.nextPageUrl = next;
      state.previousPageUrl = previous;
      state.allPeoples[state.currentPage] = results;
    },
    resetAllCounters: (state, action) => {
      state.maleCounter = 0;
      state.femaleCounter = 0;
      state.otherCounter = 0;
      const keys = Object.keys(state.allPeoples)
      
      keys.forEach( key => {
        const updatedList = state.allPeoples[key].map( item => {
          return {...item, selected: false}
        })
        state.allPeoples[key] = updatedList;
      })
    },
    toggleFavorite: (state, action: PayloadAction<IPeople>) => {
      const people = action.payload;
      
      const updatedList = state.allPeoples[state.currentPage].map(item => {
        if (item.id == people.id) {
          if (people.selected) {
            item.selected = false;
            if (people.gender === 'male') {
              state.maleCounter -= 1;
            } else if (people.gender === 'female') {
              state.femaleCounter -= 1;
            } else {
              state.otherCounter -= 1;
            }
          } else {
            item.selected = true;
            if (people.gender === 'male') {
              state.maleCounter += 1;
            } else if (people.gender === 'female') {
              state.femaleCounter += 1;
            } else {
              state.otherCounter += 1;
            }
          }
        }
        return item;
      });
      state.allPeoples[state.currentPage] = updatedList;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {setCurrentPage, setDataByPage, toggleFavorite, setLoading, resetAllCounters} =
  peopleSlice.actions;

export default peopleSlice.reducer;
