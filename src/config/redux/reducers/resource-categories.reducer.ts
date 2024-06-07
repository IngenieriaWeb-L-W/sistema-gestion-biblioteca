import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store.config";
import { Category } from "@/interfaces/resource/Category";

export interface ResourceCategoryFilters {
  search?: string;
}

export interface Pagination {
  page: number;
  limit: number;
}

export interface ResourceCategoriesState {
  records: Category[];
  total: number;
  filters: ResourceCategoryFilters;
  pagination: Pagination;
}

const initialState: ResourceCategoriesState = {
  records: [],
  total: 0,
  filters: {
    // search: "",
    // categoryId: 0,
    // type: ResourceTypes.ALL,
  },
  pagination: {
    page: 1,
    limit: 10,
  },
};

// Freeze the initial state to prevent accidental changes
Object.freeze(initialState);

export const resourcesCategoriesSlice = createSlice({
  name: "resourceCategories",
  initialState,
  reducers: {
    setResourceCategoriesFilters: (
      state,
      action: PayloadAction<ResourceCategoryFilters>
    ) => {
      state.filters = action.payload;
    },
    resetResourceCategoryFilters: (state) => {
      state.filters = initialState.filters;
    },
    setResourceCategoryPagination: (
      state,
      action: PayloadAction<Pagination>
    ) => {
      state.pagination = action.payload;
    },
    resetResourceCategoryPagination: (state) => {
      state.pagination = initialState.pagination;
    },
    setResourceCategories: (
      state,
      action: PayloadAction<{ records: Category[]; total: number }>
    ) => {
      state.records = action.payload.records;
      state.total = action.payload.total;
    },
    addResourceCategory: (state, action: PayloadAction<Category>) => {
      state.records.push(action.payload);
      state.total = state.total + 1;
    },
    updateResourceCategory: (state, action: PayloadAction<Category>) => {
      state.records = state.records.map((category) =>
        category.id === action.payload.id ? action.payload : category
      );
    },
    removeResourceCategory: (state, action: PayloadAction<number>) => {
      state.records = state.records.filter(
        (category) => category.id !== action.payload
      );
      state.total = state.total - 1;
    },
  },
});

export const selectResourceCategories = (state: RootState) =>
  state.resourceCategories;

export const {
  setResourceCategoriesFilters,
  resetResourceCategoryFilters,
  setResourceCategoryPagination,
  resetResourceCategoryPagination,
  setResourceCategories,
  addResourceCategory,
  updateResourceCategory,
  removeResourceCategory,
} = resourcesCategoriesSlice.actions;

export const { reducer: resourceCategoriesReducer } = resourcesCategoriesSlice;
