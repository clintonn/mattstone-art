import React from 'react';
import Helmet from 'react-helmet';
import propTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Nav from './Nav';
import './base.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
    render={({ site }) => (
      <>
        <Helmet
          titleTemplate={`%s | ${site.siteMetadata.title}`}
          defaultTitle={site.siteMetadata.title}
        >
          <html lang="en" amp />
        </Helmet>
        <Nav />
        <main>{children}</main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
