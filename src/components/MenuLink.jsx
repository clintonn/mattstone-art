import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';

const MenuLink = ({ to, children }) => (
  <Link to={to} activeClassName="Link--active">
    {children}
  </Link>
);

MenuLink.propTypes = {
  to: propTypes.string.isRequired,
  children: propTypes.string.isRequired,
};

export default MenuLink;
