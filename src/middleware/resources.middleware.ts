import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import {
  ResourceCategoryFilters,
  setResourceCategories,
} from "@/config/redux/reducers/resource-categories.reducer";
import {
  Pagination,
  ResourceFilters,
  addResource,
} from "@/config/redux/reducers/resources.reducer";
import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import { Category } from "@/interfaces/resource/Category";
import { ResourceDetail } from "@/interfaces/resource/Detail";
import {
  Resource,
  ResourceCreate,
  ResourcePreview,
} from "@/interfaces/resource/Resource";
import { ResourceTypes } from "@/interfaces/resource/Type";

export interface ResourcesResponse {
  records: Resource[];
  total: number;
}

// filters: ResourceFilters,
// pagination: Pagination
// export const fetchResourcesMiddleware = () => {
//   return async (dispatch: Dispatch<Action>) => {
//     // return (
//     //   axios
//     //     // TODO: Usar variable de entorno
//     //     .get<ResourcesResponse>(`${location.protocol}//${location.host}/api`, {
//     //       params: {
//     //         ...filters,
//     //         ...pagination,
//     //       },
//     //     })
//     //     .then(({ data }) => data)
//     dispatch(startGlobalLoading({ message: "Fetching resources..." }));
//     return Promise.resolve({ records: booksData, total: booksData.length })
//       .then(({ records, total }) => {
//         dispatch(setResources({ records, total }));
//       })
//       .catch((/* error */) => {
//         dispatch(
//           setGlobalAlert({
//             message: "Resources could not be fetched ⛔",
//             timeout: 5000,
//             severity: SeverityLevel.ERROR,
//           })
//         );
//       })
//       .finally(() => {
//         dispatch(finishGlobalLoading());
//       });
//   };
// };

export const fetchFullResourceMiddleware = (slug: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(
      startGlobalLoading({ message: "Fetching resource information..." })
    );
    return axios
      .get<Resource>(
        `${location.protocol}//${location.host}/api/resources/${slug}`
      )
      .then(({ data }) => data)
      .then((resource) => {
        dispatch(addResource(resource));
      })
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const fetchResourceDetailMiddleware = (slug: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Fetching resource detail..." }));
    return (
      axios
        .get<ResourceDetail>(
          `${location.protocol}//${location.host}/api/resources/${slug}/detail`
        )
        .then(({ data }) => data)
        // .then((detail) => {
        //   dispatch(setResourceDetail({ id, detail }));
        // })
        .catch((/* error */) => {
          dispatch(
            setGlobalAlert({
              message: "Resource detail could not be fetched ⛔",
              timeout: 5000,
              severity: SeverityLevel.ERROR,
            })
          );
          return null;
        })
        .finally(() => {
          dispatch(finishGlobalLoading());
        })
    );
  };
};

export const fetchResourcePreviewMiddleware = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    return axios
      .get<ResourcePreview>(
        `${location.protocol}//${location.host}/api/resources/${id}/preview`
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource preview could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return null;
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const fetchResourceCategoriesMiddleware = (
  filters: ResourceCategoryFilters,
  pagination: Pagination
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(
      startGlobalLoading({ message: "Fetching resource categories..." })
    );
    return axios
      .get<{ total: number; records: Category[] }>(
        `${location.protocol}//${location.host}/api/categories`,
        {
          params: { ...filters, ...pagination },
        }
      )
      .then(({ data }) => data)
      .then(({ records, total }) => {
        dispatch(setResourceCategories({ records, total }));
      })
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource categories could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const fetchFavoriteResourcesMiddleware = (type: ResourceTypes) => {
  return async (dispatch: Dispatch<Action>) => {
    return axios
      .get<Resource[]>(
        `${location.protocol}//${location.host}/api/resources/favorites/${type}`
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Favorite resources could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return [] as Resource[];
      });
  };
};

export const createResourceMiddleware = (
  resource: ResourceCreate,
  imageUrl: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Creating Resource..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();
    formData.append("name", resource.name);
    formData.append("shortDescription", resource.shortDescription);
    formData.append("edition", resource.edition);
    formData.append("categories", JSON.stringify(resource.categories));
    formData.append("publisher", resource.publisher.toString());
    formData.append("type", resource.type);
    formData.append("paragraphs", JSON.stringify(resource.paragraphs));
    formData.append("isbn", resource.isbn || "");
    formData.append("author", resource.author);
    formData.append("publicationYear", resource.publicationYear.toString());
    formData.append("imageUrl", imageUrl);

    return axios
      .post<{ message: string }>(
        `${location.protocol}//${location.host}/api/resources`,
        formData,
        { headers }
      )
      .then(({ data }) => data)
      .then(({ message }) => {
        dispatch(
          setGlobalAlert({
            message,
            timeout: 5000,
            severity: SeverityLevel.SUCCESS,
          })
        );
      })
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource could not be created. ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return null;
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const fetchResourcesMiddleware = (
  resourceFilter: ResourceFilters,
  pagination: Pagination
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Fetching resources..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .get<ResourcesResponse>(
        `${location.protocol}//${location.host}/api/resources`,
        { headers, params: { ...resourceFilter, ...pagination } }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Publishers could not be fetched. ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return null;
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const removeResourceMiddleware = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Deleting resource..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .delete<void>(
        `${location.protocol}//${location.host}/api/resources/${id}`,
        { headers }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource could not be deleted. ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return null;
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};
