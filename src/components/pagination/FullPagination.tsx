"use client";

import React, { Fragment, useEffect, useState } from "react";

import { useSelector } from "react-redux";

import {
  selectResources,
  setResourcePagination,
} from "@/config/redux/reducers/resources.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { ResourceTypes } from "@/interfaces/resource/Type";

type FullPaginationProps = {
  resourceType: ResourceTypes;
  showTotalRecords?: boolean;
  showNoResultsAlert?: boolean;
};

export const FullPagination = (props: FullPaginationProps) => {
  const dispatch = useAppDispatch();
  const { pagination, total } = useSelector(selectResources);
  const { page, limit } = pagination;
  const { resourceType, showTotalRecords, showNoResultsAlert } = props;
  const [totalPages, setTotalPages] = useState(0);

  const handleGoToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    if (page === page) return;
    dispatch(setResourcePagination({ page, limit }));
  };

  const handleNextPage = () => {
    if (page + 1 >= totalPages) return;
    dispatch(setResourcePagination({ page: page + 1, limit }));
  };

  const handlePreviousPage = () => {
    if (page - 1 <= 1) return;
    dispatch(setResourcePagination({ page: page - 1, limit }));
  };

  useEffect(() => {
    setTotalPages(Math.ceil(total / limit));
  }, [limit, total]);

  if (total > limit) {
    return (
      <Fragment>
        {showNoResultsAlert && (
          <p className="text-center my-2 text-white">No more results to show</p>
        )}
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="flex flex-row justify-center">
        <div>
          <button
            className={`bg-blue-500 py-2 px-3 rounded-sm text-white ${page === 1 ? "current" : ""}`}
            onClick={() => handleGoToPage(1)}
          >
            1
          </button>

          {page !== 1 && page - 1 !== 1 && (
            <button
              className="bg-blue-500 py-2 px-3 rounded-sm text-white"
              onClick={handlePreviousPage}
              title={`Previous page:(${page - 1})`}
            >
              <i className="bx bx-chevron-left"></i>
            </button>
          )}

          {page !== 1 && page !== totalPages && (
            <button
              className={`bg-blue-500 py-2 px-3 rounded-sm text-white prev page-numbers ${page !== 1 && page !== totalPages ? "current" : ""}`}
              onClick={() => handleGoToPage(page - 1)}
            >
              {page}
            </button>
          )}

          {page !== totalPages && page + 1 !== totalPages && (
            <button
              className="bg-blue-500 py-2 px-3 rounded-sm text-white next page-numbers next-page"
              onClick={handleNextPage}
              title={`Next page:(${page + 1})`}
            >
              <i className="bx bx-chevron-right"></i>
            </button>
          )}

          <button
            className={`bg-blue-500 py-2 px-3 rounded-sm text-white next page-numbers ${page === totalPages ? "current" : ""}`}
            onClick={() => handleGoToPage(totalPages)}
          >
            {total}
          </button>
          {showTotalRecords && (
            <div className="my-3 text-white text-center">
              <span>
                {total} {resourceType}
              </span>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};
