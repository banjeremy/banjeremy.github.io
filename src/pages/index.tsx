import React from 'react';

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
        text-align: center;
      `}
    >
      <h1>Jeremy Jones</h1>
      <p>Software Developer</p>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
