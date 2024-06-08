import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ResourceDetail } from "@/interfaces/resource/Detail";
import { Resource } from "@/interfaces/resource/Resource";
import { ResourceTypes } from "@/interfaces/resource/Type";
import { RootState } from "../store.config";

export interface ResourceFilters {
  search?: string;
  categories?: number[];
  type?: ResourceTypes;
}

export interface Pagination {
  page: number;
  size: number;
}

export interface ResourceState {
  records: Resource[];

  total: number;
  filters: ResourceFilters;
  pagination: Pagination;
}

const initialState: ResourceState = {
  records: [],
  total: 0,
  filters: {
    // search: "",
    // categoryId: 0,
    // type: ResourceTypes.ALL,
  },
  pagination: {
    page: 1,
    size: 25,
  },
};

// Freeze the initial state to prevent accidental changes
Object.freeze(initialState);

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    setResourceFilters: (state, action: PayloadAction<ResourceFilters>) => {
      state.filters = action.payload;
    },
    resetResourceFilters: (state) => {
      state.filters = initialState.filters;
    },
    setResourcePagination: (state, action: PayloadAction<Pagination>) => {
      state.pagination = action.payload;
    },
    resetResourcePagination: (state) => {
      state.pagination = initialState.pagination;
    },
    setResources: (
      state,
      action: PayloadAction<{ records: Resource[]; total: number }>
    ) => {
      state.records = action.payload.records;
      state.total = action.payload.total;
    },
    addResource: (state, action: PayloadAction<Resource>) => {
      state.records.push(action.payload);
      state.total = state.total + 1;
    },
    setResourceDetail: (
      state,
      action: PayloadAction<{ id: string; detail: ResourceDetail }>
    ) => {
      state.records = state.records.map((resource) =>
        resource.id === action.payload.id
          ? { ...resource, detail: action.payload.detail }
          : resource
      );
    },
    updateResource: (state, action: PayloadAction<Resource>) => {
      state.records = state.records.map((resource) =>
        resource.id === action.payload.id ? action.payload : resource
      );
    },
    removeResource: (state, action: PayloadAction<string>) => {
      state.records = state.records.filter(
        (resource) => resource.id !== action.payload
      );
      state.total = state.total - 1;
    },
  },
});

export const selectResources = (state: RootState) => state.resources;

export const {
  setResources,
  addResource,
  setResourceDetail,
  updateResource,
  removeResource,
  setResourceFilters,
  resetResourceFilters,
  setResourcePagination,
  resetResourcePagination,
} = resourcesSlice.actions;

export const { reducer: resourcesReducer } = resourcesSlice;
