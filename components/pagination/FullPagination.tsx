import React, { Fragment, useEffect, useState } from "react";

import { useSelector } from "react-redux";

import {
  selectResources,
  setResourcePagination,
} from "@/config/redux/reducers/resources.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { ResourceTypes } from "@/interfaces/resource/Type";

type FullPaginationProps = {
  showTotalRecords?: boolean;
  resourceType: ResourceTypes;
};

export const FullPagination: React.FC<FullPaginationProps> = (props) => {
  const dispatch = useAppDispatch();
  const { pagination, total } = useSelector(selectResources);
  const { page, limit } = pagination;
  const { showTotalRecords, resourceType } = props;
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
        <p role="alert">No more results to show</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="col-lg-12 col-md-12">
        <div className="pagination-area user-select-none">
          <button
            className={`page-numbers ${page === 1 ? "current" : ""}`}
            onClick={() => handleGoToPage(1)}
          >
            1
          </button>

          {page !== 1 && page - 1 !== 1 && (
            <button
              className="prev page-numbers previous-page"
              onClick={handlePreviousPage}
              title={`Previous page:(${page - 1})`}
            >
              <i className="bx bx-chevron-left"></i>
            </button>
          )}

          {page !== 1 && page !== totalPages && (
            <button
              className={`prev page-numbers ${page !== 1 && page !== totalPages ? "current" : ""}`}
              onClick={() => handleGoToPage(page - 1)}
            >
              {page}
            </button>
          )}

          {page !== totalPages && page + 1 !== totalPages && (
            <button
              className="next page-numbers next-page"
              onClick={handleNextPage}
              title={`Next page:(${page + 1})`}
            >
              <i className="bx bx-chevron-right"></i>
            </button>
          )}

          <button
            className={`next page-numbers ${page === totalPages ? "current" : ""}`}
            onClick={() => handleGoToPage(totalPages)}
          >
            {total}
          </button>
          {showTotalRecords && (
            <div className="my-3">
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
