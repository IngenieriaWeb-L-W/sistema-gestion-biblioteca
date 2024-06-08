import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  InstanceLang,
  InstanceStatus,
  ResourceInstance,
} from "@/interfaces/resource/Instance";

import { RootState } from "../store.config";
import { ResourceFilters } from "./resources.reducer";

export interface ResourceInstancesResponse {
  records: ResourceInstance[];
  total: number;
}

export interface ResourceInstancesFilter {
  search?: string;
  lang?: InstanceLang;
  status?: InstanceStatus;
}

export interface Pagination {
  page: number;
  size: number;
}

export interface ResourceInstancesState {
  records: ResourceInstance[];
  total: number;
  filters: ResourceInstancesFilter;
  pagination: Pagination;
}

const initialState: ResourceInstancesState = {
  records: [],
  total: 0,
  filters: {
    // lang: InstanceLang.ALL,
    // search: "",
    // status: InstanceStatus.ALL,
  },
  pagination: {
    page: 1,
    size: 25,
  },
};

// Freeze the initial state to prevent accidental changes
Object.freeze(initialState);

export const resourceInstancesSlice = createSlice({
  name: "resourceInstances",
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
    setResourcesInstances: (
      state,
      action: PayloadAction<{ records: ResourceInstance[]; total: number }>
    ) => {
      state.records = action.payload.records;
      state.total = action.payload.total;
    },
    addResourceInstance: (state, action: PayloadAction<ResourceInstance>) => {
      state.records.push(action.payload);
      state.total = state.total + 1;
    },

    updateResourceInstance: (
      state,
      action: PayloadAction<ResourceInstance>
    ) => {
      state.records = state.records.map((resourceInstance) =>
        resourceInstance.id === action.payload.id
          ? action.payload
          : resourceInstance
      );
    },
    removeResourceInstance: (state, action: PayloadAction<string>) => {
      state.records = state.records.filter(
        (resource) => resource.id !== action.payload
      );
      state.total = state.total - 1;
    },
  },
});

export const selectResourceInstances = (state: RootState) =>
  state.resourceInstances;

export const {
  setResourceFilters,
  resetResourceFilters,
  setResourcePagination,
  resetResourcePagination,
  setResourcesInstances,
  addResourceInstance,
  updateResourceInstance,
  removeResourceInstance,
} = resourceInstancesSlice.actions;

export const { reducer: resourceInstancesReducer } = resourceInstancesSlice;
