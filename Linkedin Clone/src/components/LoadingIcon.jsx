import React from "react";
import "../styles/LoadingIcon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const LoadingIcon = () => (
  <div>
    <div className="loading-icon">
      <i class="bi bi-linkedin"></i>
    </div>
    <div className="loading-bar">
      <div className="loading-bar-progress"></div>
    </div>
  </div>
);

export default LoadingIcon;
