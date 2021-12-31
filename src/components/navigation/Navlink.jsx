import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = ({ linkTo, span, linkName, liClasses, linkClasses, spanClasses }) => (
  <li className={liClasses}>
    <Link className={linkClasses} to={linkTo}>
      <span className={spanClasses}>{span}</span>
      {linkName}
    </Link>
  </li>
);

export default Navlink;
