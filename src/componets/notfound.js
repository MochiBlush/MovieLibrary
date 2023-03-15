import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="container">
    <h1 className="fs-1 text-center">Nothing here!</h1>
    <Link to="/moviebrowser">
      Return to home.
    </Link>
  </div>
);

export default NotFound;