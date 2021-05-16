import React, { useState } from "react";

function Alert({ message, type }) {
  return (
    <div className="alert">
      <div className={"alert-container " + type}>{message}</div>
    </div>
  );
}

export default Alert;
