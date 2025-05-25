import React, { useEffect, useState } from "react";
import "./NetflixTitle.css";
import logoImage from "logo.svg"; // Update with the path to your logo

const NetflixTitle = () => {
  return <img src={logoImage} alt="Custom Logo" className={`netflix-logo`} />;
};

export default NetflixTitle;
