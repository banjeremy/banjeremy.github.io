import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { css } from 'emotion';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Link
          to="#"
          className={css`
            transition: all ease-in-out 0.2s;
            text-decoration: none;
            text-align: center;
            padding: 25px;

            &:hover {
              transform: scale(1.2);
            }
          `}
        >
          <h1>Jeremy Jones</h1>
          <p>Software Engineer</p>
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
