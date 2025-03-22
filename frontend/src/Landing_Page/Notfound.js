import React from "react";

function Notfound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">404 NOT FOUND</h1>
        <p>
          <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>{" "}
          Sorry,The Page You Are Looking For Does Not Exist.
          <i class="fa fa-frown-o" aria-hidden="true"></i>
        </p>
      </div>
    </div>
  );
}

export default Notfound;
