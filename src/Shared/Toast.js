import React, { Fragment } from "react";

const Toast = () => {
  return (
    <Fragment>
      <div
        class="toast w-25 align-items-center text-bg-success border-0 float-end "
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="d-flex">
          <div class="toast-body">Hello, world! This is a toast message.</div>
          <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </Fragment>
  );
};

export default Toast;
