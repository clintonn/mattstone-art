import React from 'react';
import MenuLink from './MenuLink';

const Nav = () => (
  <nav>
    <a className="Logo" href="/">
      <h1>Matthew J. Stone</h1>
    </a>
    <ul>
      <li>
        <MenuLink to="/about">About</MenuLink>
      </li>
      <li>
        <MenuLink to="/foo">Foo</MenuLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
